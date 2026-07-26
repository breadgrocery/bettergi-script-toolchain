import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateMatForeachFunctionDoubleBrand: unique symbol;
export interface MatForeachFunctionDouble extends HostDelegate {
  readonly [delegateMatForeachFunctionDoubleBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionDouble = import("./MatForeachFunctionDouble").MatForeachFunctionDouble;
  }
}

export interface MatForeachFunctionDoubleHostType extends HostType<
  MatForeachFunctionDouble,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionDouble;
}

export {};
