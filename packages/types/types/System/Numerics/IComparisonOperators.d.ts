import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./IEqualityOperators";

declare const iComparisonOperatorsArity3InputBrand: unique symbol;
export interface _IComparisonOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iComparisonOperatorsArity3InputBrand]: true;
}

export interface _IComparisonOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<
      _IComparisonOperatorsArity3Input<TSelf, TOther, TResult>
    >,
    _IComparisonOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IComparisonOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IComparisonOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IComparisonOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IComparisonOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IComparisonOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IComparisonOperators").IComparisonOperatorsFamily<T1, T2, T3>;
  }
}

export type IComparisonOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IComparisonOperatorsArity3Input<T1, T2, T3>;
export type IComparisonOperatorsInput<T1, T2, T3> = _IComparisonOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IComparisonOperatorsInput<T1, T2, T3> =
      import("./IComparisonOperators").IComparisonOperatorsInput<T1, T2, T3>;
  }
}

export type IComparisonOperatorsHostType<T1, T2, T3> = _IComparisonOperatorsArity3HostType<
  T1,
  T2,
  T3
>;

export {};
