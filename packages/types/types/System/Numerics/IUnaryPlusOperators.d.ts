import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iUnaryPlusOperatorsArity2InputBrand: unique symbol;
export interface _IUnaryPlusOperatorsArity2Input<TSelf, TResult> {
  readonly [iUnaryPlusOperatorsArity2InputBrand]: true;
}

export interface _IUnaryPlusOperatorsArity2<TSelf, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IUnaryPlusOperatorsArity2Input<TSelf, TResult>>,
    _IUnaryPlusOperatorsArity2Input<TSelf, TResult> {}

export interface _IUnaryPlusOperatorsArity2HostType<TSelf, TResult> extends HostType<
  _IUnaryPlusOperatorsArity2<TSelf, TResult>,
  InterfaceTypeTrait
> {}

export type IUnaryPlusOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IUnaryPlusOperatorsArity2<T1, T2>;

declare global {
  namespace System.Numerics {
    type IUnaryPlusOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IUnaryPlusOperators").IUnaryPlusOperatorsFamily<T1, T2>;
  }
}

export type IUnaryPlusOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IUnaryPlusOperatorsArity2Input<T1, T2>;
export type IUnaryPlusOperatorsInput<T1, T2> = _IUnaryPlusOperatorsArity2Input<T1, T2>;

declare global {
  namespace System.Numerics {
    type IUnaryPlusOperatorsInput<T1, T2> =
      import("./IUnaryPlusOperators").IUnaryPlusOperatorsInput<T1, T2>;
  }
}

export type IUnaryPlusOperatorsHostType<T1, T2> = _IUnaryPlusOperatorsArity2HostType<T1, T2>;

export {};
