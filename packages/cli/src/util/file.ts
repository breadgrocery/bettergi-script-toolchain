import findCacheDirectory from "find-cache-directory";
import fs from "fs-extra";
import path from "node:path";

export const tempFile = (filepath: string, temp: string = "bettergi") => {
  const { name, ext } = path.parse(filepath);
  const dir = findCacheDirectory({ name: temp });
  const tempPath = path.format({ dir, name: `${name}.${Date.now()}`, ext });

  fs.ensureFileSync(tempPath);
  fs.copyFileSync(filepath, tempPath);

  return tempPath;
};
