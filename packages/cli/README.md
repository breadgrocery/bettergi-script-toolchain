本项目是一个为[Better Genshin Impact](https://github.com/babalae/better-genshin-impact) 设计的 JavaScript 脚本开发脚手架，旨在帮助开发者快速创建脚本项目。

## 工具特点

- 提供零配置的开发体验，一键打包生成符合 BetterGI 规范的脚本文件。
- 自动检测 BetterGI 的脚本目录，并输出构建结果，便于开发与调试。
- 支持引入第三方外部模块，借助 npm 生态提升开发效率。
- 支持使用 `import` 导入文本文件（`.txt`、`.json`），使得大文本数据与脚本逻辑分离。
- 支持使用 `import` 导入图片文件（`.png`、`.jpg`、`.jpeg`、`.bmp`、`.tiff`、`.webp`），自动导入为 `Mat` 对象实例。

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

## 手动安装

```shell
npm install --save-dev @bettergi/cli @bettergi/types
```

## 用法

### 创建配置文件

在工作目录下创建一个 `bettergi.config.ts` (或 `.js`, `.cjs`, `.mjs`) 配置文件。

```ts
import { defineConfig } from "@bettergi/cli";

export default defineConfig({
  // 构建配置
  main: "main.ts",
  // assetsDir: "assets",
  // outDir: "dist",
  // additionalFiles: ["README.md", "LICENSE"], // 需要额外打包的文件
  // minify: false,
  // banner: true,

  // 调试配置
  bettergi: {},

  // 清单信息
  manifest: {},

  // UI配置
  settings: []
});
```

### 创建 TypeScript 配置文件

在工作目录下创建一个 `tsconfig.json` 配置文件。其中，`@bettergi/types` 为 BetterGI 暴露的 js 接口类型声明; `@bettergi/cli/loaders` 为自定义 Loader 的模块声明，如 import xxx from "./foo.png"。

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
    "types": ["@bettergi/types", "@bettergi/cli/loaders"]
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
