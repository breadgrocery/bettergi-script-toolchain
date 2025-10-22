本项目是一个为 [Better Genshin Impact](https://github.com/babalae/better-genshin-impact) 提供的 TypeScript 类型声明文件。

## 安装

### 使用 npm

```shell
npm install --save-dev @bettergi/types
```

### 使用 pnpm

```shell
pnpm install --save-dev @bettergi/types
```

## 用法

在 TypeScript 项目的 [`tsconfig.json`](https://www.typescriptlang.org/tsconfig/#types) 配置文件中添加类型引用。

```json
{
  "compilerOptions": {
    // xxx...
    "lib": ["ES2022"],
    "types": ["@bettergi/types"]
    // xxx...
  }
}
```
