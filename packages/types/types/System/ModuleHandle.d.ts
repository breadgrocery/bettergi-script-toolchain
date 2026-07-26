import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "./IEquatable";
import "./RuntimeFieldHandle";
import "./RuntimeMethodHandle";
import "./RuntimeTypeHandle";
import "./ValueType";

declare const moduleHandleBrand: unique symbol;
export interface ModuleHandle extends ClrHostValue {
  readonly [moduleHandleBrand]: true;
  equals(handle: System.ModuleHandle): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getRuntimeFieldHandleFromMetadataToken(
    fieldToken: number | StrongNumeric<Int32Host>
  ): System.RuntimeFieldHandle;
  getRuntimeMethodHandleFromMetadataToken(
    methodToken: number | StrongNumeric<Int32Host>
  ): System.RuntimeMethodHandle;
  getRuntimeTypeHandleFromMetadataToken(
    typeToken: number | StrongNumeric<Int32Host>
  ): System.RuntimeTypeHandle;
  readonly mdStreamVersion: number;
  resolveFieldHandle(fieldToken: number | StrongNumeric<Int32Host>): System.RuntimeFieldHandle;
  resolveFieldHandle(
    fieldToken: number | StrongNumeric<Int32Host>,
    typeInstantiationContext: HostArray<System.RuntimeTypeHandle> | null,
    methodInstantiationContext: HostArray<System.RuntimeTypeHandle> | null
  ): System.RuntimeFieldHandle;
  resolveMethodHandle(methodToken: number | StrongNumeric<Int32Host>): System.RuntimeMethodHandle;
  resolveMethodHandle(
    methodToken: number | StrongNumeric<Int32Host>,
    typeInstantiationContext: HostArray<System.RuntimeTypeHandle> | null,
    methodInstantiationContext: HostArray<System.RuntimeTypeHandle> | null
  ): System.RuntimeMethodHandle;
  resolveTypeHandle(typeToken: number | StrongNumeric<Int32Host>): System.RuntimeTypeHandle;
  resolveTypeHandle(
    typeToken: number | StrongNumeric<Int32Host>,
    typeInstantiationContext: HostArray<System.RuntimeTypeHandle> | null,
    methodInstantiationContext: HostArray<System.RuntimeTypeHandle> | null
  ): System.RuntimeTypeHandle;
}

declare global {
  namespace System {
    type ModuleHandle = import("./ModuleHandle").ModuleHandle;
  }
}

export interface ModuleHandleHostType extends HostType<ModuleHandle, ValueTypeTrait> {
  readonly emptyHandle: System.ModuleHandle;
}

export {};
