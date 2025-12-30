import { loadConfig } from "c12";
import { type ScriptConfig } from "../config.js";
import { getPackageInfo } from "../utils/pkg.js";
import { parseBetterGIConfig } from "./bettergi.js";
import { parseBuildConfig } from "./build.js";
import { parseManifestConfig } from "./manifest.js";

export interface ConfigContext {
  config: ScriptConfig;
  configFile: string;
  pkg: any;
  build: Awaited<ReturnType<typeof parseBuildConfig>>;
  bettergi: Awaited<ReturnType<typeof parseBetterGIConfig>>;
  manifest: Awaited<ReturnType<typeof parseManifestConfig>>;
  settings?: ScriptConfig["settings"];
}

export const parseConfig = async () => {
  const { config, configFile } = await loadConfig<ScriptConfig>({ name: "bettergi" });
  if (!configFile) {
    console.error("No bettergi.config.(js,ts,cjs,mjs) files found.");
    process.exit(1);
  }

  // 配置上下文
  const context: ConfigContext = { config, configFile } as ConfigContext;

  // 读取 package.json
  context.pkg = getPackageInfo();

  // 解析构建配置
  context.build = await parseBuildConfig(context);

  // 解析清单信息
  context.manifest = await parseManifestConfig(context);

  // 解析 UI 配置
  context.settings = config.settings && config.settings?.length > 0 ? config.settings : undefined;

  // 解析 BetterGI 调试配置
  context.bettergi = await parseBetterGIConfig(context);

  return {
    config: {
      ...context.build,
      manifest: context.manifest,
      settings: context.settings,
      bettergi: context.bettergi
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
