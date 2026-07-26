import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../Microsoft/ClearScript/HostType";

declare const iEquatableArity1InputBrand: unique symbol;
export interface _IEquatableArity1Input<T> {
  readonly [iEquatableArity1InputBrand]: true;
}

export interface _IEquatableArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IEquatableArity1Input<T>>,
    _IEquatableArity1Input<T> {
  equals(other: T | null): boolean;
}

export interface _IEquatableArity1HostType<T> extends HostType<
  _IEquatableArity1<T>,
  InterfaceTypeTrait
> {}

export type IEquatableFamily<T1 = FamilyArgumentOmitted> = _IEquatableArity1<T1>;

declare global {
  namespace System {
    type IEquatable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IEquatable").IEquatableFamily<T1>;
  }
}

export type IEquatableInputFamily<T1 = FamilyArgumentOmitted> = _IEquatableArity1Input<T1>;
export type IEquatableInput<T1> = _IEquatableArity1Input<T1>;

declare global {
  namespace System {
    type IEquatableInput<T1> = import("./IEquatable").IEquatableInput<T1>;
  }
}

export type IEquatableHostType<T1> = _IEquatableArity1HostType<T1>;

export {};
