import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec4i";

declare const delegateMatForeachFunctionVec4iBrand: unique symbol;
export interface MatForeachFunctionVec4i extends HostDelegate {
  readonly [delegateMatForeachFunctionVec4iBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec4i = import("./MatForeachFunctionVec4i").MatForeachFunctionVec4i;
  }
}

export interface MatForeachFunctionVec4iHostType extends HostType<
  MatForeachFunctionVec4i,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec4i;
}

export {};
