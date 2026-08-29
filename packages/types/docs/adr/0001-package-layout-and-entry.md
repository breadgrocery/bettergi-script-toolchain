# 单入口分层布局与纯声明包

`index.d.ts` 是唯一激活入口，只按宿主注册序列 side-effect 加载 `bindings/*`。完整类型放在 `types/<CLR 命名空间>/<上游源文件 basename>.d.ts`；`bindings` 只把全局短名绑到完整类型，不承载第二份成员定义（`host` 的文档 facade 除外，见 ADR 0003）。

每个声明文件是外部模块：CLR 全限定名写在 type-only ambient namespace 中；真实运行时值只由 bindings 提供。成员签名通过该 namespace 引用类型（如 `BetterGenshinImpact.Core.Recognition.SearchExpandRatio`），不把模块导出短名写进对**其他** CLR 类型的签名。依赖使用**无扩展名**相对路径直接 import——需要激活 ambient 图时用 side-effect `import "..."`，仅类型用 `import type`；文件末尾 `export {}`。不设 namespace barrel，不假设传递副作用。细则见 [0005](./0005-members-receivers-and-naming.md)。

`@bettergi/types` 为 types-only：`package.json` 的 `types` 与 `exports["."].types` 指向 `./index.d.ts`，无 `main`、无公开子路径、无 `typesVersions`。`files` 只发布 `index.d.ts`、`bindings`、`types`、`README.md`（维护文档与 ADR 不发布）。不引入 type-fest；投影辅助类型放在 `types/Microsoft/ClearScript/` 下与 ClearScript 源文件对应的位置。消费方只用 `compilerOptions.types` 或空 `import type {}` 激活。
