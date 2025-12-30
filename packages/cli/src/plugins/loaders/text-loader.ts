import { id, include } from "@rolldown/pluginutils";
import fs from "fs-extra";
import path from "node:path";
import { type RolldownPlugin } from "rolldown";
import { hashFile, sanitizeVariableName } from "../../utils/string.js";

const TextLoader = (): RolldownPlugin => {
  const moduleId = "virtual:text";
  return {
    name: "text-loader",
    resolveId: {
      filter: [include(id(/\.txt$/, { cleanUrl: false }))],
      handler(source, importer) {
        if (!importer) return;

        const file = path.resolve(path.dirname(importer), source);

        return {
          id: `${moduleId}:${hashFile(file)}`,
          meta: { file }
        };
      }
    },
    load(id) {
      if (!id.startsWith(moduleId)) return null;

      const meta = this.getModuleInfo(id)?.meta!;
      const variableName = `text_${sanitizeVariableName(meta.file)}`;
      const text = fs.readFileSync(meta.file, "utf-8");

      return {
        code: `const ${variableName} = "${text}";export { ${variableName} as default };`,
        moduleType: "js"
      };
    }
  };
};

export default TextLoader;
