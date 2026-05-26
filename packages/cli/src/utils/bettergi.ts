import fs from "fs-extra";
import path from "node:path";
import {
  HKEY,
  type RegistryStringEntry,
  RegistryValueType,
  enumerateValuesSafe
} from "registry-js";

export const getInstallPath = (() => {
  let installPath: string | undefined = undefined;
  return () => {
    if (installPath) return installPath;

    const subkey = "Software\\Classes\\BetterGI\\shell\\open\\command";
    try {
      const values = enumerateValuesSafe(HKEY.HKEY_CURRENT_USER, subkey);

      // 查找默认值（名称为空字符串的条目）
      const defaultEntry = values.find(
        v => v.name === "" && v.type === RegistryValueType.REG_SZ
      ) as RegistryStringEntry | undefined;
      if (!defaultEntry?.data) return undefined;

      const match = defaultEntry.data.match(
        /[a-zA-Z]:\\(?:[^\/:*?"<>|\r\n]+\\)*[^\/:*?"<>|\r\n]*/g
      );
      installPath = match?.[0] && path.dirname(match[0]);
    } catch (err) {
      console.warn(`⚠️ Error reading registry path: ${subkey}: ${err}`);
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
      const installPath = getInstallPath();
      if (!installPath) return;

      const configFilePath = path.join(installPath, "User/config.json");
      const config = fs.readJSONSync(configFilePath, { encoding: "utf-8" });
      version = config["commonConfig"]?.["runForVersion"] as string;
    } catch {
      console.warn("⚠️ Error determining BetterGI version.");
    }

    return version;
  };
})();
