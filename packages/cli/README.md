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

## 工具特点

- 提供几乎零配置的开发体验，打包生成符合 BetterGI 规范的脚本文件。
- 自动检测 BetterGI 的脚本目录，并输出构建结果，便于开发与调试。

  自动读取注册表项 `HKCU\SOFTWARE\Classes\BetterGI\shell\open\command` 获取 BetterGI 的安装位置，并调试输出到 `User/JsScript` 目录下。

- 支持引入第三方外部模块，借助 npm 生态提升开发效率。

  ```ts
  import { merge } from "lodash-es";

  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { b: { d: 3 }, e: 4 };
  const merged = merge({}, obj1, obj2);
  ```

- 支持使用 `import` 导入文本文件（`.txt`、`.json`），大文本/预定义数据与脚本逻辑分离。

  ```ts
  import foo1 from "./foo1.txt";
  import foo2 from "./foo2.json";

  log.info(`${foo1}`);
  log.info(`${JSON.stringify(foo2)}`);
  ```

- 支持使用 `import` 导入图片文件（`.png`、`.jpg`、`.jpeg`、`.bmp`、`.tiff`、`.webp`），自动导入为 `Mat` 对象实例。
  - 导入为 Mat 对象。

  ```ts
  <!-- 示例代码 -->
  import mat from "./foo.png";

  const ir = captureGameRegion();
  const ro = RecognitionObject.templateMatch(mat);
  const result = ir.find(ro);
  ```

  ```ts
  <!-- 构建结果 -->
  var mat_foo = file.readImageMatSync("assets/foo-d3036d20a653.png");

  var ir = captureGameRegion();
  var ro = RecognitionObject.templateMatch(mat_foo);
  var result = ir.find(ro);
  ```

- 导入为 Mat 对象，并调整图像尺寸。

  ```ts
  <!-- 示例代码 -->
  import mat from "./foo.png" with { width: "100", height: "100" };

  const ir = captureGameRegion();
  const ro = RecognitionObject.templateMatch(mat);
  const result = ir.find(ro);
  ```

  ```ts
  <!-- 构建结果 -->
  var mat_foo = file.readImageMatWithResizeSync("assets/foo-d3036d20a653.png", 100, 100, 1);

  var ir = captureGameRegion();
  var ro = RecognitionObject.templateMatch(mat_foo);
  var result = ir.find(ro);
  ```

- 导入为 Mat 对象（懒加载）。

  ```ts
  <!-- 示例代码 -->
  import matFn from "./foo.png?lazy";

  const ir = captureGameRegion();
  const ro = RecognitionObject.templateMatch(matFn());
  const result = ir.find(ro);
  ```

  ```ts
  <!-- 构建结果 -->
  function readImageMatSync_foo() {
    return file.readImageMatSync("assets/foo-d3036d20a653.png");
  }

  var ir = captureGameRegion();
  var ro = RecognitionObject.templateMatch(readImageMatSync_foo());
  var result = ir.find(ro);
  ```

- 获取构建后的文件所在位置。

  ```ts
  <!-- 示例代码 -->
  import path from "./foo.png?path";

  log.info(path);
  ```

  ```ts
  <!-- 构建结果 -->
  var path_foo = "assets/foo-d3036d20a653.png";

  log.info(path_foo);
  ```

## 用法

### 手动安装

```shell
npm install --save-dev @bettergi/cli @bettergi/types
```

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

在工作目录下创建一个 `tsconfig.json` 配置文件。其中，`@bettergi/types` 为 BetterGI 暴露的 js 接口类型声明; `@bettergi/cli/loaders` 为自定义 Loaders 的模块声明，如 import xxx from "./foo.png"。

```json
{
  "include": ["main.ts", "./src/**/*.ts"],
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
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
