import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iSubtractionOperatorsArity3InputBrand: unique symbol;
export interface _ISubtractionOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iSubtractionOperatorsArity3InputBrand]: true;
}

export interface _ISubtractionOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<
      _ISubtractionOperatorsArity3Input<TSelf, TOther, TResult>
    >,
    _ISubtractionOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _ISubtractionOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _ISubtractionOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type ISubtractionOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _ISubtractionOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type ISubtractionOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./ISubtractionOperators").ISubtractionOperatorsFamily<T1, T2, T3>;
  }
}

export type ISubtractionOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _ISubtractionOperatorsArity3Input<T1, T2, T3>;
export type ISubtractionOperatorsInput<T1, T2, T3> = _ISubtractionOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type ISubtractionOperatorsInput<T1, T2, T3> =
      import("./ISubtractionOperators").ISubtractionOperatorsInput<T1, T2, T3>;
  }
}

export type ISubtractionOperatorsHostType<T1, T2, T3> = _ISubtractionOperatorsArity3HostType<
  T1,
  T2,
  T3
>;

export {};
