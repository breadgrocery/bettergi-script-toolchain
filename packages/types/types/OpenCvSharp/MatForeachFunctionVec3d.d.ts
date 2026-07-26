import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec3d";

declare const delegateMatForeachFunctionVec3dBrand: unique symbol;
export interface MatForeachFunctionVec3d extends HostDelegate {
  readonly [delegateMatForeachFunctionVec3dBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec3d = import("./MatForeachFunctionVec3d").MatForeachFunctionVec3d;
  }
}

export interface MatForeachFunctionVec3dHostType extends HostType<
  MatForeachFunctionVec3d,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec3d;
}

export {};
