declare global {
  /** @since 0.58.0 */
  namespace host {
    /**
     * 创建一个空的动态对象
     * @returns 新的空对象，支持动态属性添加和移除
     * @since 0.58.0
     */
    function newObj(): any;

    /**
     * 创建指定类型的对象实例（泛型版本）
     * @typeparam T 要创建的对象类型
     * @param args 可选的构造函数参数
     * @returns 指定类型的新对象实例
     * @since 0.58.0
     */
    function newObj<T>(...args: any[]): T;

    /**
     * 创建指定类型的对象实例（非泛型版本）
     * @param type 对象的类型
     * @param args 可选的构造函数参数
     * @returns 指定类型的新对象实例
     * @since 0.58.0
     */
    function newObj(type: any, ...args: any[]): any;

    /**
     * 创建动态实例
     * @param target 提供实例化操作的动态主对象
     * @param args 可选的实例化参数
     * @returns 操作结果，通常是一个新的动态主对象
     * @since 0.58.0
     */
    function newObj(target: any, ...args: any[]): any;

    /**
     * 创建指定元素类型的数组（泛型版本）
     * @typeparam T 数组元素类型
     * @param lengths 一个或多个整数，表示数组各维度的长度
     * @returns 指定元素类型的新数组实例
     * @since 0.58.0
     */
    function newArr<T>(...lengths: number[]): T[];

    /**
     * 创建元素类型为 Object 的数组
     * @param lengths 一个或多个整数，表示数组各维度的长度
     * @returns 元素类型为 Object 的新数组实例
     * @since 0.58.0
     */
    function newArr(...lengths: number[]): any[];

    /**
     * 创建指定类型的强类型变量
     * @typeparam T 变量类型
     * @param initValue 可选的初始值
     * @returns 新的强类型变量，支持 value、out、ref 属性
     * @since 0.58.0
     */
    function newVar<T>(initValue?: T): any;

    /**
     * 创建调用脚本函数的委托
     * @typeparam T 要创建的委托类型
     * @param scriptFunc 脚本函数
     * @returns 调用指定脚本函数的新委托
     * @since 0.58.0
     */
    function del<T>(scriptFunc: any): T;

    /**
     * 创建不返回值的委托
     * @param argCount 传递给脚本函数的参数数量
     * @param scriptFunc 脚本函数
     * @returns 调用指定脚本函数且不返回值的新委托
     * @since 0.58.0
     */
    function proc(argCount: number, scriptFunc: any): any;

    /**
     * 创建返回指定类型值的委托
     * @typeparam T 返回值类型
     * @param argCount 传递给脚本函数的参数数量
     * @param scriptFunc 脚本函数
     * @returns 调用指定脚本函数并返回指定类型值的新委托
     * @since 0.58.0
     */
    function func<T>(argCount: number, scriptFunc: any): any;

    /**
     * 创建返回其结果值的委托
     * @param argCount 传递给脚本函数的参数数量
     * @param scriptFunc 脚本函数
     * @returns 调用指定脚本函数并返回其结果的新委托
     * @since 0.58.0
     */
    function func(argCount: number, scriptFunc: any): any;

    /**
     * 获取指定主类型的 Type 对象（泛型版本）
     * @typeparam T 要获取 Type 的主类型
     * @returns 指定主类型的 Type 对象
     * @throws 当脚本引擎的 AllowReflection 属性设置为 false 时抛出异常
     * @since 0.58.0
     */
    function typeOf<T>(): any;

    /**
     * 获取指定主类型的 Type 对象（非泛型版本）
     * @param value 要获取 Type 的主类型
     * @returns 指定主类型的 Type 对象
     * @throws 当脚本引擎的 AllowReflection 属性设置为 false 时抛出异常
     * @since 0.58.0
     */
    function typeOf(value: any): any;

    /**
     * 判断对象是否与指定的主类型兼容
     * @typeparam T 要测试兼容性的主类型
     * @param value 要测试的对象
     * @returns 如果对象与指定类型兼容则返回 true，否则返回 false
     * @since 0.58.0
     */
    function isType<T>(value: any): boolean;

    /**
     * 将对象转换为指定的主类型，转换失败时返回 null
     * @typeparam T 要转换的主类型
     * @param value 要转换的对象
     * @returns 转换成功返回结果，转换失败返回 null
     * @since 0.58.0
     */
    function asType<T>(value: any): T | null;

    /**
     * 将对象强制转换为指定的主类型
     * @typeparam T 要转换的主类型
     * @param value 要转换的对象
     * @returns 转换后的结果
     * @throws 转换失败时抛出异常
     * @since 0.58.0
     */
    function cast<T>(value: any): T;

    /**
     * 判断对象是否为主类型（非泛型版本）
     * @param value 要测试的对象
     * @returns 如果对象是主类型则返回 true，否则返回 false
     * @since 0.58.0
     */
    function isTypeObj(value: any): boolean;

    /**
     * 判断对象是否为主类型（泛型版本）
     * @typeparam T 主类型（被忽略）
     * @returns 始终返回 true
     * @since 0.58.0
     */
    function isTypeObj<T>(): boolean;

    /**
     * 判断指定值是否为 null
     * @param value 要测试的值
     * @returns 如果值为 null 则返回 true，否则返回 false
     * @since 0.58.0
     */
    function isNull(value: any): boolean;

    /**
     * 创建强类型的标志集合
     * @typeparam T 标志集合的类型
     * @param args 要包含在标志集合中的标志
     * @returns 包含指定标志的强类型标志集合
     * @throws 如果 T 不是标志集合类型则抛出异常
     * @since 0.58.0
     */
    function flags<T>(...args: T[]): T;

    /**
     * 将指定值转换为强类型的 SByte 实例
     * @param value 要转换的值
     * @returns 可以传递给 SByte 参数的对象
     * @since 0.58.0
     */
    function toSByte(value: any): any;

    /**
     * 将指定值转换为强类型的 Byte 实例
     * @param value 要转换的值
     * @returns 可以传递给 Byte 参数的对象
     * @since 0.58.0
     */
    function toByte(value: any): any;

    /**
     * 将指定值转换为强类型的 Int16 实例
     * @param value 要转换的值
     * @returns 可以传递给 Int16 参数的对象
     * @since 0.58.0
     */
    function toInt16(value: any): any;

    /**
     * 将指定值转换为强类型的 UInt16 实例
     * @param value 要转换的值
     * @returns 可以传递给 UInt16 参数的对象
     * @since 0.58.0
     */
    function toUInt16(value: any): any;

    /**
     * 将指定值转换为强类型的 Char 实例
     * @param value 要转换的值
     * @returns 可以传递给 Char 参数的对象
     * @since 0.58.0
     */
    function toChar(value: any): any;

    /**
     * 将指定值转换为强类型的 Int32 实例
     * @param value 要转换的值
     * @returns 可以传递给 Int32 参数的对象
     * @since 0.58.0
     */
    function toInt32(value: any): any;

    /**
     * 将指定值转换为强类型的 UInt32 实例
     * @param value 要转换的值
     * @returns 可以传递给 UInt32 参数的对象
     * @since 0.58.0
     */
    function toUInt32(value: any): any;

    /**
     * 将指定值转换为强类型的 Int64 实例
     * @param value 要转换的值
     * @returns 可以传递给 Int64 参数的对象
     * @since 0.58.0
     */
    function toInt64(value: any): any;

    /**
     * 将指定值转换为强类型的 UInt64 实例
     * @param value 要转换的值
     * @returns 可以传递给 UInt64 参数的对象
     * @since 0.58.0
     */
    function toUInt64(value: any): any;

    /**
     * 将指定值转换为强类型的 Single (float) 实例
     * @param value 要转换的值
     * @returns 可以传递给 Single 参数的对象
     * @since 0.58.0
     */
    function toSingle(value: any): any;

    /**
     * 将指定值转换为强类型的 Double 实例
     * @param value 要转换的值
     * @returns 可以传递给 Double 参数的对象
     * @since 0.58.0
     */
    function toDouble(value: any): any;

    /**
     * 将指定值转换为强类型的 Decimal 实例
     * @param value 要转换的值
     * @returns 可以传递给 Decimal 参数的对象
     * @since 0.58.0
     */
    function toDecimal(value: any): any;

    /**
     * 获取实现 IPropertyBag 的动态主对象中属性的值
     * @param target 包含要获取的属性的动态主对象
     * @param name 要获取的属性名
     * @returns 指定属性的值
     * @since 0.58.0
     */
    function getProperty(target: any, name: string): any;

    /**
     * 设置实现 IPropertyBag 的动态主对象中属性的值
     * @param target 包含要设置的属性的动态主对象
     * @param name 要设置的属性名
     * @param value 属性的新值
     * @returns 操作结果，通常是分配给指定属性的值
     * @since 0.58.0
     */
    function setProperty(target: any, name: string, value: any): any;

    /**
     * 从实现 IPropertyBag 的动态主对象中移除属性
     * @param target 包含要移除的属性的动态主对象
     * @param name 要移除的属性名
     * @returns 如果属性被找到并移除则返回 true，否则返回 false
     * @since 0.58.0
     */
    function removeProperty(target: any, name: string): boolean;

    /**
     * 获取实现 IDynamicMetaObjectProvider 的动态主对象中元素的值
     * @param target 包含要获取的元素的动态主对象
     * @param indices 一个或多个用于标识元素的索引
     * @returns 指定元素的值
     * @since 0.58.0
     */
    function getElement(target: any, ...indices: any[]): any;

    /**
     * 设置实现 IDynamicMetaObjectProvider 的动态主对象中元素的值
     * @param target 包含要设置的元素的动态主对象
     * @param value 元素的新值
     * @param indices 一个或多个用于标识元素的索引
     * @returns 操作结果，通常是分配给指定元素的值
     * @since 0.58.0
     */
    function setElement(target: any, value: any, ...indices: any[]): any;

    /**
     * 从实现 IDynamicMetaObjectProvider 的动态主对象中移除元素
     * @param target 包含要移除的元素的动态主对象
     * @param indices 一个或多个用于标识元素的索引
     * @returns 如果元素被找到并移除则返回 true，否则返回 false
     * @since 0.58.0
     */
    function removeElement(target: any, ...indices: any[]): boolean;

    /**
     * 将动态主对象转换为其静态类型
     * @param value 要转换为静态类型的对象
     * @returns 指定对象的静态类型形式，剥离其动态成员
     * @since 0.58.0
     */
    function toStaticType(value: any): any;

    /**
     * 允许脚本代码处理主异常
     * @param tryFunc 调用一个或多个主方法或属性的脚本函数
     * @param catchFunc 当 tryFunc 抛出异常时调用的脚本函数
     * @param finallyFunc 可选的脚本函数，用于执行操作的清理
     * @returns 如果 tryFunc 成功完成返回 true，如果它抛出的异常被 catchFunc 处理则返回 false
     * @since 0.58.0
     */
    function tryCatch(tryFunc: any, catchFunc: any, finallyFunc?: any): boolean;

    /**
     * 创建指定类型和维度的多维数组的强类型变量
     * @typeparam T 数组元素类型
     * @param dimensions 数组的维度数
     * @returns 多维数组的强类型变量，支持 value、out、ref 属性
     * @throws 当创建多维数组失败时抛出异常
     * @since 0.58.0
     */
    function newVarOfArr<T>(dimensions: number): any;
  }
}

export {};
