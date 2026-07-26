import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec3s";

declare const delegateMatForeachFunctionVec3sBrand: unique symbol;
export interface MatForeachFunctionVec3s extends HostDelegate {
  readonly [delegateMatForeachFunctionVec3sBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec3s = import("./MatForeachFunctionVec3s").MatForeachFunctionVec3s;
  }
}

export interface MatForeachFunctionVec3sHostType extends HostType<
  MatForeachFunctionVec3s,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec3s;
}

export {};
