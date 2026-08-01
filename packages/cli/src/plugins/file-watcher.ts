import { type RolldownPlugin } from "rolldown";
import { type ConfigManager } from "../config/index.js";

const FileWatcher = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "file-watcher",
    buildStart() {
      const { config } = manager.configData;
      for (const id of config.watch) {
        this.addWatchFile(id);
      }
    },
    watchChange(id, { event }) {
      console.debug(`[${new Date().toLocaleString("zh-CN")}][${event}]: ${id}`);
    }
  };
};

export default FileWatcher;
