import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iAdditionOperatorsArity3InputBrand: unique symbol;
export interface _IAdditionOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iAdditionOperatorsArity3InputBrand]: true;
}

export interface _IAdditionOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IAdditionOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IAdditionOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IAdditionOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IAdditionOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IAdditionOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IAdditionOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IAdditionOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IAdditionOperators").IAdditionOperatorsFamily<T1, T2, T3>;
  }
}

export type IAdditionOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IAdditionOperatorsArity3Input<T1, T2, T3>;
export type IAdditionOperatorsInput<T1, T2, T3> = _IAdditionOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IAdditionOperatorsInput<T1, T2, T3> =
      import("./IAdditionOperators").IAdditionOperatorsInput<T1, T2, T3>;
  }
}

export type IAdditionOperatorsHostType<T1, T2, T3> = _IAdditionOperatorsArity3HostType<T1, T2, T3>;

export {};
