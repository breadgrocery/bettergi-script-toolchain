import { type RolldownPlugin } from "rolldown";
import { postBuild } from "../build/index.js";
import { ConfigManager } from "../config/index.js";

const PostBuildProcessor = (manager: ConfigManager): RolldownPlugin => {
  return {
    name: "post-build-processor",
    async writeBundle() {
      await postBuild(manager);
    }
  };
};

export default PostBuildProcessor;
