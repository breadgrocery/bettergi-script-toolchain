import chokidar from "chokidar";
import esbuild from "esbuild";
import fs from "fs-extra";
import { postBuild } from "./build/index.js";
import { ConfigManager } from "./config/index.js";
import ImageMatLoader from "./plugins/image-mat-loader.js";

(async () => {
  const manager = await ConfigManager.create();
  const { config, configFile } = manager.configData;

  // 配置构建选项
  const context = await esbuild.context({
    outdir: config.outDir,
    entryPoints: config.main,
    format: "esm",
    target: "es2022",
    bundle: true,
    minify: config.minify,
    legalComments: config.minify ? "none" : "inline",
    charset: "utf8",
    banner: { js: config.banner },
    plugins: [
      ImageMatLoader({
        outDir: config.outDir,
        baseDir: config.loaders.image.baseDir
      }),
      {
        name: "rebuild",
        setup: build => {
          build.onEnd(async () => {
            await postBuild(manager);
          });
        }
      }
    ]
  });

  // 清理输出目录
  fs.removeSync(config.outDir);

  // 根据命令行参数决定是否启用监听模式
  if (process.argv.includes("--watch")) {
    await context.watch();
    // 监听文件变化
    const watchPaths = [
      ...new Set([configFile, "package.json", config.assetsDir, ...config.watch])
    ];
    chokidar.watch(watchPaths).on("all", async (event, path, state) => {
      if (state && state.isFile()) {
        console.debug(`[${new Date().toISOString()}][${event}]: ${path}`);
        await postBuild(manager);
      }
    });
    console.log("👀 Watching for changes...");
  } else {
    await context.rebuild();
    await postBuild(manager);
    await context.dispose();
    console.log("✅ Build completed.");
  }
})();
