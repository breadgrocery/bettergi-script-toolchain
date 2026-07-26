import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec2d";

declare const delegateMatForeachFunctionVec2dBrand: unique symbol;
export interface MatForeachFunctionVec2d extends HostDelegate {
  readonly [delegateMatForeachFunctionVec2dBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec2d = import("./MatForeachFunctionVec2d").MatForeachFunctionVec2d;
  }
}

export interface MatForeachFunctionVec2dHostType extends HostType<
  MatForeachFunctionVec2d,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec2d;
}

export {};
