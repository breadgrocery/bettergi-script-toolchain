import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec3b";

declare const delegateMatForeachFunctionVec3bBrand: unique symbol;
export interface MatForeachFunctionVec3b extends HostDelegate {
  readonly [delegateMatForeachFunctionVec3bBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec3b = import("./MatForeachFunctionVec3b").MatForeachFunctionVec3b;
  }
}

export interface MatForeachFunctionVec3bHostType extends HostType<
  MatForeachFunctionVec3b,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec3b;
}

export {};
