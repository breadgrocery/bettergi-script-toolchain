import { id, include } from "@rolldown/pluginutils";
import fs from "fs-extra";
import path from "node:path";
import { type RolldownPlugin } from "rolldown";
import { ConfigManager } from "../../config/index.js";
import { hashFile, sanitizeVariableName } from "../../utils/string.js";

const ImageMatLoader = (manager: ConfigManager): RolldownPlugin => {
  const moduleId = "virtual:image-mat";
  return {
    name: "image-mat-loader",
    resolveId: {
      filter: [include(id(/\.(png|jpg|jpeg|bmp|tiff|webp)/, { cleanUrl: false }))],
      handler(source, importer) {
        if (!importer) return;

        const [filePath, queryString] = source.split("?");
        const file = path.resolve(path.dirname(importer), filePath);

        const { config } = manager.configData;
        const rel = `${config.loaders.image.baseDir}/${hashFile(file)}`;
        const abs = path.join(config.outDir, rel);

        // TODO: 等待 import attributes support 落地，修改 resize 参数的传递方式
        const query = new URLSearchParams(queryString);

        return {
          id: `${moduleId}:${source.replace(filePath, rel)}`,
          meta: {
            file,
            rel,
            abs,
            lazy: query.has("lazy"),
            path: query.has("path"),
            ...(query.has("width") && { width: query.get("width") }),
            ...(query.has("height") && { height: query.get("height") }),
            ...(query.has("interpolation") && { interpolation: query.get("interpolation") })
          }
        };
      }
    },
    load(id) {
      if (!id.startsWith(moduleId)) return null;

      const meta = this.getModuleInfo(id)?.meta!;
      const variableName = sanitizeVariableName(meta.file);

      // 处理 ?path 后缀，返回文件路径
      if (meta.path) {
        const pathVarName = `path_${variableName}`;
        return {
          code: `const ${pathVarName} = "${meta.rel}";export { ${pathVarName} as default };`,
          moduleType: "js"
        };
      }

      const { width, height, interpolation = "1" } = meta;
      const resize = Number(meta.width) > 0 && Number(meta.height) > 0;

      // 处理 ?lazy 后缀，返回Mat对象延迟加载函数
      if (meta.lazy) {
        const funcVarName = `readImageMatSync_${variableName}`;
        return resize
          ? {
              code: `export default function ${funcVarName}() { return file.readImageMatWithResizeSync("${meta.rel}", ${width}, ${height}, ${interpolation}); }`,
              moduleType: "js"
            }
          : {
              code: `export default function ${funcVarName}() { return file.readImageMatSync("${meta.rel}"); }`,
              moduleType: "js"
            };
      }

      // 返回Mat对象
      const matVarName = `mat_${variableName}`;
      return resize
        ? {
            code: `const ${matVarName} = /* @__PURE__ */ file.readImageMatWithResizeSync("${meta.rel}", ${width}, ${height}, ${interpolation});export { ${matVarName} as default };`,
            moduleType: "js"
          }
        : {
            code: `const ${matVarName} = /* @__PURE__ */ file.readImageMatSync("${meta.rel}");export { ${matVarName} as default };`,
            moduleType: "js"
          };
    },
    writeBundle() {
      // 复制图像文件到输出目录
      Array.from(this.getModuleIds())
        .filter(id => id.startsWith(moduleId))
        .map(id => this.getModuleInfo(id)?.meta!)
        .filter(Boolean)
        .forEach(({ file, abs }) => fs.copySync(file, abs));
    }
  };
};

export default ImageMatLoader;
