import path from "node:path";
import { getInstallPath } from "../utils/bettergi.js";
import { ConfigContext } from "./index.js";

type Context = Omit<ConfigContext, "bettergi">;

export const parseBetterGIConfig = async (context: Context) => {
  const { config, manifest } = context;

  // 是否安装脚本到 BetterGI 脚本目录
  const enable = config.bettergi?.enable ?? true;

  // BetterGI 安装位置
  const installPath = enable ? config.bettergi?.installPath || (await getInstallPath()) : undefined;

  // BetterGI 脚本目录
  const scriptPath =
    config.bettergi?.scriptPath ||
    (installPath ? path.join(installPath, "User/JsScript") : undefined);

  // 输出脚本文件夹
  const outDir: string | undefined = config.bettergi?.outDir || manifest.name;

  return {
    enable,
    installPath,
    scriptPath,
    outDir
  };
};
