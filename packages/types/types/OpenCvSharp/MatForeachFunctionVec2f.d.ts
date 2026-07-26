import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec2f";

declare const delegateMatForeachFunctionVec2fBrand: unique symbol;
export interface MatForeachFunctionVec2f extends HostDelegate {
  readonly [delegateMatForeachFunctionVec2fBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec2f = import("./MatForeachFunctionVec2f").MatForeachFunctionVec2f;
  }
}

export interface MatForeachFunctionVec2fHostType extends HostType<
  MatForeachFunctionVec2f,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec2f;
}

export {};
