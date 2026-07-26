import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";

declare const matIndexerArity1Brand: unique symbol;
export interface _MatIndexerArity1<T> extends ClrHostValue {
  readonly [matIndexerArity1Brand]: true;
  item: {
    (i0: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, value: T): T;
    (i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    get(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>): T;
    set(i0: number | StrongNumeric<Int32Host>, i1: number | StrongNumeric<Int32Host>, value: T): T;
    (
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    get(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>
    ): T;
    set(
      i0: number | StrongNumeric<Int32Host>,
      i1: number | StrongNumeric<Int32Host>,
      i2: number | StrongNumeric<Int32Host>,
      value: T
    ): T;
    (idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    get(idx: HostArray<number | StrongNumeric<Int32Host>>): T;
    set(idx: HostArray<number | StrongNumeric<Int32Host>>, value: T): T;
  };
}

export interface _MatIndexerArity1HostType<T> extends HostType<
  _MatIndexerArity1<T>,
  ReferenceTypeTrait
> {}

export type MatIndexerFamily<T1 = FamilyArgumentOmitted> = _MatIndexerArity1<T1>;

declare global {
  namespace OpenCvSharp {
    type MatIndexer<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./MatIndexer").MatIndexerFamily<T1>;
  }
}

export type MatIndexerHostType<T1> = _MatIndexerArity1HostType<T1>;

export {};
