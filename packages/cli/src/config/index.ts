import { loadConfig } from "c12";
import fs from "fs-extra";
import path from "node:path";
import { type ScriptConfig } from "../config.js";
import { parseBetterGIConfig } from "./bettergi.js";
import { parseBuildConfig } from "./build.js";
import { parseManifestConfig } from "./manifest.js";

export const parseConfig = async () => {
  const { config, configFile } = await loadConfig<ScriptConfig>({ name: "bettergi" });
  if (!configFile) {
    log.error("No bettergi.config.(js,ts,cjs,mjs) files found");
    process.exit(1);
  }

  // 读取 package.json
  const pkg = fs.readJSONSync(path.resolve("package.json"));

  // 解析构建配置
  const build = await parseBuildConfig(config, pkg);

  // 解析清单信息
  const manifest = await parseManifestConfig(config, pkg);

  // 解析 UI 配置
  const settings = config.settings && config.settings?.length > 0 ? config.settings : undefined;

  // 解析 BetterGI 调试配置
  const bettergi = await parseBetterGIConfig(config, pkg);

  return {
    config: {
      ...build,
      manifest,
      settings,
      bettergi
    },
    configFile
  };
};

export type ConfigData = Awaited<ReturnType<typeof parseConfig>>;

export type Config = ConfigData["config"];

export class ConfigManager {
  public configData: ConfigData;

  constructor(configData: ConfigData) {
    this.configData = configData;
  }

  async reload() {
    const configData = await parseConfig();
    this.configData = configData;
  }

  static async create() {
    const configData = await parseConfig();
    return new ConfigManager(configData);
  }
}
