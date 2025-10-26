export interface PkgInfo {
  name: string;
  version: string;
}

export const getPkgFromUserAgent = (userAgent: string | undefined): PkgInfo | undefined => {
  if (!userAgent) return undefined;
  const pkgSpec = userAgent.split(" ")[0];
  const pkgSpecArr = pkgSpec.split("/");
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  };
};

export const getPkgManager = () => {
  const pkgInfo = getPkgFromUserAgent(process.env.npm_config_user_agent);
  return pkgInfo ? pkgInfo.name : "npm";
};

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
