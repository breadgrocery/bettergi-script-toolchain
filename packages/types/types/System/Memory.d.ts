import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Buffers/MemoryHandle";
import "./IEquatable";
import "./ValueType";

declare const memoryArity1Brand: unique symbol;
export interface _MemoryArity1<T> extends ClrHostValue {
  readonly [memoryArity1Brand]: true;
  copyTo(destination: System.Memory): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.Memory): boolean;
  getHashCode(): number;
  pin(): System.Buffers.MemoryHandle;
  readonly isEmpty: boolean;
  readonly length: number;
  slice(start: number | StrongNumeric<Int32Host>): System.Memory;
  slice(
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): System.Memory;
  toArray(): HostArray<T>;
  toString(): string;
  tryCopyTo(destination: System.Memory): boolean;
}

export interface _MemoryArity1HostType<T> extends HostType<_MemoryArity1<T>, ValueTypeTrait> {
  new (array: HostArray<T> | null): _MemoryArity1<T>;
  new (
    array: HostArray<T> | null,
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): _MemoryArity1<T>;
  readonly empty: System.Memory;
}

export type MemoryFamily<T1 = FamilyArgumentOmitted> = _MemoryArity1<T1>;

declare global {
  namespace System {
    type Memory<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Memory").MemoryFamily<T1>;
  }
}

export type MemoryHostType<T1> = _MemoryArity1HostType<T1>;

export {};
