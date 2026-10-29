import { type RolldownPlugin } from "rolldown";
import { postBuild } from "../build/index.js";
import { type ConfigManager } from "../config/index.js";

const PostBuildProcessor = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "post-build-processor",
    renderChunk(code) {
      return code.replace(/^\/\/(#region)? (.*)$/gm, (full, region, group) => {
        const i = group.lastIndexOf("node_modules");
        if (i === -1) return full;
        const normalized = group.slice(i).replace(/\\/g, "/");
        if (/\s/.test(normalized)) return full;
        const prefix = region ? "//#region " : "// ";
        return prefix + normalized;
      });
    },
    async writeBundle() {
      await postBuild(manager);
    }
  };
};

export default PostBuildProcessor;
