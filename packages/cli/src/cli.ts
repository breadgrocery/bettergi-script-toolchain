import { type BuildOptions, build, watch } from "rolldown";
import { ConfigManager } from "./config/index.js";
import FileWatcher from "./plugins/file-watcher.js";
import ImageMatLoader from "./plugins/loaders/image-mat-loader.js";
import JSONLoader from "./plugins/loaders/json-loader.js";
import TextLoader from "./plugins/loaders/text-loader.js";
import PostBuildProcessor from "./plugins/post-build-processor.js";
import { lookupPackageInfo } from "./utils/pkg.js";

(async () => {
  const manager = await ConfigManager.create();
  const { config } = manager.configData;

  // 配置构建选项
  const buildOptions: BuildOptions = {
    /******************************** 输入选项 ********************************/
    input: config.main,
    plugins: [
      TextLoader(), // 文本文件加载器
      JSONLoader(), // JSON 文件加载器
      ImageMatLoader(manager), // 图像文件加载器
      FileWatcher(manager), // 监听文件变更
      PostBuildProcessor(manager) // 构建后处理
    ],
    treeshake: true,
    watch: {
      buildDelay: 500 // 防抖
    },
    checks: {
      pluginTimings: false
    },
    tsconfig: true,
    /******************************** 输出选项 ********************************/
    output: {
      dir: config.outDir,
      format: "esm",
      sourcemap: false,
      banner: ({ isEntry }) => (isEntry ? config.banner : ""),
      chunkFileNames: "libs/[name].js",
      sanitizeFileName(name) {
        return name
          .replace(/[\u0000-\u001F\u007F]/g, "_")
          .replace(/["#$%&*,:/;<=>?\[\]^`{|}]/g, "_");
      },
      minify: config.minify,
      advancedChunks: config.codeSplitting
        ? {
            groups: [
              // 外部依赖包
              {
                priority: 0,
                test: /node_modules|bettergi-script-toolchain[\\/]packages/,
                name(moduleId) {
                  const pkgInfo = lookupPackageInfo(moduleId);
                  return typeof pkgInfo?.name === "string"
                    ? pkgInfo.name.replace("/", "+")
                    : undefined;
                }
              },
              // 虚拟模块
              {
                priority: 999,
                test: /^virtual:.+:/,
                name(moduleId) {
                  const [virtual, name] = moduleId.split(":");
                  return `${virtual}@${name}`;
                }
              },
              // rolldown
              {
                priority: 999,
                test: /rolldown:runtime/,
                name: "rolldown-runtime"
              }
            ]
          }
        : undefined,
      legalComments: config.minify ? "none" : "inline",
      preserveModules: false, // 不保留原始模块结构
      topLevelVar: false, // ESM 顶层不使用 var 声明
      minifyInternalExports: false, // 禁用导出重命名
      cleanDir: true, // 清理输出目录
      keepNames: true // 保留原始函数和类名
    }
  };

  // 根据命令行参数决定是否启用监听模式
  if (process.argv.includes("--watch")) {
    console.log("👀 Watching for changes...");
    const watcher = watch(buildOptions);
    await watcher.close();
  } else {
    await build(buildOptions);
    console.log("✅ Build completed.");
  }
})();
