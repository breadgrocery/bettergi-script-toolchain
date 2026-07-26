# 脚本设置由消费方声明全局值

运行时标准路径会注入 ExpandoObject 作为 settings，但包**不**声明全局 `var settings`，以免与脚本侧 `GlobalSettings` 合并冲突。

`types/BetterGI` 提供可扩展的 `BetterGI.ScriptSettings`（含 `[key: string]: unknown` 等参考形状）。`bindings/settings.d.ts` 只 side-effect 加载该模块，保证入口图包含设置相关类型。

各脚本在 `settings.ts` 中自行：

```ts
declare global {
  var settings: GlobalSettings;
}
```

字段形状可由配置推导（如 `ExtractSettingsMap`）。动态 key 大小写敏感；提示字段保留配置中的精确大小写。
