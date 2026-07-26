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
import "./Memory";
import "./ValueType";

declare const readOnlyMemoryArity1Brand: unique symbol;
export interface _ReadOnlyMemoryArity1<T> extends ClrHostValue {
  readonly [readOnlyMemoryArity1Brand]: true;
  copyTo(destination: System.Memory<T>): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.ReadOnlyMemory): boolean;
  getHashCode(): number;
  pin(): System.Buffers.MemoryHandle;
  readonly isEmpty: boolean;
  readonly length: number;
  slice(start: number | StrongNumeric<Int32Host>): System.ReadOnlyMemory;
  slice(
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): System.ReadOnlyMemory;
  toArray(): HostArray<T>;
  toString(): string;
  tryCopyTo(destination: System.Memory<T>): boolean;
}

export interface _ReadOnlyMemoryArity1HostType<T> extends HostType<
  _ReadOnlyMemoryArity1<T>,
  ValueTypeTrait
> {
  new (array: HostArray<T> | null): _ReadOnlyMemoryArity1<T>;
  new (
    array: HostArray<T> | null,
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): _ReadOnlyMemoryArity1<T>;
  readonly empty: System.ReadOnlyMemory;
}

export type ReadOnlyMemoryFamily<T1 = FamilyArgumentOmitted> = _ReadOnlyMemoryArity1<T1>;

declare global {
  namespace System {
    type ReadOnlyMemory<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ReadOnlyMemory").ReadOnlyMemoryFamily<T1>;
  }
}

export type ReadOnlyMemoryHostType<T1> = _ReadOnlyMemoryArity1HostType<T1>;

export {};
