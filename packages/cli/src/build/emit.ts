import fs from "fs-extra";
import path from "node:path";
import { type Config } from "../config/index.js";

export const emitManifestFile = (config: Config) => {
  const { outDir, manifest } = config;

  let error = "";
  if (!manifest.name) {
    error +=
      "Missing manifest.name. Set `manifest.name` in bettergi.config or `name` in package.json.";
  }
  if (!manifest.version) {
    error +=
      "Missing manifest.version. Set `manifest.version` in bettergi.config or `version` in package.json.";
  }
  if (!manifest.description) {
    error +=
      "Missing manifest.description. Set `manifest.description` in bettergi.config or `description` in package.json.";
  }
  if (!manifest.authors || manifest.authors.filter((author: any) => author?.name).length === 0) {
    error +=
      "Missing manifest.authors. Set `manifest.authors` in bettergi.config or `author` in package.json.";
  }
  if (error) throw new Error(error);

  const filePath = path.join(outDir, "manifest.json");
  fs.outputJSONSync(filePath, manifest, { spaces: 2 });
};

export const emitSettingsFile = (config: Config) => {
  const { outDir, manifest, settings } = config;
  if (!manifest.settings_ui) return;

  const filePath = path.join(outDir, manifest.settings_ui);
  fs.outputJSONSync(filePath, settings, { spaces: 2 });
};

export const emitAssets = (config: Config) => {
  const { outDir, assetsDir } = config;
  if (!fs.existsSync(assetsDir)) return;

  const src = path.resolve(assetsDir);
  const dest = path.join(outDir, assetsDir);
  fs.existsSync(src) && fs.copySync(src, dest);
};

export const emitAdditionalFiles = (config: Config) => {
  for (const item of config.additionalFiles) {
    fs.existsSync(item.from) && fs.copySync(item.from, item.to);
  }
};
