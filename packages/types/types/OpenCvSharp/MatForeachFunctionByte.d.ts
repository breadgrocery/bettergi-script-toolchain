import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateMatForeachFunctionByteBrand: unique symbol;
export interface MatForeachFunctionByte extends HostDelegate {
  readonly [delegateMatForeachFunctionByteBrand]: true;
  (value: never, position: never): VoidResult;
  invoke(value: never, position: never): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MatForeachFunctionByte = import("./MatForeachFunctionByte").MatForeachFunctionByte;
  }
}

export interface MatForeachFunctionByteHostType extends HostType<
  MatForeachFunctionByte,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): MatForeachFunctionByte;
}

export {};
