import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec6b";

declare const delegateMatForeachFunctionVec6bBrand: unique symbol;
export interface MatForeachFunctionVec6b extends HostDelegate {
  readonly [delegateMatForeachFunctionVec6bBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec6b = import("./MatForeachFunctionVec6b").MatForeachFunctionVec6b;
  }
}

export interface MatForeachFunctionVec6bHostType extends HostType<
  MatForeachFunctionVec6b,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec6b;
}

export {};
