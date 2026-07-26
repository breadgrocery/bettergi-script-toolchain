import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateMatForeachFunctionFloatBrand: unique symbol;
export interface MatForeachFunctionFloat extends HostDelegate {
  readonly [delegateMatForeachFunctionFloatBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionFloat = import("./MatForeachFunctionFloat").MatForeachFunctionFloat;
  }
}

export interface MatForeachFunctionFloatHostType extends HostType<
  MatForeachFunctionFloat,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionFloat;
}

export {};
