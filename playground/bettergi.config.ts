import { defineConfig } from "@bettergi/cli/config";

export default defineConfig({
  main: "main.ts",
  // 调试配置
  bettergi: {
    enable: true,
    outDir: "测试"
  },
  // 清单信息
  manifest: {},
  // 配置UI
  settings: [
    {
      type: "input-text",
      name: "name",
      label: "名称",
      default: "tom"
    }
  ]
});
