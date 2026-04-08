import { type BuildOptions, build, watch } from "rolldown";
import { ConfigManager } from "./config/index.js";
import CodeFormatter from "./plugins/code-formatter.js";
import FileWatcher from "./plugins/file-watcher.js";
import ImageMatLoader from "./plugins/loaders/image-mat-loader.js";
import JSONLoader from "./plugins/loaders/json-loader.js";
import TextLoader from "./plugins/loaders/text-loader.js";
import PostBuildProcessor from "./plugins/post-build-processor.js";

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
      CodeFormatter(), // 代码格式化
      FileWatcher(manager), // 监听文件变更
      PostBuildProcessor(manager) // 构建后处理
    ],
    treeshake: config.treeshake,
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
          .replace(/["#$%&*,:;<=>?\[\]^`{|}]/g, "_");
      },
      minify: config.minify,
      codeSplitting: config.codeSplitting ? config.manualCodeSplitting : undefined,
      comments: {
        legal: !config.minify,
        annotation: false,
        jsdoc: !config.minify
      },
      preserveModules: false, // 不保留原始模块结构
      topLevelVar: false, // ESM 顶层不使用 var 声明
      minifyInternalExports: false, // 禁用导出重命名
      cleanDir: true, // 清理输出目录
      keepNames: true // 保留原始函数和类名
    }
  };

  // 根据命令行参数决定是否启用监听模式
  if (process.argv.includes("--watch")) {
    const watcher = watch(buildOptions);
    watcher.on("event", event => {
      if (event.code === "START") {
        console.info("👀 Watching for changes...");
      }
    });
    await watcher.close();
  } else {
    await build(buildOptions);
    console.info("✅ Build completed.");
  }
})();
