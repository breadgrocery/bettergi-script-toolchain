import { type OnLoadArgs, type Plugin } from "esbuild";
import fs from "fs-extra";
import path from "node:path";
import { sanitizeVariableName, sha256 } from "../utils/string.js";

interface Options {
  outDir: string;
  baseDir: string;
}

const copyImageSource = (args: OnLoadArgs, options: Options) => {
  const { outDir, baseDir } = options;

  // 使用路径哈希命名以避免文件名冲突
  const { name, ext } = path.parse(args.path);
  const file = `${name}-${sha256(args.path)}${ext}`;

  const dest = path.join(outDir, baseDir, file);
  fs.copySync(args.path, dest);
  return `${baseDir}/${file}`;
};

const ImageMatLoader = (options: Options): Plugin => {
  return {
    name: "image-loader",
    setup: build => {
      build.onLoad({ filter: /\.(png|jpg|jpeg|bmp|tiff|webp)$/ }, args => {
        const { width, height, interpolation = 1 } = args.with;
        const file = copyImageSource(args, options);
        const variableName = sanitizeVariableName(args.path);

        // 处理 ?path 后缀，返回文件路径
        if (args.suffix.includes("path")) {
          const pathVarName = `path_${variableName}`;
          return {
            contents: `const ${pathVarName} = "${file}";export { ${pathVarName} as default };`,
            loader: "js"
          };
        }

        // 返回调整大小的图像或基于参数的原始图像
        const resize = Number(width) > 0 && Number(height) > 0;

        if (args.suffix.includes("lazy")) {
          const funcVarName = `readImageMatSync_${variableName}`;
          return resize
            ? {
                contents: `export default function ${funcVarName}() { return file.readImageMatWithResizeSync("${file}", ${width}, ${height}, ${interpolation}); }`,
                loader: "js"
              }
            : {
                contents: `export default function ${funcVarName}() { return file.readImageMatSync("${file}"); }`,
                loader: "js"
              };
        } else {
          const matVarName = `mat_${variableName}`;
          return resize
            ? {
                contents: `const ${matVarName} = /* @__PURE__ */ file.readImageMatWithResizeSync("${file}", ${width}, ${height}, ${interpolation});export { ${matVarName} as default };`,
                loader: "js"
              }
            : {
                contents: `const ${matVarName} = /* @__PURE__ */ file.readImageMatSync("${file}");export { ${matVarName} as default };`,
                loader: "js"
              };
        }
      });
    }
  };
};

export default ImageMatLoader;
