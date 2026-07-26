import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec4b";

declare const delegateMatForeachFunctionVec4bBrand: unique symbol;
export interface MatForeachFunctionVec4b extends HostDelegate {
  readonly [delegateMatForeachFunctionVec4bBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec4b = import("./MatForeachFunctionVec4b").MatForeachFunctionVec4b;
  }
}

export interface MatForeachFunctionVec4bHostType extends HostType<
  MatForeachFunctionVec4b,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec4b;
}

export {};
