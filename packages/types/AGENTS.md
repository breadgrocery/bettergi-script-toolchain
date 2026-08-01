# @bettergi/types

BetterGI ClearScript 脚本运行时的 **types-only** 声明包（无 JS 入口）。包内维护文档**不**打入 npm tarball。

## 文档分工

| 文档                       | 写什么                                         | 不写什么             |
| -------------------------- | ---------------------------------------------- | -------------------- |
| [README.md](./README.md)   | 安装、启用、settings 消费示例                  | 内部架构             |
| [CONTEXT.md](./CONTEXT.md) | 术语与译名                                     | 实现步骤、API 清单   |
| 本文件                     | 入口、上游基线、改哪里、字符串域清单、ADR 索引 | 长投影细则           |
| [docs/adr/](./docs/adr/)   | 难逆的架构取舍与理由                           | 执行计划、一次性审计 |

冲突时以**当前仓库中的 `.d.ts` 与 `package.json`** 为准，再回写文档。

## 上游基线

| 项                   | 值                                         |
| -------------------- | ------------------------------------------ |
| BetterGI 源码 commit | `5a38fc6aa4fe30c00af3a213ab9690934d66d8fb` |
| ClearScript          | 7.4.5                                      |
| 包开发 TypeScript    | 6.0.3                                      |

该 commit 是当前声明面声称对齐的上游快照。增量同步时：

1. 对照 BetterGI 自该 hash 起的变更修改 `.d.ts`（含脚本字符串域字面量与挂接）
2. 将上表 commit 更新为新的完整 40 位 hash
3. 提交 message 正文仅使用 trailer：`Upstream-Commit: <完整 40 位 hash>`

## 改动入口

| 意图              | 位置                           | 细则                                                                                                                                                                              |
| ----------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 全局短名 / 注册序 | `bindings/`、`index.d.ts`      | [ADR 0003](./docs/adr/0003-host-bindings-and-registration.md)                                                                                                                     |
| 完整类型与成员    | `types/**`                     | [ADR 0001](./docs/adr/0001-package-layout-and-entry.md)、[0002](./docs/adr/0002-script-reachable-closure-and-surface.md)、[0005](./docs/adr/0005-members-receivers-and-naming.md) |
| 脚本字符串域      | `types/BetterGenshinImpact/**` | [ADR 0009](./docs/adr/0009-script-string-domains.md)、下文清单                                                                                                                    |
| 调用约定投影      | 签名形态                       | [ADR 0004](./docs/adr/0004-clearscript-calling-conventions.md)                                                                                                                    |
| 注释与 `@since`   | BetterGI / bindings            | [ADR 0007](./docs/adr/0007-documentation-and-since.md)                                                                                                                            |
| settings          | 不声明全局值                   | [ADR 0006](./docs/adr/0006-script-settings.md)                                                                                                                                    |
| 维护权威与证据    | —                              | [ADR 0008](./docs/adr/0008-maintenance-evidence.md)                                                                                                                               |

`index.d.ts` 含 `// sort-imports-ignore`，import 顺序即宿主注册序列，禁止自动重排。

## 脚本字符串域

规则见 [ADR 0009](./docs/adr/0009-script-string-domains.md)。同步上游时与成员变更一并：

1. 下表真源是否变更字面量或校验
2. `AvatarName` 与 `CombatAvatarNameEn` 是否同序
3. 挂接是否仍用该域（含集合元素）
4. 新域：定义 + 挂接 + namespace re-export + 本表
5. `pnpm --filter @bettergi/types typecheck`

路径相对 `types/BetterGenshinImpact/`；真源相对 BetterGI 的 `BetterGenshinImpact/`（或所列 Assets）。

| 定义文件                                                   | 类型                                                                                    | 上游真源                                                              |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `GameTask/AutoFight/Model/Avatar.d.ts`                     | `AvatarName`                                                                            | `GameTask/AutoFight/Assets/combat_avatar.json` → `name`               |
| 同上                                                       | `WalkKey` / `MouseButtonName`                                                           | `Avatar` 行走与鼠标；`MouseButtonName` 为小写，异于钩子 `MouseButton` |
| `GameTask/AutoFight/Config/CombatAvatar.d.ts`              | `CombatAvatarNameEn`                                                                    | 同上 JSON → `nameEn`（与 `AvatarName` 同序）                          |
| 同上                                                       | `CombatAvatarWeaponCode`                                                                | 同上 JSON → `weapon`                                                  |
| `GameTask/AutoFight/Script/Method.d.ts`                    | `CombatMethodCode`                                                                      | `GameTask/AutoFight/Script/Method.cs` → `Alias`                       |
| `GameTask/AutoFight/AutoFightConfig.d.ts`                  | `OnlyPickEliteDropsMode` / `CombatStrategyName` / `StrategyFileKind` / `PartySlotIndex` | 战斗配置与 `AutoFightParam.ResolveStrategyPath`                       |
| `GameTask/AutoBoss/AutoBossConfig.d.ts`                    | `BossName`                                                                              | `GameTask/AutoBoss/AutoBossData.cs` → `CountryToBosses`               |
| `GameTask/AutoDomain/AutoDomainTask.d.ts`                  | `ResinName` / `ArtifactStar` / `DomainName` / `SundaySelectedValue`                     | 树脂 API；`tp.json` Domain 点；周日选项 `""`/`1`–`3`                  |
| `GameTask/AutoLeyLineOutcrop/AutoLeyLineOutcropParam.d.ts` | `LeyLineOutcropType`                                                                    | 启示之花 / 藏金之花                                                   |
| `GameTask/AutoSkip/AutoSkipConfig.d.ts`                    | `ClickChatOption` / `PictureInPictureSourceType`                                        | 剧情跳过配置定值                                                      |
| `GameTask/AutoPathing/PathingScriptNames.d.ts`             | 路径点域 + `TravelMode` / `MainAvatarIndex` / `HurryOnAvatar`                           | `AutoPathing/Model/Enum/*`；`PathingPartyConfig` 列表                 |
| `GameTask/Common/Map/MapScriptNames.d.ts`                  | `MapName` / `CountryName` / `Area` / `MapMatchMethod`                                   | 地图切换与匹配                                                        |
| `GameTask/Common/Job/CraftMaterialTask.d.ts`               | `CraftMaterialType`                                                                     | `Assets/Model/ItemV2/item.csv` → `material_type`                      |
| `Core/Script/Dependence/Model/SoloTask.d.ts`               | `SoloTaskName` 等                                                                       | `Dispatcher` 独立任务                                                 |
| `Core/Script/Dependence/Model/RealtimeTimer.d.ts`          | `RealtimeTriggerName` 等                                                                | `GameTaskManager.AddTrigger`                                          |
| `Core/Script/Dependence/Http.d.ts`                         | `HttpMethod`                                                                            | HTTP 方法                                                             |
| `Core/Script/Dependence/KeyMouseHook.d.ts`                 | `MouseButton`                                                                           | 钩子按键（PascalCase）                                                |
| `Helpers/User32Helper.d.ts`                                | `Key` / `KeyCode`                                                                       | 虚拟键名                                                              |

易混：`classifyAvatarName` 为 YOLO class，保持 `string`。DSL 整串（`teamNames`、`actionSchedulerByCd` 等）与路径/用户队伍名保持 `string`。

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
| [0009](./docs/adr/0009-script-string-domains.md)                | 脚本字符串域               |

## 验证

```bash
pnpm --filter @bettergi/types typecheck
```
