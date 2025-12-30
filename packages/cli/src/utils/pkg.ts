import fs from "fs-extra";
import path from "node:path";
import resolvePackagePath from "resolve-package-path";

export const getPackageInfo = () => {
  try {
    const pkgPath = path.resolve("package.json");
    return fs.readJSONSync(pkgPath, { encoding: "utf-8" });
  } catch {
    console.error("Error reading package.json.");
    return undefined;
  }
};

export const lookupPackageInfo = (moduleId: string) => {
  try {
    const pkgPath = resolvePackagePath.findUpPackagePath(moduleId);
    return pkgPath ? fs.readJsonSync(pkgPath, { encoding: "utf-8" }) : undefined;
  } catch (err) {
    console.error(`Error looking up package info for module: ${moduleId}`, err);
    return undefined;
  }
};
