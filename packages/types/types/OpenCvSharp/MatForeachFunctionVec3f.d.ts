import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec3f";

declare const delegateMatForeachFunctionVec3fBrand: unique symbol;
export interface MatForeachFunctionVec3f extends HostDelegate {
  readonly [delegateMatForeachFunctionVec3fBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec3f = import("./MatForeachFunctionVec3f").MatForeachFunctionVec3f;
  }
}

export interface MatForeachFunctionVec3fHostType extends HostType<
  MatForeachFunctionVec3f,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec3f;
}

export {};
