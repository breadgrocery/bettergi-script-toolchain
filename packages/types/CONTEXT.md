# @bettergi/types 领域模型

本包与 BetterGI 脚本宿主之间统一使用的术语。声明、注释与示例均以本表为准，不得按英文标识符逐词猜译。

## 类型声明边界

**脚本暴露根**:
BetterGI 脚本宿主直接注入的全局对象、全局 HostType、全局可调用宿主委托，以及标准执行路径注入的动态设置对象
_Avoid_: 注入类型、入口类型

**宿主暴露声明**:
描述脚本暴露根及其可直接调用表面的声明；归类取决于宿主注册行为，不取决于成员最初来自哪个程序集
_Avoid_: 第三方声明、原生类型声明

**宿主绑定声明**:
将注入的全局短名绑到完整类型的薄声明；`host` 可另附不改变类型身份的文档 facade
_Avoid_: 类型定义、全局类型文件

**宿主注册序列**:
`EngineExtend.InitHost`、`AddAllGlobalMethod` 与标准路径 settings 注入形成的真实全局暴露顺序；每次注册对应一个 binding
_Avoid_: 入口文件随意排序、源码类型顺序

**完整类型声明**:
按命名空间与上游源文件组织、描述完整脚本可用成员面的声明；不因另有全局短名而改变归属
_Avoid_: 暴露声明、短名声明

**脚本可用成员面**:
CLR 公开签名经当前 ClearScript 投影后，脚本实际可访问的成员与交互能力
_Avoid_: 全量 CLR 公开表面、JavaScript 兼容层

**库类型声明**:
为闭包提供结构的 .NET / 第三方声明，不描述 BetterGI 全局短名
_Avoid_: 宿主声明

**声明入口**:
`index.d.ts`：按注册序列加载 bindings 的唯一激活入口
_Avoid_: 汇总 barrel、全局类型文件

**类型专用 CLR 命名空间**:
只承载全限定类型名、不承诺同名运行时对象的 ambient namespace
_Avoid_: 运行时命名空间树、模块 barrel

**脚本设置**:
运行时注入的动态设置对象；包提供 `BetterGI.ScriptSettings` 形状参考，全局 `settings` 值由各脚本自行声明
_Avoid_: 包内全局 settings 值、固定设置类型

**宿主变量**:
ClearScript 为按引用参数提供的强类型值容器；`ref` 与 `out` 视图不可互换
_Avoid_: JavaScript 引用参数

**宿主委托**:
由 C# 返回或经 `host.del` 从脚本函数创建的强类型可调用对象
_Avoid_: 普通函数、JavaScript 回调

**任务承诺投影**:
在已启用转换时，将 `Task` / `Task<T>` 投影为 `Promise<void>` / `Promise<T>`
_Avoid_: Task 别名、无损异步转换

**宿主空结果**:
同步 CLR `void` 调用返回的可观察 VoidResult 单例，不是 JavaScript `undefined`
_Avoid_: void、undefined、空返回值

**索引器投影**:
一般索引器公开为可调用 `item`；仅受支持的线性集合另有数字方括号访问
_Avoid_: 字典方括号、任意索引签名

**脚本数值**:
CLR 数值与 char 越过 V8 边界后的 JavaScript number，可能丢失种类或精度
_Avoid_: 精确 CLR 数值

**强类型数值包装值**:
`host.toInt32` / `toDecimal` / `toChar` 等创建的、保留具体 CLR 类型的宿主对象
_Avoid_: 普通 number、装箱数值

**宿主枚举**:
保留具体 CLR 枚举身份的宿主对象；成员经对应 HostType 取得
_Avoid_: 数字枚举、字符串枚举

**宿主数组**:
CLR 数组的可迭代宿主对象；一维可有数字成员，矩形多维经方法访问
_Avoid_: JavaScript Array、TypedArray

**参数数组调用**:
`params T[]` 既可接一个宿主数组，也可由 ClearScript 打包逐项位置实参
_Avoid_: 仅 JS 数组参数

**HostType**:
ClearScript 注入的类型侧运行时对象，表示某个 CLR 类型或同名多 arity 类型组；用于构造、访问静态成员，以及作为显式泛型实参（全局如 `Mat`、`Task`）
_Avoid_: 类型令牌、TypeScript `typeof` 类、`System.Type`、普通 JS 构造函数

**接口视图**:
经接口静态类型或 `host.cast` 得到的成员视图，可含显式接口成员
_Avoid_: 结构类型兼容

**方向性输入投影**:
输入位置使用的 CLR 可赋值范围，允许真实派生与接口实现，不把返回视图成员强加给输入
_Avoid_: 结构兼容参数别名

**原生脚本动态对象**:
普通 JS 对象等包装后可赋给 `IDynamicMetaObjectProvider` 的输入，不等于 CLR host object 或 PropertyBag
_Avoid_: 普通 object 袋

**动态属性包**:
`IPropertyBag` 宿主键值面，只接受真实宿主 bag
_Avoid_: 用普通 JS 对象结构冒充

**宿主事件源**:
CLR event 的只读连接入口；`connect` 包装脚本函数并返回可断开连接
_Avoid_: 委托属性

**已注册扩展方法面**:
仅由已暴露为 HostType 的静态扩展类型追加的实例调用表面
_Avoid_: 全程序集扩展

**运行时不可用签名**:
public 元数据中存在，但当前 ClearScript 无法可靠调用、因而不进入声明的成员或重载
_Avoid_: 用 any 伪装可用

**可空投影**:
C# 可空在脚本中以 `| null` 表达无值，不为有值/无值拆成重载
_Avoid_: 用 `?` 表示可省略参数

**未定义宿主值**:
JS `undefined` 对应的专用宿主值，与 CLR null、默认参数省略不等价
_Avoid_: 空值、默认值

**可省略调用形态**:
默认参数允许省略连续尾部实参而形成的参数个数变体
_Avoid_: 可选参数（与可空混淆时）

**脚本可达公开签名闭包**:
自脚本暴露根经公开签名递归可达的类型，及每个已纳入类型的完整公开成员面；方法体依赖不在内
_Avoid_: 全依赖图、整运行时

**上游类型**:
BetterGI 自身定义且属于闭包的类型
_Avoid_: 泛称「C# 类型」

**运行时库类型**:
目标 .NET 运行时库中属于闭包的类型
_Avoid_: 系统类型（指称不清时）

**第三方库类型**:
非 .NET 框架、非 BetterGI 程序集中属于闭包的类型
_Avoid_: 外部类型（指称不清时）

**脚本字符串域**:
封闭或半开放字符串面上的字面量联合，通常带 `(string & {})` 回退
_Avoid_: 任意 string、伪装枚举

## 游戏与任务用语

| 术语             | 含义                                 | 避免使用               |
| ---------------- | ------------------------------------ | ---------------------- |
| BetterGI         | Better Genshin Impact 及其脚本宿主   | 随意译名               |
| 地脉花           | `AutoLeyLineOutcrop` 自动任务        | 地脉线花               |
| 启示之花         | 产出角色经验素材的地脉花类型         | 蓝花（需精确类型时）   |
| 藏金之花         | 产出摩拉的地脉花类型                 | 黄花（需精确类型时）   |
| 角色名称（中文） | 中文角色名字段的统一描述             | 中文角色名称字段       |
| 元素战技         | E 技能                               | 小技能（公开声明中）   |
| 元素爆发         | Q 技能                               | 大招（公开声明中）     |
| 七天神像         | 复苏或恢复用的传送目标               | 神像（需精确时）       |
| 独立任务         | 经 `dispatcher.runTask` 等运行的任务 | Solo 任务              |
| 实时任务         | 由实时触发器周期执行的任务           | 定时任务（语义未定时） |
| 图像区域         | `ImageRegion`                        | 图片区域（指类型时）   |
| 游戏截图区域     | `GameCaptureRegion`                  | 截图对象（指类型时）   |
| 桌面区域         | `DesktopRegion`                      | 屏幕区域（指类型时）   |

## 命名原则

- 优先上游界面文案、源码注释与配置显示名
- 保留 OCR、OpenCV、RGB、JSON、HTML、HTTP、Promise 等通用写法
- 同一概念在 `bindings` 与 `types/BetterGenshinImpact` 中使用同一中文术语
