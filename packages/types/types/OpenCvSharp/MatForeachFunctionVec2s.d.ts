import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec2s";

declare const delegateMatForeachFunctionVec2sBrand: unique symbol;
export interface MatForeachFunctionVec2s extends HostDelegate {
  readonly [delegateMatForeachFunctionVec2sBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec2s = import("./MatForeachFunctionVec2s").MatForeachFunctionVec2s;
  }
}

export interface MatForeachFunctionVec2sHostType extends HostType<
  MatForeachFunctionVec2s,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec2s;
}

export {};
