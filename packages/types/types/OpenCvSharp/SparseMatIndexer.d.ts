import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/Nullable";

declare const sparseMatIndexerArity1Brand: unique symbol;
export interface _SparseMatIndexerArity1<T> extends ClrHostValue {
  readonly [sparseMatIndexerArity1Brand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>, hashVal: number | StrongNumeric<Int64Host> | null): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
    (
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    get(
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null
    ): T;
    set(
      idx: HostArray<number | StrongNumeric<Int32Host>>,
      hashVal: number | StrongNumeric<Int64Host> | null,
      value: T
    ): T;
  };
}

export interface _SparseMatIndexerArity1HostType<T> extends HostType<
  _SparseMatIndexerArity1<T>,
  ReferenceTypeTrait
> {}

export type SparseMatIndexerFamily<T1 = FamilyArgumentOmitted> = _SparseMatIndexerArity1<T1>;

declare global {
  namespace OpenCvSharp {
    type SparseMatIndexer<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./SparseMatIndexer").SparseMatIndexerFamily<T1>;
  }
}

export type SparseMatIndexerHostType<T1> = _SparseMatIndexerArity1HostType<T1>;

export {};
