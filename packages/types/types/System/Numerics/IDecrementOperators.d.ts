import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iDecrementOperatorsArity1InputBrand: unique symbol;
export interface _IDecrementOperatorsArity1Input<TSelf> {
  readonly [iDecrementOperatorsArity1InputBrand]: true;
}

export interface _IDecrementOperatorsArity1<TSelf>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDecrementOperatorsArity1Input<TSelf>>,
    _IDecrementOperatorsArity1Input<TSelf> {}

export interface _IDecrementOperatorsArity1HostType<TSelf> extends HostType<
  _IDecrementOperatorsArity1<TSelf>,
  InterfaceTypeTrait
> {}

export type IDecrementOperatorsFamily<T1 = FamilyArgumentOmitted> = _IDecrementOperatorsArity1<T1>;

declare global {
  namespace System.Numerics {
    type IDecrementOperators<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IDecrementOperators").IDecrementOperatorsFamily<T1>;
  }
}

export type IDecrementOperatorsInputFamily<T1 = FamilyArgumentOmitted> =
  _IDecrementOperatorsArity1Input<T1>;
export type IDecrementOperatorsInput<T1> = _IDecrementOperatorsArity1Input<T1>;

declare global {
  namespace System.Numerics {
    type IDecrementOperatorsInput<T1> =
      import("./IDecrementOperators").IDecrementOperatorsInput<T1>;
  }
}

export type IDecrementOperatorsHostType<T1> = _IDecrementOperatorsArity1HostType<T1>;

export {};
