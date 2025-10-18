import { defineConfig } from "@bettergi/cli";

export default defineConfig({
  // 调试配置
  bettergi: {
    enable: true,
    outDir: "测试"
  },
  // 脚本清单(覆写 package.json 中的定义)
  manifest: {},
  // 配置UI
  settings: [
    {
      type: "input-text",
      name: "name",
      label: "名称",
      default: "开发者"
    }
  ]
});
