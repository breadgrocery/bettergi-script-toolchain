import { id, include } from "@rolldown/pluginutils";
import fs from "fs-extra";
import { type RolldownPlugin } from "rolldown";
import { hashFile, sanitizeVariableName } from "../../utils/string.js";
import {
  emitDefaultConst,
  ensureExists,
  isVirtualId,
  parseImportSource,
  virtualId
} from "./shared.js";

const MODULE_ID = "virtual:json";

const JSONLoader = (): RolldownPlugin => {
  return {
    name: "json-loader",
    resolveId: {
      filter: [include(id(/\.json$/, { cleanUrl: false }))],
      handler(source, importer) {
        if (!importer) return;

        const { file } = parseImportSource(source, importer);
        ensureExists(this, file);

        return {
          id: virtualId(MODULE_ID, hashFile(file)),
          meta: { file }
        };
      }
    },
    load(id) {
      if (!isVirtualId(id, MODULE_ID)) return undefined;

      const { file } = this.getModuleInfo(id)?.meta!;
      const name = `json_${sanitizeVariableName(file)}`;
      const json = fs.readJsonSync(file, { encoding: "utf-8" });

      return emitDefaultConst(name, JSON.stringify(json));
    }
  };
};

export default JSONLoader;
