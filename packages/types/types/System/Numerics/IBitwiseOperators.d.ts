import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iBitwiseOperatorsArity3InputBrand: unique symbol;
export interface _IBitwiseOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iBitwiseOperatorsArity3InputBrand]: true;
}

export interface _IBitwiseOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IBitwiseOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IBitwiseOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IBitwiseOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IBitwiseOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IBitwiseOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IBitwiseOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IBitwiseOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IBitwiseOperators").IBitwiseOperatorsFamily<T1, T2, T3>;
  }
}

export type IBitwiseOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IBitwiseOperatorsArity3Input<T1, T2, T3>;
export type IBitwiseOperatorsInput<T1, T2, T3> = _IBitwiseOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IBitwiseOperatorsInput<T1, T2, T3> = import("./IBitwiseOperators").IBitwiseOperatorsInput<
      T1,
      T2,
      T3
    >;
  }
}

export type IBitwiseOperatorsHostType<T1, T2, T3> = _IBitwiseOperatorsArity3HostType<T1, T2, T3>;

export {};
