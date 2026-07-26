# 独立宿主绑定与注册序列

每次 `AddHostObject` / `AddHostType`（含 `AddAllGlobalMethod` 中每一项）对应一个 `bindings/<注入字符串>.d.ts`，文件名大小写与注入名一致。禁止合成上游不存在的暴露组（如 `globalMethod.d.ts`、`nativeTypes.d.ts`）。

当前基线共 64 个无条件根；标准执行路径还会加载 settings 相关模块（入口序列第 65 项）。`index.d.ts` 在 `// sort-imports-ignore` 下按该序列 side-effect import，不把普通签名依赖塞进入口。

全局方法组是编译器委托转换后的**宿主委托值**（可直接调用且通常带 `invoke`），不是 `MethodInfo` 或普通函数类型；`GlobalMethod` 类型本身不进入脚本可达闭包。`host` 由 BetterGI 主动注册并扩展：binding 可对可调用成员做中文文档 facade，但不改变完整类型身份，也不向 `Microsoft.ClearScript` 库声明传播注释。全局 `OpenCvSharp` 是 HostTypeCollection 双层根（脚本访问形如 `OpenCvSharp.OpenCvSharp.Mat`），与独立的 `Mat` 等 HostType 共用同一完整类型定义。
