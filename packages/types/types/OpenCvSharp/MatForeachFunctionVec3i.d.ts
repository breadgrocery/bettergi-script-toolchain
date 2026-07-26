import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec3i";

declare const delegateMatForeachFunctionVec3iBrand: unique symbol;
export interface MatForeachFunctionVec3i extends HostDelegate {
  readonly [delegateMatForeachFunctionVec3iBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec3i = import("./MatForeachFunctionVec3i").MatForeachFunctionVec3i;
  }
}

export interface MatForeachFunctionVec3iHostType extends HostType<
  MatForeachFunctionVec3i,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec3i;
}

export {};
