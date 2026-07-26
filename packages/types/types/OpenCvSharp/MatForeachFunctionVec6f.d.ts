import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec6f";

declare const delegateMatForeachFunctionVec6fBrand: unique symbol;
export interface MatForeachFunctionVec6f extends HostDelegate {
  readonly [delegateMatForeachFunctionVec6fBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec6f = import("./MatForeachFunctionVec6f").MatForeachFunctionVec6f;
  }
}

export interface MatForeachFunctionVec6fHostType extends HostType<
  MatForeachFunctionVec6f,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec6f;
}

export {};
