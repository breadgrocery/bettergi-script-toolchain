# 成员、接收者与命名

**名义与输入**：CLR 类型按运行时身份绑定，不是 TS 结构兼容。具体类型带 brand；接口区分 input marker 与完整 interface view。方向性输入用 `ClrInput` 表达可赋值范围，禁止把任意结构对象当成宿主对象。

**接收者**：未启用 `ExposeHostObjectStaticMembers` 时，实例面只有实例成员；静态成员、嵌套类型与构造在 HostType 一侧。可写性跟随 ClearScript accessor；仅有 public setter 的属性声明 `get(): never`，避免把不可用的读取结果当正常值使用。索引器一般为可调用 `item`（及 get/set）；仅一维数组与线性列表等声明数字下标，字典不发明方括号访问。

**重载与顺序**：不同 CLR 重载按源码顺序保留，不合并。默认参数按可省略尾部展开为相邻 arity。实例一侧与 HostType 一侧分别保持各自源码相对顺序；partial 聚合到主声明文件；同一上游源文件中的多个已纳入类型共置且按源码顺序。

**脚本名**：无 `ScriptMember` 时用 `JsonNamingPolicy.CamelCase`；有 `ScriptMember` 用其脚本名；binding 注入名保持原大小写。TypeScript 允许作为属性/方法名的保留字**不加** `_` 后缀（运行时是 `.type`、`.switch()`，不是 `.type_`）；不能作为参数名的保留字可保留后缀；方法名 `new` 写作 `"new"(...)`。

**类型引用**：实例成员、以及 HostType 上对**其他** CLR 类型的参数/返回，一律写 ambient 全限定名（`BetterGenshinImpact.…`、`OpenCvSharp.Size`、`System.DateTime`）。同文件的兄弟类型也如此，例如 `SearchOptions.expandPercent` 写 `BetterGenshinImpact.Core.Recognition.SearchExpandRatio`，不写 `SearchExpandRatio`。仅在声明**该类型自身**时用模块导出短名：`export interface X`、`HostType<X>`、`new (): X`。嵌套类型的模块接口名为 `Parent_Nested`，namespace 名为 `Parent.Nested`；HostType 上的 `readonly Nested: NestedHostType` 用模块短名，新增方法参数写全限定名。同文件父类型上既有的嵌套实例属性可仍为 `Parent_Nested`。脚本字符串域是 TS 联合，可 `import type { AvatarName }` 后在签名中用短别名；CLR 类型不得沿用这种缩短。

**脚本字符串域**：见 [0009](./0009-script-string-domains.md)。
