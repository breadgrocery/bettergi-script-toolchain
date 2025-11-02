export interface PkgInfo {
  name: string;
  version: string;
}

/** 获取包管理器信息 */
export const getPkgFromUserAgent = (userAgent: string | undefined): PkgInfo | undefined => {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  };
};

/** 获取包管理器名称 */
export const getPkgManager = () => {
  const pkgInfo = getPkgFromUserAgent(process.env.npm_config_user_agent);
  return pkgInfo ? pkgInfo.name : "npm";
};

/** 将字符串转换为 kebab-case 格式 */
export const kebabize = (str: string) => {
  return str
    .split("")
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}`
        : letter;
    })
    .join("");
};
