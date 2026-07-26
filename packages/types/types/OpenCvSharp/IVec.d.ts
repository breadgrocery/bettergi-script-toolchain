import type {
  DoubleHost,
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";

declare const iVecArity0InputBrand: unique symbol;
export interface _IVecArity0Input {
  readonly [iVecArity0InputBrand]: true;
}

export interface _IVecArity0
  extends Microsoft.ClearScript.ClrInterfaceView<_IVecArity0Input>, _IVecArity0Input {}

export interface _IVecArity0HostType extends HostType<_IVecArity0, InterfaceTypeTrait> {}

declare const iVecArity2InputBrand: unique symbol;
export interface _IVecArity2Input<TSelf, TElem> {
  readonly [iVecArity2InputBrand]: true;
}

export interface _IVecArity2<TSelf, TElem>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IVecArity2Input<TSelf, TElem>>,
    _IVecArity2Input<TSelf, TElem> {
  add(other: TSelf): TSelf;
  subtract(other: TSelf): TSelf;
  multiply(alpha: number | StrongNumeric<DoubleHost>): TSelf;
  divide(alpha: number | StrongNumeric<DoubleHost>): TSelf;
  item: {
    (i: number | StrongNumeric<Int32Host>): TElem;
    get(i: number | StrongNumeric<Int32Host>): TElem;
  };
}

export interface _IVecArity2HostType<TSelf, TElem> extends HostType<
  _IVecArity2<TSelf, TElem>,
  InterfaceTypeTrait
> {}

export type IVecFamily<T1 = FamilyArgumentOmitted, T2 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IVecArity0
    : IsFamilyArgumentOmitted<T2> extends true
      ? never
      : _IVecArity2<T1, T2>;

declare global {
  namespace OpenCvSharp {
    type IVec<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IVec").IVecFamily<T1, T2>;
  }
}

export type IVecInputFamily<T1 = FamilyArgumentOmitted, T2 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IVecArity0Input
    : IsFamilyArgumentOmitted<T2> extends true
      ? never
      : _IVecArity2Input<T1, T2>;

declare global {
  namespace OpenCvSharp {
    type IVecInput<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IVec").IVecInputFamily<T1, T2>;
  }
}

export type IVecHostType = _IVecArity0HostType;

export {};
