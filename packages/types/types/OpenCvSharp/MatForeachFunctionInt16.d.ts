import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateMatForeachFunctionInt16Brand: unique symbol;
export interface MatForeachFunctionInt16 extends HostDelegate {
  readonly [delegateMatForeachFunctionInt16Brand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionInt16 = import("./MatForeachFunctionInt16").MatForeachFunctionInt16;
  }
}

export interface MatForeachFunctionInt16HostType extends HostType<
  MatForeachFunctionInt16,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionInt16;
}

export {};
