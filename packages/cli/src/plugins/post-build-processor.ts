import { type RolldownPlugin } from "rolldown";
import { postBuild } from "../build/index.js";
import { type ConfigManager } from "../config/index.js";

const PostBuildProcessor = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "post-build-processor",
    renderChunk(code) {
      return code.replace(/^\/\/#region (.*)$/gm, (full, group) => {
        const i = group.lastIndexOf("node_modules");
        return i === -1 ? full : full.replace(group, group.slice(i));
      });
    },
    async writeBundle() {
      await postBuild(manager);
    }
  };
};

export default PostBuildProcessor;
