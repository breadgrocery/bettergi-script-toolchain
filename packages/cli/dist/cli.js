import chokidar from "chokidar";
import { cosmiconfig } from "cosmiconfig";
import esbuild from "esbuild";
import fs from "fs-extra";
import path from "node:path";
import { getInstallPath, installScript } from "./util/bettergi.js";
import { tempFile } from "./util/file.js";
import { syncManifestConfig, syncSettingsConfig } from "./util/meta.js";
import { terminate } from "./util/process.js";
(async () => {
    const loadConfig = async () => {
        const explorer = cosmiconfig("bettergi", {
            searchStrategy: "project",
            cache: false
        });
        // Locate config file
        const sr = await explorer.search();
        if (!sr)
            return terminate("No bettergi.config.(js,ts,cjs,mjs) files found");
        // Clone config file to avoid caching issues
        const tempPath = tempFile(sr.filepath);
        try {
            const lr = await explorer.load(tempPath);
            return { config: lr?.config, filepath: sr.filepath };
        }
        finally {
            fs.removeSync(tempPath);
        }
    };
    const { config, filepath } = await loadConfig();
    const main = [config.main || "main.ts"];
    const assetsDir = config.assetsDir || "assets";
    const outDir = path.resolve(config.outDir || "dist");
    // Sync files
    const sync = async () => {
        // Reload config
        Object.assign(config, (await loadConfig()).config);
        // Write into manifest.json
        const manifest = await syncManifestConfig(outDir, config);
        // Write into settings.json
        await syncSettingsConfig(outDir, config);
        // Copy asset files
        if (fs.existsSync(assetsDir)) {
            fs.copySync(assetsDir, path.join(outDir, assetsDir));
        }
        // Install script if enabled
        if (config.bettergi?.enable ?? true) {
            if (config.bettergi?.installPath || (await getInstallPath())) {
                await installScript(outDir, config, manifest);
            }
            else {
                console.warn(`Auto-detect BetterGI failed. Set "bettergi.installPath" manually.`);
            }
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
        minify: false,
        plugins: [
            {
                name: "rebuild",
                setup: build => {
                    build.onEnd(sync); // Sync files after build
                }
            }
        ]
    });
    // Enable watch mode if --watch argument is passed
    if (process.argv.includes("--watch")) {
        // Watch code
        await context.watch();
        // Watch files
        const watchPaths = [filepath, assetsDir];
        chokidar.watch(watchPaths).on("all", sync);
        console.log("Watching for changes...");
    }
    else {
        fs.removeSync(outDir); // Remove old dist folder
        await context.rebuild();
        await sync();
        await context.dispose();
        console.log("Build completed.");
    }
})();
