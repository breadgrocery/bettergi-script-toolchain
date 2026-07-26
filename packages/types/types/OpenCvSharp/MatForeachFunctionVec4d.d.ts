import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec4d";

declare const delegateMatForeachFunctionVec4dBrand: unique symbol;
export interface MatForeachFunctionVec4d extends HostDelegate {
  readonly [delegateMatForeachFunctionVec4dBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec4d = import("./MatForeachFunctionVec4d").MatForeachFunctionVec4d;
  }
}

export interface MatForeachFunctionVec4dHostType extends HostType<
  MatForeachFunctionVec4d,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec4d;
}

export {};
