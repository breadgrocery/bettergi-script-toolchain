import path from "node:path";
import { type manifest } from "../config.js";
import { getVersion } from "../utils/bettergi.js";
import { type ConfigContext } from "./index.js";

type Context = Pick<ConfigContext, "config" | "configFile" | "pkg" | "build">;

export const parseManifestConfig = async (context: Context) => {
  const { config, pkg, build } = context;

  // 清单版本
  const manifest_version = config.manifest?.manifest_version || 1;

  // 脚本名称
  const name: string | undefined = config.manifest?.name || pkg.name;

  // 脚本版本
  const version: string | undefined = config.manifest?.version || pkg.version;

  // 适用于 BetterGI 的最低版本
  const bgi_version: string | undefined = config.manifest?.bgi_version || (await getVersion());

  // 脚本描述
  const description: string | undefined = config.manifest?.description || pkg.description;

  // 作者信息
  const authors: manifest.Author[] =
    config.manifest?.authors ||
    [
      typeof pkg.author === "object"
        ? {
            name: pkg.author.name,
            ...(pkg.author.url && { link: pkg.author.url })
          }
        : {
            ...(pkg.author && { name: pkg.author })
          }
    ].filter(item => Object.keys(item).includes("name"));

  // 脚本入口文件
  const main = `${path.parse(build.main).name}.js`;

  // UI 配置
  const settings_ui: string | undefined =
    config.settings && config.settings.length > 0 ? "settings.json" : undefined;

  // 脚本配置（已弃用）
  const scripts = config.manifest?.scripts && [...config.manifest.scripts];

  // external 类库
  const libs = build.codeSplitting
    ? ["./", "./libs/"].concat(config.manifest?.library || [])
    : config.manifest?.library;
  const library = libs && [...libs];

  // 脚本升级时需保留还原的 文件/文件夹 列表（支持正则表达式与通配符）
  const saved_files = config.manifest?.saved_files && [...config.manifest.saved_files];

  // 允许请求的 URL 列表（支持通配符）
  const http_allowed_urls = config.manifest?.http_allowed_urls && [
    ...config.manifest.http_allowed_urls
  ];

  return {
    manifest_version,
    name,
    version,
    bgi_version,
    description,
    authors,
    main,
    settings_ui,
    scripts,
    library,
    saved_files,
    http_allowed_urls
  };
};
