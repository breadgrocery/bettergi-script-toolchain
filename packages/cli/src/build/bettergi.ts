import fs from "fs-extra";
import path from "node:path";
import { type Config } from "../config/index.js";

export const installScript = (config: Config) => {
  const { outDir, manifest, bettergi } = config;
  if (!bettergi.enable) return;

  if (bettergi.scriptPath) {
    const scriptDir = bettergi.outDir || manifest.name;
    if (!scriptDir) {
      console.warn(`⚠️ Error determining script directory for BetterGI installation.`);
      return;
    }

    const dest = path.join(bettergi.scriptPath, scriptDir);
    fs.existsSync(outDir) && fs.copySync(outDir, dest);
  } else {
    console.warn(`⚠️ Auto-detect BetterGI failed. Set "bettergi.installPath" manually.`);
  }
};
