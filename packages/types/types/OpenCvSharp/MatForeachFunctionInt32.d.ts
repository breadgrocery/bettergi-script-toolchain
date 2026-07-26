import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateMatForeachFunctionInt32Brand: unique symbol;
export interface MatForeachFunctionInt32 extends HostDelegate {
  readonly [delegateMatForeachFunctionInt32Brand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionInt32 = import("./MatForeachFunctionInt32").MatForeachFunctionInt32;
  }
}

export interface MatForeachFunctionInt32HostType extends HostType<
  MatForeachFunctionInt32,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionInt32;
}

export {};
