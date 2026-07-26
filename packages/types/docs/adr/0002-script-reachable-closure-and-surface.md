# 脚本可达闭包与可用成员面

声明范围从**脚本暴露根**出发，沿公开成员签名递归得到**脚本可达公开签名闭包**。using、方法体、局部变量、私有成员、初始化表达式与仅服务特性的依赖不在闭包内；类型可达不等于整程序集自动纳入。

对已纳入类型，声明其**脚本可用成员面**：以当前 ClearScript 实际可调用为准。public 元数据用于完整性核对，但 pointer、ref-like、不可靠 ref 返回等无法形成可用脚本调用的签名必须省略，也不发明未经运行时验证的 JS 便利 API。

`HostTypeCollection("OpenCvSharp")` 只扩大 OpenCvSharp 的 IsImportable 种子，仍只建立 public 且脚本可用的完整类型。扩展方法仅投影**已作为 HostType 暴露**的静态扩展类所注册的成员，在 receiver 上以包内 extension view 交叉，不 reopen CLR 类型，也不投影未注册的扩展。
