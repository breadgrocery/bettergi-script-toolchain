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

| 项                | 值    |
| ----------------- | ----- |
| ClearScript       | 7.4.5 |
| 包开发 TypeScript | 6.0.3 |

声明包不在本文件固定 BetterGI commit。执行增量同步时，在声明包仓库中按提交时间从新到旧检查 `git log --format='%H%n%B%n%x00' -- packages/types` 的结果，取最近一条作用于该目录且提交消息恰好包含一个完整 trailer 的提交：

```text
Upstream-Commit: <完整 40 位 hash>
```

读取该 trailer 作为基线，并在 `D:\projects\better-genshin-impact` 中验证对象存在且为目标对象的祖先；随后用 `git log --ancestry-path <baseline>..<目标>` 与 `git diff <baseline>..<目标>` 审计上游变化。没有 trailer、基线不是目标祖先或对象不存在时，不得猜测基线。

对新增或变更的 `@since unreleased` 符号，使用 `git log -S/-G` 定位首次引入提交，再用 `git tag --contains <commit> --sort=version:refname` 过滤出形如 `v?MAJOR.MINOR.PATCH` 的稳定 tag 并选择第一个；首次引入提交尚未包含于任何稳定发布 tag 时才保留 `unreleased`，不得预测未来版本。无法定位首次引入或 tag 有歧义时停止该符号的版本更新并报告证据缺口。

默认同步目标是上游当前 `HEAD`。当轮点名稳定 SemVer tag 时，trailer 写该 tag 对象的完整 hash，不以本地领先 `HEAD` 上的默认值/注释漂移冒充该版本。

同步提交信息必须保留唯一 trailer：`Upstream-Commit: <当前目标对象的完整 40 位 hash>`；该 trailer 是下一次同步的唯一基线来源。

## 增量同步核对

在脚本边界复核之外，对 `baseline..目标` 至少核对这些，避免只看 `EngineExtend` / `Dependence`：

1. 已声明 BetterGI 类型的 public 成员面（含嵌套类型）。同一份战斗结束检测字段会同时出现在 `AutoFightConfig`、`AutoFightParam`、地脉花战斗配置，以及 `AutoFightTask` 运行时配置上，改一处须扫其余副本
2. 可见性提升：已纳入类型上的嵌套类型从 `private`/`internal` 变为 `public` 即进入闭包，按完整成员面声明
3. 成员签名里的 CLR 类型用 ambient 全限定名；同文件兄弟类型不得写成模块短名。`pnpm --filter @bettergi/types typecheck` 不会抓住这种缩短
4. 未纳入闭包的上游类型（如 `PathingPartyConfig`）本身不声明，但其名单仍可能是字符串域真源
5. BetterGI `record struct` 按值类型投影（`ValueTypeTrait`、解构 `HostVariableOut`）；实例成员仍写全限定名

## 同步时的脚本边界复核

对每个新增或变更的脚本可达成员，声明前必须沿“上游 CLR 签名 → ClearScript 投影 → 现有同类 binding → 用户脚本调用”逐段核对：

1. 先查找并复用现有同类 binding 的签名和字符串域。键盘、鼠标等输入必须复用已有 `Key` / `KeyCode` / `MouseButton` 及其委托声明；不能仅因调用表面看起来像字符串就退化为 `string`
2. 按实际脚本边界区分 JS 基元、宿主对象、`ClrInput`、宿主数组、`IEnumerableInput`、`Promise` 和 CLR 泛型容器；集合参数至少验证 JS `readonly` 数组与源码允许的 CLR `List` / `IEnumerable` 形态
3. `unknown` 只有在源码明确为 `object`、`dynamic`、开放泛型或按任务分支返回不同结果时才允许。若用户脚本侧边界已确定（例如文本集合是字符串集合），必须声明为具体类型；每个保留的 `unknown` 都要在复查中给出源码依据
4. 为新增边界补充正向和反向类型夹具：验证合法脚本参数可传入，并验证字符串/数字/错误集合元素等越界值会被拒绝

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

1. 下表真源是否变更字面量或校验；`combat_avatar.json` 以 `name` / `nameEn` 字段为准，不用 `alias`
2. `AvatarName` 与 `CombatAvatarNameEn` 是否同序；核对本对相对顺序与字面量集合，不按 JSON 数组重排既有联合（现有声明以「未知角色」居前等顺序为准）
3. 挂接是否仍用该域（含集合元素）
4. 新域：定义 + 挂接 + namespace re-export + 本表
5. `pnpm --filter @bettergi/types typecheck`

路径相对 `types/BetterGenshinImpact/`；真源相对 BetterGI 的 `BetterGenshinImpact/`（或所列 Assets）。

| 定义文件                                                      | 类型                                                                                    | 上游真源                                                              |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `GameTask/AutoFight/Model/Avatar.d.ts`                        | `AvatarName`                                                                            | `GameTask/AutoFight/Assets/combat_avatar.json` → `name`               |
| 同上                                                          | `WalkKey` / `MouseButtonName`                                                           | `Avatar` 行走与鼠标；`MouseButtonName` 为小写，异于钩子 `MouseButton` |
| `GameTask/AutoFight/Config/CombatAvatar.d.ts`                 | `CombatAvatarNameEn`                                                                    | 同上 JSON → `nameEn`（与 `AvatarName` 同序）                          |
| 同上                                                          | `CombatAvatarWeaponCode`                                                                | 同上 JSON → `weapon`                                                  |
| `GameTask/AutoFight/Script/Method.d.ts`                       | `CombatMethodCode`                                                                      | `GameTask/AutoFight/Script/Method.cs` → `Alias`                       |
| `GameTask/AutoFight/AutoFightConfig.d.ts`                     | `OnlyPickEliteDropsMode` / `CombatStrategyName` / `StrategyFileKind` / `PartySlotIndex` | 战斗配置与 `AutoFightParam.ResolveStrategyPath`                       |
| `GameTask/AutoBoss/AutoBossConfig.d.ts`                       | `BossName`                                                                              | `GameTask/AutoBoss/AutoBossData.cs` → `CountryToBosses`               |
| `GameTask/AutoDomain/AutoDomainTask.d.ts`                     | `ResinName` / `ArtifactStar` / `DomainName` / `SundaySelectedValue`                     | 树脂 API；`tp.json` Domain 点；周日选项 `""`/`1`–`3`                  |
| `GameTask/AutoLeyLineOutcrop/AutoLeyLineOutcropParam.d.ts`    | `LeyLineOutcropType`                                                                    | 启示之花 / 藏金之花                                                   |
| `GameTask/AutoSkip/AutoSkipConfig.d.ts`                       | `ClickChatOption` / `PictureInPictureSourceType`                                        | 剧情跳过配置定值                                                      |
| `GameTask/AutoPathing/PathingScriptNames.d.ts`                | 路径点域 + `TravelMode` / `MainAvatarIndex` / `HurryOnAvatar`                           | `AutoPathing/Model/Enum/*`；`PathingPartyConfig` 列表                 |
| `GameTask/Common/Map/MapScriptNames.d.ts`                     | `MapName` / `CountryName` / `Area` / `MapMatchMethod`                                   | 地图切换与匹配                                                        |
| `GameTask/Common/Job/CraftMaterialTask.d.ts`                  | `CraftMaterialType`                                                                     | `Assets/Model/ItemV2/item.csv` → `material_type`                      |
| `GameTask/CharacterDevelopment/CharacterDevelopmentTask.d.ts` | `CharacterElementType`                                                                  | `Assets/Model/AvatarGridIcon/avatar.csv` → `element_type`             |
| `Core/Script/Dependence/Model/SoloTask.d.ts`                  | `SoloTaskName` 等                                                                       | `Dispatcher` 独立任务                                                 |
| `Core/Script/Dependence/Model/RealtimeTimer.d.ts`             | `RealtimeTriggerName` 等                                                                | `GameTaskManager.AddTrigger`                                          |
| `Core/Script/Dependence/Http.d.ts`                            | `HttpMethod`                                                                            | HTTP 方法                                                             |
| `Core/Script/Dependence/KeyMouseHook.d.ts`                    | `MouseButton`                                                                           | 钩子按键（PascalCase）                                                |
| `Helpers/User32Helper.d.ts`                                   | `Key` / `KeyCode`                                                                       | 虚拟键名                                                              |

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
