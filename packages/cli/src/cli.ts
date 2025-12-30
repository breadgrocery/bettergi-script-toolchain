import { type BuildOptions, build, watch } from "rolldown";
import { postBuild } from "./build/index.js";
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
    output: {
      dir: config.outDir,
      format: "esm",
      banner: ({ isEntry }) => (isEntry ? config.banner : ""),
      chunkFileNames: "libs/[name].js",
      minify: config.minify,
      advancedChunks: config.codeSplitting
        ? {
            groups: [
              // 将所有外部依赖包拆分到单独的chunk中
              {
                priority: 1,
                test: /node_modules|bettergi-script-toolchain[\\/]packages/,
                name(moduleId) {
                  const pkgInfo = lookupPackageInfo(moduleId);
                  return typeof pkgInfo?.name === "string"
                    ? pkgInfo.name.toLowerCase().replace("/", "+")
                    : undefined;
                }
              },
              // 将虚拟模块拆分到单独的chunk中
              {
                priority: 2,
                test: /^virtual:.+:/,
                name(moduleId) {
                  const [virtual, name] = moduleId.split(":");
                  return `${virtual}@${name}`;
                }
              },
              // 将 rolldown 运行时代码拆分到单独的chunk中
              {
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
    },
    checks: {
      pluginTimings: false
    },
    tsconfig: true
  };

  // 根据命令行参数决定是否启用监听模式
  if (process.argv.includes("--watch")) {
    console.log("👀 Watching for changes...");
    const watcher = watch(buildOptions);
    await watcher.close();
  } else {
    await build(buildOptions);
    await postBuild(manager);
    console.log("✅ Build completed.");
  }
})();
