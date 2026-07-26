import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";

declare const readOnlyArray2DArity1Brand: unique symbol;
export interface _ReadOnlyArray2DArity1<T> extends ClrHostValue {
  readonly [readOnlyArray2DArity1Brand]: true;
  item: {
    (index0: number | StrongNumeric<Int32Host>, index1: number | StrongNumeric<Int32Host>): T;
    get(index0: number | StrongNumeric<Int32Host>, index1: number | StrongNumeric<Int32Host>): T;
  };
  readonly length: number;
  getLength(dimension: number | StrongNumeric<Int32Host>): number;
  getBuffer(): HostArray<T>;
}

export interface _ReadOnlyArray2DArity1HostType<T> extends HostType<
  _ReadOnlyArray2DArity1<T>,
  ReferenceTypeTrait
> {
  new (data: HostArray<T>): _ReadOnlyArray2DArity1<T>;
}

export type ReadOnlyArray2DFamily<T1 = FamilyArgumentOmitted> = _ReadOnlyArray2DArity1<T1>;

declare global {
  namespace OpenCvSharp.Internal.Util {
    type ReadOnlyArray2D<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ReadOnlyArray2D").ReadOnlyArray2DFamily<T1>;
  }
}

export type ReadOnlyArray2DHostType<T1> = _ReadOnlyArray2DArity1HostType<T1>;

export {};
