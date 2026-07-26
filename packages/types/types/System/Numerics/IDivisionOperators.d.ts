import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iDivisionOperatorsArity3InputBrand: unique symbol;
export interface _IDivisionOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iDivisionOperatorsArity3InputBrand]: true;
}

export interface _IDivisionOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDivisionOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IDivisionOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IDivisionOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IDivisionOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IDivisionOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IDivisionOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IDivisionOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IDivisionOperators").IDivisionOperatorsFamily<T1, T2, T3>;
  }
}

export type IDivisionOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IDivisionOperatorsArity3Input<T1, T2, T3>;
export type IDivisionOperatorsInput<T1, T2, T3> = _IDivisionOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IDivisionOperatorsInput<T1, T2, T3> =
      import("./IDivisionOperators").IDivisionOperatorsInput<T1, T2, T3>;
  }
}

export type IDivisionOperatorsHostType<T1, T2, T3> = _IDivisionOperatorsArity3HostType<T1, T2, T3>;

export {};
