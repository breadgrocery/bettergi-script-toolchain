import type { ClrHostValue, HostType, ValueTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./IEquatable";
import "./IntPtr";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./ValueType";

declare const runtimeFieldHandleBrand: unique symbol;
export interface RuntimeFieldHandle
  extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [runtimeFieldHandleBrand]: true;
  equals(handle: System.RuntimeFieldHandle): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  readonly value: System.IntPtr;
}

declare global {
  namespace System {
    type RuntimeFieldHandle = import("./RuntimeFieldHandle").RuntimeFieldHandle;
  }
}

export interface RuntimeFieldHandleHostType extends HostType<RuntimeFieldHandle, ValueTypeTrait> {
  fromIntPtr(value: System.IntPtr): System.RuntimeFieldHandle;
  toIntPtr(value: System.RuntimeFieldHandle): System.IntPtr;
}

export {};
