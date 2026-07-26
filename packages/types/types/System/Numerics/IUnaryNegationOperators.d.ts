import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iUnaryNegationOperatorsArity2InputBrand: unique symbol;
export interface _IUnaryNegationOperatorsArity2Input<TSelf, TResult> {
  readonly [iUnaryNegationOperatorsArity2InputBrand]: true;
}

export interface _IUnaryNegationOperatorsArity2<TSelf, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IUnaryNegationOperatorsArity2Input<TSelf, TResult>>,
    _IUnaryNegationOperatorsArity2Input<TSelf, TResult> {}

export interface _IUnaryNegationOperatorsArity2HostType<TSelf, TResult> extends HostType<
  _IUnaryNegationOperatorsArity2<TSelf, TResult>,
  InterfaceTypeTrait
> {}

export type IUnaryNegationOperatorsFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IUnaryNegationOperatorsArity2<T1, T2>;

declare global {
  namespace System.Numerics {
    type IUnaryNegationOperators<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IUnaryNegationOperators").IUnaryNegationOperatorsFamily<T1, T2>;
  }
}

export type IUnaryNegationOperatorsInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IUnaryNegationOperatorsArity2Input<T1, T2>;
export type IUnaryNegationOperatorsInput<T1, T2> = _IUnaryNegationOperatorsArity2Input<T1, T2>;

declare global {
  namespace System.Numerics {
    type IUnaryNegationOperatorsInput<T1, T2> =
      import("./IUnaryNegationOperators").IUnaryNegationOperatorsInput<T1, T2>;
  }
}

export type IUnaryNegationOperatorsHostType<T1, T2> = _IUnaryNegationOperatorsArity2HostType<
  T1,
  T2
>;

export {};
