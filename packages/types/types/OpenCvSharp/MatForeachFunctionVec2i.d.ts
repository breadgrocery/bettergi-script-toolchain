import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec2i";

declare const delegateMatForeachFunctionVec2iBrand: unique symbol;
export interface MatForeachFunctionVec2i extends HostDelegate {
  readonly [delegateMatForeachFunctionVec2iBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec2i = import("./MatForeachFunctionVec2i").MatForeachFunctionVec2i;
  }
}

export interface MatForeachFunctionVec2iHostType extends HostType<
  MatForeachFunctionVec2i,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec2i;
}

export {};
