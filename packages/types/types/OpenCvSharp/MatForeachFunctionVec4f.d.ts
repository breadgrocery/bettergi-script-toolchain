import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec4f";

declare const delegateMatForeachFunctionVec4fBrand: unique symbol;
export interface MatForeachFunctionVec4f extends HostDelegate {
  readonly [delegateMatForeachFunctionVec4fBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec4f = import("./MatForeachFunctionVec4f").MatForeachFunctionVec4f;
  }
}

export interface MatForeachFunctionVec4fHostType extends HostType<
  MatForeachFunctionVec4f,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec4f;
}

export {};
