import { defineConfig } from "@bettergi/cli";
import settings from "./src/settings";

export default defineConfig({
  main: "main.ts",
  // 调试配置
  bettergi: {
    enable: true,
    outDir: "我的第一个脚本"
  },
  // 清单信息（覆写 package.json 中的定义）
  manifest: {},
  // 配置UI
  settings
});
