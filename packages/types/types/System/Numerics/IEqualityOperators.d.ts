import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iEqualityOperatorsArity3InputBrand: unique symbol;
export interface _IEqualityOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iEqualityOperatorsArity3InputBrand]: true;
}

export interface _IEqualityOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IEqualityOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IEqualityOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IEqualityOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IEqualityOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IEqualityOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IEqualityOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IEqualityOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IEqualityOperators").IEqualityOperatorsFamily<T1, T2, T3>;
  }
}

export type IEqualityOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IEqualityOperatorsArity3Input<T1, T2, T3>;
export type IEqualityOperatorsInput<T1, T2, T3> = _IEqualityOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IEqualityOperatorsInput<T1, T2, T3> =
      import("./IEqualityOperators").IEqualityOperatorsInput<T1, T2, T3>;
  }
}

export type IEqualityOperatorsHostType<T1, T2, T3> = _IEqualityOperatorsArity3HostType<T1, T2, T3>;

export {};
