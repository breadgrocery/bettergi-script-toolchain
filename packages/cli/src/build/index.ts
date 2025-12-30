import debounce from "debounce";
import { type ConfigManager } from "../config/index.js";
import { installScript } from "./bettergi.js";
import { emitAdditionalFiles, emitAssets, emitManifestFile, emitSettingsFile } from "./emit.js";

const postProcess = async (manager: ConfigManager) => {
  try {
    // 重载配置
    await manager.reload();
    const { config } = manager.configData;

    // 输出文件
    emitManifestFile(config); // manifest.json
    emitSettingsFile(config); // settings.json
    emitAssets(config); // 资源文件
    emitAdditionalFiles(config); // 额外文件

    // 安装脚本到 BetterGI 脚本目录
    installScript(config);
  } catch (err) {
    console.warn(`Error post-processing build: ${err}`);
  }
};

export const postBuild = debounce(postProcess, 500, { immediate: true });
