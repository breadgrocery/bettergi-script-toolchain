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
import { defineConfig } from "@bettergi/cli";

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

### 创建 TypeScript 配置文件

在工作目录下创建一个 `tsconfig.json` 配置文件。

```json
{
  "include": ["main.ts", "./src/**/*.ts"],
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "esModuleInterop": true,
    "declaration": false,
    "lib": ["ESNext"],
    "skipLibCheck": true,
    "strict": true,
    "alwaysStrict": false,
    "removeComments": false,
    "noEmitOnError": true,
    "types": ["@bettergi/types"]
  }
}
```

> BetterGI 使用 [ClearScript](https://github.com/microsoft/ClearScript) 的 V8 引擎来执行脚本，多数新特性支持较为良好。若环境出现特性兼容性问题，请自行修改 `target` 等配置。

### 开发模式

```shell
npx bettergi-cli --watch
```

### 构建脚本

```shell
npx bettergi-cli
```
