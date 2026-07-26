import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait,
  IsFamilyArgumentOmitted
} from "../../Microsoft/ClearScript/HostType";

declare const iDeepCloneableArity0InputBrand: unique symbol;
export interface _IDeepCloneableArity0Input {
  readonly [iDeepCloneableArity0InputBrand]: true;
}

export interface _IDeepCloneableArity0
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDeepCloneableArity0Input>,
    _IDeepCloneableArity0Input {
  deepClone(): SixLabors.ImageSharp.IDeepCloneable;
}

export interface _IDeepCloneableArity0HostType extends HostType<
  _IDeepCloneableArity0,
  InterfaceTypeTrait
> {}

declare const iDeepCloneableArity1InputBrand: unique symbol;
export interface _IDeepCloneableArity1Input<T> {
  readonly [iDeepCloneableArity1InputBrand]: true;
}

export interface _IDeepCloneableArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IDeepCloneableArity1Input<T>>,
    _IDeepCloneableArity1Input<T> {
  deepClone(): T;
}

export interface _IDeepCloneableArity1HostType<T> extends HostType<
  _IDeepCloneableArity1<T>,
  InterfaceTypeTrait
> {}

export type IDeepCloneableFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true ? _IDeepCloneableArity0 : _IDeepCloneableArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp {
    type IDeepCloneable<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IDeepCloneable").IDeepCloneableFamily<T1>;
  }
}

export type IDeepCloneableInputFamily<T1 = FamilyArgumentOmitted> =
  IsFamilyArgumentOmitted<T1> extends true
    ? _IDeepCloneableArity0Input
    : _IDeepCloneableArity1Input<T1>;

declare global {
  namespace SixLabors.ImageSharp {
    type IDeepCloneableInput<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IDeepCloneable").IDeepCloneableInputFamily<T1>;
  }
}

export type IDeepCloneableHostType = _IDeepCloneableArity0HostType;

export {};
