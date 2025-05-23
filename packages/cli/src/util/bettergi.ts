import fs from "fs-extra";
import path from "node:path";
import util from "node:util";
import Registry from "winreg";
import { type ScriptConfig } from "../config.js";

// Cache install path
let _installPath: string | undefined = undefined;

export const getInstallPath = async () => {
  if (_installPath) return _installPath;

  const defaultKey = Registry.DEFAULT_VALUE;
  const reg = new Registry({
    hive: Registry.HKCU,
    key: "\\Software\\Classes\\BetterGI\\shell\\open\\command"
  });
  try {
    const exists = await util.promisify(reg.valueExists.bind(reg))(defaultKey);
    if (!exists) return undefined;

    const item = await util.promisify(reg.get.bind(reg))(defaultKey);
    const match = item?.value?.match(/[a-zA-Z]:\\(?:[^\/:*?"<>|\r\n]+\\)*[^\/:*?"<>|\r\n]*/g);
    _installPath = match?.[0] && path.dirname(match[0]);
  } catch (err) {
    console.warn(`Error reading registry path ${reg.path}: ${err}`);
    return undefined;
  }

  return _installPath;
};

export const getVersion = async () => {
  const installPath = await getInstallPath();
  if (!installPath) return;

  try {
    const configFilePath = path.join(installPath, "User/config.json");
    const config = fs.readJSONSync(configFilePath);
    return config["commonConfig"]?.["runForVersion"];
  } catch {
    return;
  }
};

export const installScript = async (
  outDir: string,
  config: ScriptConfig,
  manifest: Record<string, any>
) => {
  const installPath = config.bettergi?.installPath || (await getInstallPath());
  if (installPath) {
    const scriptPath = config.bettergi?.scriptPath || path.join(installPath, "User/JsScript");
    if (!scriptPath) return;

    const scriptDist = path.join(scriptPath, config.bettergi?.outDir || manifest.name);
    if (fs.existsSync(outDir)) {
      fs.copySync(outDir, scriptDist);
    }
  } else {
    console.warn(`Auto-detect BetterGI failed. Set "bettergi.installPath" manually.`);
  }
};
