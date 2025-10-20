import { defineConfig } from "@bettergi/cli";
import settings from "./src/settings";

export default defineConfig({
  // 构建配置
  main: "main.ts",
  assetsDir: "assets",
  outDir: "dist",
  minify: false,
  // 调试配置
  bettergi: {
    enable: true,
    outDir: "我的第一个脚本"
  },
  // 清单信息
  manifest: {
    bgi_version: "0.48.0", // 脚本适用的 BetterGI 最低版本
    saved_files: ["store/*.json"] // 脚本升级时需保留还原的文件/文件夹
  },
  // UI配置
  settings
});
