import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";
import "./Vec2b";

declare const delegateMatForeachFunctionVec2bBrand: unique symbol;
export interface MatForeachFunctionVec2b extends HostDelegate {
  readonly [delegateMatForeachFunctionVec2bBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionVec2b = import("./MatForeachFunctionVec2b").MatForeachFunctionVec2b;
  }
}

export interface MatForeachFunctionVec2bHostType extends HostType<
  MatForeachFunctionVec2b,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionVec2b;
}

export {};
