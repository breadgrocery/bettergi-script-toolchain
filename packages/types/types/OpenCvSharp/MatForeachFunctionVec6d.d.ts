import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec6d";

declare const delegateMatForeachFunctionVec6dBrand: unique symbol;
export interface MatForeachFunctionVec6d extends HostDelegate {
  readonly [delegateMatForeachFunctionVec6dBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec6d = import("./MatForeachFunctionVec6d").MatForeachFunctionVec6d;
  }
}

export interface MatForeachFunctionVec6dHostType extends HostType<
  MatForeachFunctionVec6d,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec6d;
}

export {};
