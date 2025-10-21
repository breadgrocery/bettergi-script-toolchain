import { loadConfig } from "c12";
import chokidar from "chokidar";
import esbuild from "esbuild";
import fs from "fs-extra";
import path from "node:path";
import { cwd } from "node:process";
import glob from "tiny-glob";
import { type ScriptConfig } from "./config.js";
import { installScript } from "./util/bettergi.js";
import { syncManifestConfig, syncSettingsConfig } from "./util/meta.js";
import { terminate } from "./util/process.js";

(async () => {
  const loadConfiguration = async (): Promise<{
    config: ScriptConfig;
    filepath: string;
  }> => {
    const { config, configFile } = await loadConfig({ name: "bettergi" });
    if (!configFile) return terminate("No bettergi.config.(js,ts,cjs,mjs) files found");

    return { config: config, filepath: configFile };
  };

  const { config, filepath } = await loadConfiguration();
  const main = [config.main || "main.ts"];
  const assetsDir = config.assetsDir || "assets";
  const outDir = path.resolve(config.outDir || "dist");
  const additionalFiles = [
    ...(Array.isArray(config.additionalFiles)
      ? config.additionalFiles
      : config.additionalFiles
        ? [config.additionalFiles]
        : ["README.md"])
  ];
  const minify = config.minify ?? false;

  // Sync files
  const sync = async () => {
    try {
      // Reload config
      Object.assign(config, (await loadConfiguration()).config);

      // Write into manifest.json
      const manifest = await syncManifestConfig(outDir, config);

      // Write into settings.json
      await syncSettingsConfig(outDir, config);

      // Copy asset files
      if (fs.existsSync(assetsDir)) {
        fs.copySync(assetsDir, path.join(outDir, assetsDir));
      }

      // Cpoy additional files
      const copyTasks = await Promise.all(
        additionalFiles.map(async item => {
          if (typeof item === "string") {
            const paths = await glob(item, { cwd: path.resolve("."), absolute: true });
            return paths.map(p => ({
              from: p,
              to: path.resolve(outDir, path.basename(p))
            }));
          }
          if (typeof item === "object") {
            return [
              {
                from: path.resolve(item.from),
                to: item.to
                  ? path.resolve(outDir, item.to)
                  : path.resolve(outDir, path.basename(item.from))
              }
            ];
          }
          return [];
        })
      );
      await Promise.all(copyTasks.flat().map(p => fs.existsSync(p.from) && fs.copy(p.from, p.to)));

      // Install script if enabled
      if (config.bettergi?.enable ?? true) {
        await installScript(outDir, config, manifest);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Configure build options
  const context = await esbuild.context({
    outdir: outDir,
    entryPoints: main,
    charset: "utf8",
    format: "esm",
    target: "es2022",
    bundle: true,
    minify,
    plugins: [
      {
        name: "rebuild",
        setup: build => {
          build.onEnd(sync); /** Sync files after build */
        }
      }
    ]
  });

  // Enable watch mode if --watch argument is passed
  if (process.argv.includes("--watch")) {
    // Watch code
    await context.watch();
    // Watch files
    const watchPaths = [filepath, assetsDir, "package.json"] as string[];
    chokidar.watch(watchPaths).on("all", async (_, path, state) => {
      if (state?.isFile()) {
        console.debug(`[File Watcher]: ${path}`);
        await sync();
      }
    });
    console.log("Watching for changes...");
  } else {
    fs.removeSync(outDir); // Remove old dist folder
    await context.rebuild();
    await sync();
    await context.dispose();
    console.log("Build completed.");
  }
})();
