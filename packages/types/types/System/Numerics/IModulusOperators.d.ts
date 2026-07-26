import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iModulusOperatorsArity3InputBrand: unique symbol;
export interface _IModulusOperatorsArity3Input<TSelf, TOther, TResult> {
  readonly [iModulusOperatorsArity3InputBrand]: true;
}

export interface _IModulusOperatorsArity3<TSelf, TOther, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IModulusOperatorsArity3Input<TSelf, TOther, TResult>>,
    _IModulusOperatorsArity3Input<TSelf, TOther, TResult> {}

export interface _IModulusOperatorsArity3HostType<TSelf, TOther, TResult> extends HostType<
  _IModulusOperatorsArity3<TSelf, TOther, TResult>,
  InterfaceTypeTrait
> {}

export type IModulusOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IModulusOperatorsArity3<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IModulusOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T3 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IModulusOperators").IModulusOperatorsFamily<T1, T2, T3>;
  }
}

export type IModulusOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted,
  T3 = FamilyArgumentOmitted
> = _IModulusOperatorsArity3Input<T1, T2, T3>;
export type IModulusOperatorsInput<T1, T2, T3> = _IModulusOperatorsArity3Input<T1, T2, T3>;

declare global {
  namespace System.Numerics {
    type IModulusOperatorsInput<T1, T2, T3> = import("./IModulusOperators").IModulusOperatorsInput<
      T1,
      T2,
      T3
    >;
  }
}

export type IModulusOperatorsHostType<T1, T2, T3> = _IModulusOperatorsArity3HostType<T1, T2, T3>;

export {};
