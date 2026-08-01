import fs from "fs-extra";
import path from "node:path";
import { type PluginContext } from "rolldown";
import { hashFile } from "../../utils/string.js";

/** 解析 `./foo?query` 形式的导入源 */
export const parseImportSource = (source: string, importer: string) => {
  const [specifier, queryString = ""] = source.split("?");
  const file = path.resolve(path.dirname(importer), specifier);
  return { specifier, queryString, query: new URLSearchParams(queryString), file };
};

/** 统一为正斜杠相对路径 */
export const toPosixPath = (value: string) => value.replace(/\\/g, "/");

/** 计算资源在产物中的相对路径与绝对路径 */
export const resolveEmittedPaths = (outDir: string, baseDir: string, file: string) => {
  const rel = toPosixPath(`${baseDir}/${hashFile(file)}`);
  const abs = path.join(outDir, rel);
  return { rel, abs };
};

/** 虚拟模块 id：`virtual:xxx:key` */
export const virtualId = (moduleId: string, key: string) => `${moduleId}:${key}`;

export const isVirtualId = (id: string, moduleId: string) => id.startsWith(`${moduleId}:`);

/** 源文件不存在时抛出统一错误 */
export const ensureExists = (ctx: PluginContext, file: string) => {
  if (!fs.existsSync(file)) {
    return ctx.error(`File not found: ${file}`);
  }
};

/** 将 virtual 模块对应的源文件/目录复制到产物目录 */
export const copyEmittedAssets = (ctx: PluginContext, moduleId: string) => {
  for (const id of ctx.getModuleIds()) {
    if (!isVirtualId(id, moduleId)) continue;
    const meta = ctx.getModuleInfo(id)?.meta;
    if (!meta) continue;
    fs.copySync(meta.file, meta.abs);
  }
};

/** `const name = expr; export { name as default };` */
export const emitDefaultConst = (name: string, expression: string) => ({
  code: `const ${name} = ${expression};export { ${name} as default };`,
  moduleType: "js" as const
});

/** `export default function name() { body }` */
export const emitDefaultFunction = (name: string, body: string) => ({
  code: `export default function ${name}() { ${body} }`,
  moduleType: "js" as const
});
