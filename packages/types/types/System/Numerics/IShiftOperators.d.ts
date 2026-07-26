import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iShiftOperatorsArity3InputBrand: unique symbol;
export interface _IShiftOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iShiftOperatorsArity3InputBrand]: true;
}

export interface _IShiftOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IShiftOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IShiftOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IShiftOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IShiftOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IShiftOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IShiftOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IShiftOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IShiftOperators").IShiftOperatorsFamily<T1, T2, T3>;
  }
}

export type IShiftOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IShiftOperatorsArity3Input<T1, T2, T3>;
export type IShiftOperatorsInput<T1, T2, T3> = _IShiftOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IShiftOperatorsInput<T1, T2, T3> = import("./IShiftOperators").IShiftOperatorsInput<
      T1,
      T2,
      T3
    >;
  }
}

export type IShiftOperatorsHostType<T1, T2, T3> = _IShiftOperatorsArity3HostType<T1, T2, T3>;

export {};
