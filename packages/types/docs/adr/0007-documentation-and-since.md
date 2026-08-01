# 注释范围与 @since

## 谁写注释

| 对象                                                                              | 注释                                                    |
| --------------------------------------------------------------------------------- | ------------------------------------------------------- |
| BetterGI 上游完整类型的公开类型与成员                                             | 中文 TSDoc + `@since`                                   |
| 全部宿主 binding 符号（含 `Mat`、`Task`、`OpenCvSharp` 等全局 HostType **本身**） | 中文 TSDoc + `@since`；不重述其完整类型成员             |
| `bindings/host.d.ts` 的 facade 与 `Error.hostException`                           | 中文 TSDoc + `@since`（属宿主暴露，不是第三方库注释）   |
| .NET / ClearScript / OpenCv / ImageSharp 等库完整类型                             | **零注释**（无生成头、无来源说明、无 unsupported 占位） |

术语与译名遵循 [CONTEXT.md](../../CONTEXT.md)。

## 正文

- 专业、简练、用途明确；禁止「表示 XXX」「执行 XXX 操作」等空句
- 不得拆英文标识符硬译；行末不加句号等句终标点
- 布尔写开关语义；方法用准确动词开头；类型写职责
- 保留格式/单位/范围/默认值/失败行为/坐标系等有效信息
- 同步 CLR `void` 的 `@returns` 写宿主空结果（VoidResult），不写 undefined
- 仅 public setter 的属性用 `@throws` 说明 getter 不可用
- `[Obsolete]` → `@deprecated` 并给出替代入口

## @since

- 使用上游真实成功发布的完整 SemVer；基线内尚无发布快照的 API 用唯一保留值 `unreleased`，不预测未发布版本
- 取「符号存在」与「自脚本根可达或已注册」两者中较晚的版本；继承成员还要看宿主对象首次暴露
- 同一 CLR 符号派生的默认 arity、params、泛型 HostType 实参形态、accessor 提示共用同一 `@since`，正文各自适配

脚本字符串域与 `KeyCode` 等为可用性增强，注释仍按 BetterGI 成员规则；定义处注明真源（见 [0009](./0009-script-string-domains.md)）。
