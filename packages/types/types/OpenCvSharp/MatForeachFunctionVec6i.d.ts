import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec6i";

declare const delegateMatForeachFunctionVec6iBrand: unique symbol;
export interface MatForeachFunctionVec6i extends HostDelegate {
  readonly [delegateMatForeachFunctionVec6iBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec6i = import("./MatForeachFunctionVec6i").MatForeachFunctionVec6i;
  }
}

export interface MatForeachFunctionVec6iHostType extends HostType<
  MatForeachFunctionVec6i,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec6i;
}

export {};
