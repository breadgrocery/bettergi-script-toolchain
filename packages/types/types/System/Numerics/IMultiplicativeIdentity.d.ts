import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iMultiplicativeIdentityArity2InputBrand: unique symbol;
export interface _IMultiplicativeIdentityArity2Input<TSelf, TResult> {
  readonly [iMultiplicativeIdentityArity2InputBrand]: true;
}

export interface _IMultiplicativeIdentityArity2<TSelf, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IMultiplicativeIdentityArity2Input<TSelf, TResult>>,
    _IMultiplicativeIdentityArity2Input<TSelf, TResult> {}

export interface _IMultiplicativeIdentityArity2HostType<TSelf, TResult> extends HostType<
  _IMultiplicativeIdentityArity2<TSelf, TResult>,
  InterfaceTypeTrait
> {
  readonly multiplicativeIdentity: TResult;
}

export type IMultiplicativeIdentityFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IMultiplicativeIdentityArity2<T1, T2>;

declare global {
  namespace System.Numerics {
    type IMultiplicativeIdentity<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IMultiplicativeIdentity").IMultiplicativeIdentityFamily<T1, T2>;
  }
}

export type IMultiplicativeIdentityInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IMultiplicativeIdentityArity2Input<T1, T2>;
export type IMultiplicativeIdentityInput<T1, T2> = _IMultiplicativeIdentityArity2Input<T1, T2>;

declare global {
  namespace System.Numerics {
    type IMultiplicativeIdentityInput<T1, T2> =
      import("./IMultiplicativeIdentity").IMultiplicativeIdentityInput<T1, T2>;
  }
}

export type IMultiplicativeIdentityHostType<T1, T2> = _IMultiplicativeIdentityArity2HostType<
  T1,
  T2
>;

export {};
