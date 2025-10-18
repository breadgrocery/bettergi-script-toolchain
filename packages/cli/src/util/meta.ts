import fs from "fs-extra";
import path from "node:path";
import { type ScriptConfig } from "../config";
import { getVersion } from "./bettergi.js";

const manifestFile = "manifest.json";
const settingsUIFile = "settings.json";

export const syncManifestConfig = async (outDir: string, config: ScriptConfig) => {
  const pkg = fs.readJSONSync(path.resolve("package.json"));

  const manifest: Record<string, any> = {};
  manifest.manifest_version = config.manifest?.manifest_version || 1;
  manifest.name = config.manifest?.name || pkg.name;
  manifest.version = config.manifest?.version || pkg.version;
  manifest.bgi_version = config.manifest?.bgi_version || (await getVersion());
  manifest.description = config.manifest?.description || pkg.description;
  manifest.authors = config.manifest?.authors || [
    typeof pkg.author === "object"
      ? {
          name: pkg.author.name,
          ...(pkg.author.url && { link: pkg.author.url })
        }
      : {
          ...(pkg.author && { name: pkg.author })
        }
  ];
  manifest.main = `${path.parse(config.main || "main.ts").name}.js`;
  config.settings && config.settings?.length > 0 && (manifest.settings_ui = settingsUIFile);
  manifest.scripts = config.manifest?.scripts && [...config.manifest.scripts];
  manifest.library = config.manifest?.library && [...config.manifest.library];

  validateManifest(manifest);

  await fs.writeJSON(path.join(outDir, manifestFile), manifest, {
    spaces: 2
  });

  return manifest;
};

const validateManifest = (manifest: Record<string, any>) => {
  if (!manifest.name) {
    throw new Error(
      "Missing manifest.name. Set `manifest.name` in bettergi.config or `name` in package.json."
    );
  }

  if (!manifest.version) {
    throw new Error(
      "Missing manifest.version. Set `manifest.version` in bettergi.config or `version` in package.json."
    );
  }

  if (!manifest.description) {
    throw new Error(
      "Missing manifest.description. Set `manifest.description` in bettergi.config or `description` in package.json."
    );
  }

  if (!manifest.authors || manifest.authors.filter((author: any) => author?.name).length === 0) {
    throw new Error(
      "Missing manifest.authors. Set `manifest.authors` in bettergi.config or `author` in package.json."
    );
  }
};

export const syncSettingsConfig = async (outDir: string, config: ScriptConfig) => {
  if (config.settings && config.settings.length > 0) {
    await fs.writeJSON(path.join(outDir, settingsUIFile), config.settings, {
      spaces: 2
    });
  }
};
