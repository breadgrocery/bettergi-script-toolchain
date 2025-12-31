import { type RolldownPlugin } from "rolldown";
import { type ConfigManager } from "../config/index.js";

const FileWatcher = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "file-watcher",
    buildStart() {
      const { config } = manager.configData;
      config.watch.forEach(id => this.addWatchFile(id));
    },
    async watchChange(id, { event }) {
      console.debug(`[${new Date().toLocaleString("zh-CN")}][${event}]: ${id}`);
    }
  };
};

export default FileWatcher;
