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

const MODULE_ID = "virtual:text";

const TextLoader = (): RolldownPlugin => {
  return {
    name: "text-loader",
    resolveId: {
      filter: [include(id(/\.txt$/, { cleanUrl: false }))],
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
      const name = `text_${sanitizeVariableName(file)}`;
      const text = fs.readFileSync(file, "utf-8");

      return emitDefaultConst(name, JSON.stringify(text));
    }
  };
};

export default TextLoader;
