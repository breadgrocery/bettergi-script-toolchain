import { id, include } from "@rolldown/pluginutils";
import fs from "fs-extra";
import path from "node:path";
import { type RolldownPlugin } from "rolldown";
import { hashFile, sanitizeVariableName } from "../../utils/string.js";

const JSONLoader = (): RolldownPlugin => {
  const moduleId = "virtual:json";
  return {
    name: "json-loader",
    resolveId: {
      filter: [include(id(/\.json$/, { cleanUrl: false }))],
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
      const variableName = `json_${sanitizeVariableName(meta.file)}`;
      const json = fs.readJsonSync(meta.file, { encoding: "utf-8" });

      return {
        code: `const ${variableName} = ${JSON.stringify(json)};export { ${variableName} as default };`,
        moduleType: "js"
      };
    }
  };
};

export default JSONLoader;
