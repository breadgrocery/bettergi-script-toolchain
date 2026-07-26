import "../../System/Dynamic/IDynamicMetaObjectProvider";
import "../../System/IConvertible";
import "../../System/V8SplitProxyHelpers";
import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "./HostType";
import "./IScriptableObject";

declare const hostFunctionsBrand: unique symbol;
export interface HostFunctions extends ClrHostValue, Microsoft.ClearScript.IScriptableObjectInput {
  readonly [hostFunctionsBrand]: true;
  newObj(): Microsoft.ClearScript.PropertyBag;
  newObj(target: System.Dynamic.IDynamicMetaObjectProvider, ...args: unknown[]): unknown;
  newObj(target: System.Dynamic.IDynamicMetaObjectProvider, args: HostArray<unknown>): unknown;
  newObj(type: unknown, ...args: unknown[]): unknown;
  newObj(type: unknown, args: HostArray<unknown>): unknown;
  newObj<T>(type1: HostType<T>, ...args: unknown[]): T;
  newObj<T>(type1: HostType<T>, args: HostArray<unknown>): T;
  newArr(...lengths: (number | StrongNumeric<Int32Host>)[]): unknown;
  newArr(lengths: HostArray<number | StrongNumeric<Int32Host>>): unknown;
  newArr<T>(type1: HostType<T>, ...lengths: (number | StrongNumeric<Int32Host>)[]): unknown;
  newArr<T>(type1: HostType<T>, lengths: HostArray<number | StrongNumeric<Int32Host>>): unknown;
  newVar<T>(type1: HostType<T>): unknown;
  newVar<T>(type1: HostType<T>, initValue: T): unknown;
  del<T>(type1: HostType<T>, scriptFunc: unknown): T;
  proc(argCount: number | StrongNumeric<Int32Host>, scriptFunc: unknown): unknown;
  func(argCount: number | StrongNumeric<Int32Host>, scriptFunc: unknown): unknown;
  func<T>(
    type1: HostType<T>,
    argCount: number | StrongNumeric<Int32Host>,
    scriptFunc: unknown
  ): unknown;
  typeOf(value: unknown): System.Type;
  typeOf<T>(type1: HostType<T>): System.Type;
  isType<T>(type1: HostType<T>, value: unknown): boolean;
  asType<T>(type1: HostType<T>, value: unknown): unknown;
  cast<T>(type1: HostType<T>, value: unknown): unknown;
  isTypeObj(value: unknown): boolean;
  isTypeObj<T>(type1: HostType<T>): boolean;
  isNull(value: unknown): boolean;
  flags<T>(type1: HostType<T>, ...args: T[]): T;
  flags<T>(type1: HostType<T>, args: HostArray<T>): T;
  toSByte(value: System.IConvertible): unknown;
  toByte(value: System.IConvertible): unknown;
  toInt16(value: System.IConvertible): unknown;
  toUInt16(value: System.IConvertible): unknown;
  toChar(value: System.IConvertible): unknown;
  toInt32(value: System.IConvertible): unknown;
  toUInt32(value: System.IConvertible): unknown;
  toInt64(value: System.IConvertible): unknown;
  toUInt64(value: System.IConvertible): unknown;
  toSingle(value: System.IConvertible): unknown;
  toDouble(value: System.IConvertible): unknown;
  toDecimal(value: System.IConvertible): unknown;
  getProperty(target: Microsoft.ClearScript.IPropertyBag, name: string): unknown;
  getProperty(target: System.Dynamic.IDynamicMetaObjectProvider, name: string): unknown;
  setProperty(target: Microsoft.ClearScript.IPropertyBag, name: string, value: unknown): unknown;
  setProperty(
    target: System.Dynamic.IDynamicMetaObjectProvider,
    name: string,
    value: unknown
  ): unknown;
  removeProperty(target: Microsoft.ClearScript.IPropertyBag, name: string): boolean;
  removeProperty(target: System.Dynamic.IDynamicMetaObjectProvider, name: string): boolean;
  getElement(target: System.Dynamic.IDynamicMetaObjectProvider, ...indices: unknown[]): unknown;
  getElement(
    target: System.Dynamic.IDynamicMetaObjectProvider,
    indices: HostArray<unknown>
  ): unknown;
  setElement(
    target: System.Dynamic.IDynamicMetaObjectProvider,
    value: unknown,
    ...indices: unknown[]
  ): unknown;
  setElement(
    target: System.Dynamic.IDynamicMetaObjectProvider,
    value: unknown,
    indices: HostArray<unknown>
  ): unknown;
  removeElement(target: System.Dynamic.IDynamicMetaObjectProvider, ...indices: unknown[]): boolean;
  removeElement(
    target: System.Dynamic.IDynamicMetaObjectProvider,
    indices: HostArray<unknown>
  ): boolean;
  toStaticType(value: System.Dynamic.IDynamicMetaObjectProvider): unknown;
  tryCatch(tryFunc: unknown, catchFunc: unknown): boolean;
  tryCatch(tryFunc: unknown, catchFunc: unknown, finallyFunc: unknown): boolean;
}

declare global {
  namespace Microsoft.ClearScript {
    type HostFunctions = import("./HostFunctions").HostFunctions;
  }
}

export interface HostFunctionsHostType extends HostType<
  HostFunctions,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): HostFunctions;
}

export {};
