import type { ClrHostValue, HostType, ValueTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./IEquatable";
import "./IntPtr";
import "./ModuleHandle";
import "./Runtime/Serialization/ISerializable";
import "./Runtime/Serialization/SerializationInfo";
import "./Runtime/Serialization/StreamingContext";
import "./ValueType";

declare const runtimeTypeHandleBrand: unique symbol;
export interface RuntimeTypeHandle
  extends ClrHostValue, System.Runtime.Serialization.ISerializableInput {
  readonly [runtimeTypeHandleBrand]: true;
  equals(handle: System.RuntimeTypeHandle): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getModuleHandle(): System.ModuleHandle;
  getObjectData(
    info: System.Runtime.Serialization.SerializationInfo,
    context: System.Runtime.Serialization.StreamingContext
  ): VoidResult;
  readonly value: System.IntPtr;
}

declare global {
  namespace System {
    type RuntimeTypeHandle = import("./RuntimeTypeHandle").RuntimeTypeHandle;
  }
}

export interface RuntimeTypeHandleHostType extends HostType<RuntimeTypeHandle, ValueTypeTrait> {
  fromIntPtr(value: System.IntPtr): System.RuntimeTypeHandle;
  toIntPtr(value: System.RuntimeTypeHandle): System.IntPtr;
}

export {};
