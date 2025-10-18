import { defineConfig } from "@bettergi/cli";
import settings from "./src/settings";

export default defineConfig({
  main: "main.ts",
  // 调试配置
  bettergi: {
    enable: true,
    outDir: "开发"
  },
  // 清单信息
  manifest: {},
  // 配置UI
  settings
});
