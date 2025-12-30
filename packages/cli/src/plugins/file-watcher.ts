import { type RolldownPlugin } from "rolldown";
import { ConfigManager } from "../config/index.js";

const FileWatcher = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "file-watcher",
    buildStart() {
      const { config } = manager.configData;
      config.watch.forEach(id => this.addWatchFile(id));
    },
    async watchChange(id, { event }) {
      console.debug(`[${new Date().toISOString()}][${event}]: ${id}`);
    }
  };
};

export default FileWatcher;
