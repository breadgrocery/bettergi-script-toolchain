import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const iAdditiveIdentityArity2InputBrand: unique symbol;
export interface _IAdditiveIdentityArity2Input<TSelf, TResult> {
  readonly [iAdditiveIdentityArity2InputBrand]: true;
}

export interface _IAdditiveIdentityArity2<TSelf, TResult>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IAdditiveIdentityArity2Input<TSelf, TResult>>,
    _IAdditiveIdentityArity2Input<TSelf, TResult> {}

export interface _IAdditiveIdentityArity2HostType<TSelf, TResult> extends HostType<
  _IAdditiveIdentityArity2<TSelf, TResult>,
  InterfaceTypeTrait
> {
  readonly additiveIdentity: TResult;
}

export type IAdditiveIdentityFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IAdditiveIdentityArity2<T1, T2>;

declare global {
  namespace System.Numerics {
    type IAdditiveIdentity<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./IAdditiveIdentity").IAdditiveIdentityFamily<T1, T2>;
  }
}

export type IAdditiveIdentityInputFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _IAdditiveIdentityArity2Input<T1, T2>;
export type IAdditiveIdentityInput<T1, T2> = _IAdditiveIdentityArity2Input<T1, T2>;

declare global {
  namespace System.Numerics {
    type IAdditiveIdentityInput<T1, T2> = import("./IAdditiveIdentity").IAdditiveIdentityInput<
      T1,
      T2
    >;
  }
}

export type IAdditiveIdentityHostType<T1, T2> = _IAdditiveIdentityArity2HostType<T1, T2>;

export {};
