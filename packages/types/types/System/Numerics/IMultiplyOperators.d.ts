import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iMultiplyOperatorsArity3InputBrand: unique symbol;
export interface _IMultiplyOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iMultiplyOperatorsArity3InputBrand]: true;
}

export interface _IMultiplyOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IMultiplyOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IMultiplyOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IMultiplyOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IMultiplyOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IMultiplyOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IMultiplyOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IMultiplyOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IMultiplyOperators").IMultiplyOperatorsFamily<T1, T2, T3>;
  }
}

export type IMultiplyOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IMultiplyOperatorsArity3Input<T1, T2, T3>;
export type IMultiplyOperatorsInput<T1, T2, T3> = _IMultiplyOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IMultiplyOperatorsInput<T1, T2, T3> =
      import("./IMultiplyOperators").IMultiplyOperatorsInput<T1, T2, T3>;
  }
}

export type IMultiplyOperatorsHostType<T1, T2, T3> = _IMultiplyOperatorsArity3HostType<T1, T2, T3>;

export {};
