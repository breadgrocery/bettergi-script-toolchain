import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iIncrementOperatorsArity1InputBrand: unique symbol;
export interface _IIncrementOperatorsArity1Input<TSelf> {
  readonly [iIncrementOperatorsArity1InputBrand]: true;
}

export interface _IIncrementOperatorsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IIncrementOperatorsArity1Input<TSelf>>,
    _IIncrementOperatorsArity1Input<TSelf> {}

export interface _IIncrementOperatorsArity1HostType<TSelf> extends HostType<
  _IIncrementOperatorsArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IIncrementOperatorsFamily<T1 = FamilyArgumentOmitted> = _IIncrementOperatorsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IIncrementOperators<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IIncrementOperators").IIncrementOperatorsFamily<T1>;
  }
}

export type IIncrementOperatorsInputFamily<T1 = FamilyArgumentOmitted> =
  _IIncrementOperatorsArity1Input<T1>;
export type IIncrementOperatorsInput<T1> = _IIncrementOperatorsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IIncrementOperatorsInput<T1> =
      import("./IIncrementOperators").IIncrementOperatorsInput<T1>;
  }
}

export type IIncrementOperatorsHostType<T1> = _IIncrementOperatorsArity1HostType<T1>;

export {};
