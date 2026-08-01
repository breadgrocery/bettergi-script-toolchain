import { id, include } from "@rolldown/pluginutils";
import { type RolldownPlugin } from "rolldown";
import { type ConfigManager } from "../../config/index.js";
import { sanitizeVariableName } from "../../utils/string.js";
import {
  copyEmittedAssets,
  emitDefaultConst,
  ensureExists,
  isVirtualId,
  parseImportSource,
  resolveEmittedPaths,
  virtualId
} from "./shared.js";

const MODULE_ID = "virtual:assets";

const AssetsLoader = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "assets-loader",
    resolveId: {
      filter: [include(id(/\?assets(?:$|&)/, { cleanUrl: false }))],
      handler(source, importer) {
        if (!importer) return;

        const { file } = parseImportSource(source, importer);
        ensureExists(this, file);

        const { config } = manager.configData;
        const { rel, abs } = resolveEmittedPaths(
          config.outDir,
          config.loaders.assets.baseDir,
          file
        );

        return {
          id: virtualId(MODULE_ID, rel),
          meta: { file, rel, abs }
        };
      }
    },
    load(id) {
      if (!isVirtualId(id, MODULE_ID)) return undefined;

      const { file, rel } = this.getModuleInfo(id)?.meta!;
      return emitDefaultConst(`path_${sanitizeVariableName(file)}`, JSON.stringify(rel));
    },
    writeBundle() {
      copyEmittedAssets(this, MODULE_ID);
    }
  };
};

export default AssetsLoader;
