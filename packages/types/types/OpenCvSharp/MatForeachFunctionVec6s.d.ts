import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec6s";

declare const delegateMatForeachFunctionVec6sBrand: unique symbol;
export interface MatForeachFunctionVec6s extends HostDelegate {
  readonly [delegateMatForeachFunctionVec6sBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec6s = import("./MatForeachFunctionVec6s").MatForeachFunctionVec6s;
  }
}

export interface MatForeachFunctionVec6sHostType extends HostType<
  MatForeachFunctionVec6s,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec6s;
}

export {};
