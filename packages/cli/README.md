本项目是一个为[Better Genshin Impact](https://github.com/babalae/better-genshin-impact) 设计的 JavaScript 脚本开发脚手架，旨在帮助开发者快速创建脚本项目。

## 快速开始

使用 [@bettergi/create-script](https://www.npmjs.com/package/@bettergi/create-script) 快速创建 JavaScript 脚本项目：

### 使用 npm

```shell
npm create @bettergi/script
```

### 使用 pnpm

```shell
pnpm create @bettergi/script
```

## 安装

```shell
npm install --save-dev @bettergi/cli
```

## 用法

### 创建配置文件

在工作目录下创建一个 `bettergi.config.ts` (或 `.js`, `.cjs`, `.mjs`) 配置文件。

```ts
import { defineConfig } from "@bettergi/cli/config";

export default defineConfig({
  // 构建配置项
  main: "main.ts",
  // ...

  // 调试配置项
  bettergi: {},

  // 脚本清单
  manifest: {},

  // UI配置项
  settings: []
});
```

### 构建脚本

```shell
npx bettergi-cli
```

### 开发模式

如需监视进行持续开发，则运行以下命令。

```shell
npx bettergi-cli --watch
```
