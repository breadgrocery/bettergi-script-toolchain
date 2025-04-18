export const getPkgFromUserAgent = (userAgent) => {
    if (!userAgent)
        return undefined;
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
export const isValidPackageName = (packageName) => {
    return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(packageName);
};
export const toValidPackageName = (projectName) => {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/^[._]/, "")
        .replace(/[^a-z\d\-~]+/g, "-");
};
