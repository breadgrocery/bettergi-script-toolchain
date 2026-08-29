# 脚本可达闭包与可用成员面

声明范围从**脚本暴露根**出发，沿公开成员签名递归得到**脚本可达公开签名闭包**。using、方法体、局部变量、私有成员、初始化表达式与仅服务特性的依赖不在闭包内；类型可达不等于整程序集自动纳入。已纳入类型上的嵌套类型若从 `private`/`internal` 升为 `public`，自该次可见性变化起进入闭包，须按完整成员面声明；`@since` 取「符号存在」与「自脚本根可达」中较晚者（见 [0007](./0007-documentation-and-since.md)）。

对已纳入类型，声明其**脚本可用成员面**：以当前 ClearScript 实际可调用为准。public 元数据用于完整性核对，但 pointer、ref-like、不可靠 ref 返回等无法形成可用脚本调用的签名必须省略，也不发明未经运行时验证的 JS 便利 API。

同步新增或变更成员时，必须继续追踪到用户脚本侧的实际参数边界，再决定声明形态。优先复用已有同类 binding 和字符串域；不能把“看起来像字符串”的宿主枚举或按键值降级为 `string`。对集合、委托和 Promise 要同时核对 ClearScript 接受的 JS 输入形态与 CLR 容器形态。`unknown` 不是默认占位：只有上游确实暴露 `object`、`dynamic`、开放泛型或分支异构结果时才保留，并在复查中附源码证据；可确定的脚本边界必须具体化。

`HostTypeCollection("OpenCvSharp")` 只扩大 OpenCvSharp 的 IsImportable 种子，仍只建立 public 且脚本可用的完整类型。扩展方法仅投影**已作为 HostType 暴露**的静态扩展类所注册的成员，在 receiver 上以包内 extension view 交叉，不 reopen CLR 类型，也不投影未注册的扩展。
