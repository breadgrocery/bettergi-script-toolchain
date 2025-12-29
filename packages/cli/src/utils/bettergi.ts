import fs from "fs-extra";
import path from "node:path";
import util from "node:util";
import Registry from "winreg";

export const getInstallPath = (() => {
  let installPath: string | undefined = undefined;
  return async () => {
    if (installPath) return installPath;

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
      installPath = match?.[0] && path.dirname(match[0]);
    } catch (err) {
      console.warn(`⚠️ Error reading registry path ${reg.path}: ${err}`);
      return undefined;
    }

    return installPath;
  };
})();

export const getVersion = (() => {
  let version: string | undefined = undefined;
  return async () => {
    if (version) return version;

    try {
      const installPath = await getInstallPath();
      if (!installPath) return;

      const configFilePath = path.join(installPath, "User/config.json");
      const config = fs.readJSONSync(configFilePath);
      version = config["commonConfig"]?.["runForVersion"] as string;
    } catch {
      console.warn("⚠️ Error determining BetterGI version");
    }

    return version;
  };
})();
