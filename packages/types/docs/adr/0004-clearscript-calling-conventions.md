# ClearScript 调用约定投影

**按引用参数**：用名义宿主变量；`ref`/`in` 参数只接受 `.ref`，`out` 只接受 `.out`，不声明运行时不存在的 `.in`。

**委托**：宿主委托与脚本函数名义区分。脚本函数默认不能自动绑定为具体 CLR 委托参数，需 `host.del` 或受支持的委托构造入口。未启用 `EnableAutoHostVariables` 时，含 byref 的脚本回调只收到当前值，写回无效。

**返回**：同步 CLR `void` / Action 返回可观察的 `Microsoft.ClearScript.VoidResult`，不用 TypeScript `void` 抹掉该值。已启用 Task↔Promise 时，`Task`/`Task<T>` 分别为 `Promise<void>`/`Promise<T>`；无结果 Task 的完成值归为 `void`，与 VoidResult 分开建模。

**标量与集合**：Boolean/String → boolean/string；常见数值与 char 的返回侧为 number（承认精度损失），精确传参用 `host.toXxx` 强类型包装。枚举为名义宿主值，不是 number。数组为宿主数组，不是 `T[]`；`params` 提供「一个宿主数组」与「rest 打包」两种相邻调用形态。

**泛型与其它**：显式 CLR 泛型实参用前置 HostType。同名多 arity 族在单一 FQN 下用 family owner 与 conditional alias，不发明 `Tuple1` 等假名。Tuple / ValueTuple / record 按 CLR 宿主表面建模。`object` → `unknown`，`dynamic` → `any`。未启用 DateTime 等转换时，对应类型保持宿主对象。
