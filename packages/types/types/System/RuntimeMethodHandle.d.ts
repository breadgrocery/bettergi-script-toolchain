import type { ClrHostValue, HostType, ValueTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./IEquatable";
import "./IntPtr";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./ValueType";

declare const runtimeMethodHandleBrand: unique symbol;
export interface RuntimeMethodHandle
  extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [runtimeMethodHandleBrand]: true;
  equals(handle: System.RuntimeMethodHandle): boolean;
  equals(obj: unknown | null): boolean;
  getFunctionPointer(): System.IntPtr;
  getHashCode(): number;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  readonly value: System.IntPtr;
}

declare global {
  namespace System {
    type RuntimeMethodHandle = import("./RuntimeMethodHandle").RuntimeMethodHandle;
  }
}

export interface RuntimeMethodHandleHostType extends HostType<RuntimeMethodHandle, ValueTypeTrait> {
  fromIntPtr(value: System.IntPtr): System.RuntimeMethodHandle;
  toIntPtr(value: System.RuntimeMethodHandle): System.IntPtr;
}

export {};
