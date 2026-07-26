import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../Microsoft/ClearScript/HostType";

declare const iComparableArity0InputBrand: unique symbol;
export interface _IComparableArity0Input {
  readonly [iComparableArity0InputBrand]: true;
}

export interface _IComparableArity0
  extends Microsoft.ClearScript.ClrInterfaceView<_IComparableArity0Input>, _IComparableArity0Input {
  compareTo(obj: unknown | null): number;
}

export interface _IComparableArity0HostType extends HostType<
  _IComparableArity0,
  InterfaceTypeTrait
> {}

declare const iComparableArity1InputBrand: unique symbol;
export interface _IComparableArity1Input<T> {
  readonly [iComparableArity1InputBrand]: true;
}

export interface _IComparableArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IComparableArity1Input<T>>,
    _IComparableArity1Input<T> {
  compareTo(other: T | null): number;
}

export interface _IComparableArity1HostType<T> extends HostType<
  _IComparableArity1<T>,
  InterfaceTypeTrait
> {}

export type IComparableFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IComparableArity0 : _IComparableArity1<T1>;

declare global {
  namespace System {
    type IComparable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IComparable").IComparableFamily<T1>;
  }
}

export type IComparableInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IComparableArity0Input : _IComparableArity1Input<T1>;

declare global {
  namespace System {
    type IComparableInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IComparable").IComparableInputFamily<T1>;
  }
}

export type IComparableHostType = _IComparableArity0HostType;

export {};
