import path from "node:path";
import { type ScriptConfig } from "../config.js";
import { getInstallPath } from "../utils/bettergi.js";

export const parseBetterGIConfig = async (config: ScriptConfig, pkg: any) => {
  // 是否安装脚本到 BetterGI 脚本目录
  const enable = config.bettergi?.enable ?? true;

  // BetterGI 安装位置
  const installPath = enable ? config.bettergi?.installPath || (await getInstallPath()) : undefined;

  // BetterGI 脚本目录
  const scriptPath =
    config.bettergi?.scriptPath ||
    (installPath ? path.join(installPath, "User/JsScript") : undefined);

  // 输出脚本文件夹
  const outDir = config.bettergi?.outDir || config.manifest?.name || pkg.name;

  return {
    enable,
    installPath,
    scriptPath,
    outDir
  };
};
