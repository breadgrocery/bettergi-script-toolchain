import { id, include } from "@rolldown/pluginutils";
import { type RolldownPlugin } from "rolldown";
import { type ConfigManager } from "../../config/index.js";
import { sanitizeVariableName } from "../../utils/string.js";
import {
  copyEmittedAssets,
  emitDefaultConst,
  emitDefaultFunction,
  ensureExists,
  isVirtualId,
  parseImportSource,
  resolveEmittedPaths,
  virtualId
} from "./shared.js";

const MODULE_ID = "virtual:image-mat";
const IMAGE_RE = /\.(png|jpg|jpeg|bmp|tiff|webp)/;

const ImageMatLoader = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "image-mat-loader",
    resolveId: {
      filter: [include(id(IMAGE_RE, { cleanUrl: false }))],
      handler(source, importer) {
        if (!importer) return;

        // TODO: 等待 rolldown `import attributes support` 落地，修改 readImageMatWithResizeSync 所需参数的传递方式
        const { queryString, query, file } = parseImportSource(source, importer);
        ensureExists(this, file);

        const { config } = manager.configData;
        const { rel, abs } = resolveEmittedPaths(config.outDir, config.loaders.image.baseDir, file);
        const key = queryString ? `${rel}?${queryString}` : rel;

        return {
          id: virtualId(MODULE_ID, key),
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
      if (!isVirtualId(id, MODULE_ID)) return undefined;

      const meta = this.getModuleInfo(id)?.meta!;
      const baseName = sanitizeVariableName(meta.file);

      // ?path → 返回构建后路径字符串
      if (meta.path) {
        return emitDefaultConst(`path_${baseName}`, JSON.stringify(meta.rel));
      }

      const { width, height, interpolation = "1" } = meta;
      const resize = Number(width) > 0 && Number(height) > 0;
      const readCall = resize
        ? `file.readImageMatWithResizeSync(${JSON.stringify(meta.rel)}, ${width}, ${height}, ${interpolation})`
        : `file.readImageMatSync(${JSON.stringify(meta.rel)})`;

      // ?lazy → 返回延迟加载函数
      if (meta.lazy) {
        return emitDefaultFunction(`readImageMatSync_${baseName}`, `return ${readCall};`);
      }

      // 默认 → 立即加载 Mat
      return emitDefaultConst(`mat_${baseName}`, `/* @__PURE__ */ ${readCall}`);
    },
    writeBundle() {
      copyEmittedAssets(this, MODULE_ID);
    }
  };
};

export default ImageMatLoader;
