import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec4s";

declare const delegateMatForeachFunctionVec4sBrand: unique symbol;
export interface MatForeachFunctionVec4s extends HostDelegate {
  readonly [delegateMatForeachFunctionVec4sBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec4s = import("./MatForeachFunctionVec4s").MatForeachFunctionVec4s;
  }
}

export interface MatForeachFunctionVec4sHostType extends HostType<
  MatForeachFunctionVec4s,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec4s;
}

export {};
