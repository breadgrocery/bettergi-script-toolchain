# @bettergi/types

BetterGI ClearScript 脚本运行时的 **types-only** 声明包（无 JS 入口）。包内维护文档**不**打入 npm tarball。

## 文档分工

| 文档                       | 写什么                           | 不写什么             |
| -------------------------- | -------------------------------- | -------------------- |
| [README.md](./README.md)   | 安装、启用、settings 消费示例    | 内部架构             |
| [CONTEXT.md](./CONTEXT.md) | 术语与译名                       | 实现步骤、API 清单   |
| 本文件                     | 入口、上游基线、改哪里、ADR 索引 | 长投影细则           |
| [docs/adr/](./docs/adr/)   | 难逆的架构取舍与理由             | 执行计划、一次性审计 |

冲突时以**当前仓库中的 `.d.ts` 与 `package.json`** 为准，再回写文档。

## 上游基线

| 项                   | 值                                         |
| -------------------- | ------------------------------------------ |
| BetterGI 源码 commit | `5a38fc6aa4fe30c00af3a213ab9690934d66d8fb` |
| ClearScript          | 7.4.5                                      |
| 包开发 TypeScript    | 6.0.3                                      |

该 commit 是当前声明面声称对齐的上游快照。增量同步时：

1. 对照 BetterGI 自该 hash 起的变更修改 `.d.ts`
2. 将上表 commit 更新为新的完整 40 位 hash
3. 提交 message 正文仅使用 trailer：`Upstream-Commit: <完整 40 位 hash>`

## 改动入口

| 意图              | 位置                      | 细则                                                                                                                                                                              |
| ----------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 全局短名 / 注册序 | `bindings/`、`index.d.ts` | [ADR 0003](./docs/adr/0003-host-bindings-and-registration.md)                                                                                                                     |
| 完整类型与成员    | `types/**`                | [ADR 0001](./docs/adr/0001-package-layout-and-entry.md)、[0002](./docs/adr/0002-script-reachable-closure-and-surface.md)、[0005](./docs/adr/0005-members-receivers-and-naming.md) |
| 调用约定投影      | 签名形态                  | [ADR 0004](./docs/adr/0004-clearscript-calling-conventions.md)                                                                                                                    |
| 注释与 `@since`   | BetterGI / bindings       | [ADR 0007](./docs/adr/0007-documentation-and-since.md)                                                                                                                            |
| settings          | 不声明全局值              | [ADR 0006](./docs/adr/0006-script-settings.md)                                                                                                                                    |
| 维护权威与证据    | —                         | [ADR 0008](./docs/adr/0008-maintenance-evidence.md)                                                                                                                               |

`index.d.ts` 含 `// sort-imports-ignore`，import 顺序即宿主注册序列，禁止自动重排。

## ADR 索引

| 编号                                                            | 标题                       |
| --------------------------------------------------------------- | -------------------------- |
| [0001](./docs/adr/0001-package-layout-and-entry.md)             | 单入口分层布局与纯声明包   |
| [0002](./docs/adr/0002-script-reachable-closure-and-surface.md) | 脚本可达闭包与可用成员面   |
| [0003](./docs/adr/0003-host-bindings-and-registration.md)       | 独立宿主绑定与注册序列     |
| [0004](./docs/adr/0004-clearscript-calling-conventions.md)      | ClearScript 调用约定投影   |
| [0005](./docs/adr/0005-members-receivers-and-naming.md)         | 成员、接收者与命名         |
| [0006](./docs/adr/0006-script-settings.md)                      | 脚本设置由消费方声明全局值 |
| [0007](./docs/adr/0007-documentation-and-since.md)              | 注释范围与 `@since`        |
| [0008](./docs/adr/0008-maintenance-evidence.md)                 | 维护权威与一次性证据       |

## 验证

```bash
pnpm --filter @bettergi/types typecheck
```
