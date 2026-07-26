import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const iComparerArity1InputBrand: unique symbol;
export interface _IComparerArity1Input<T> {
  readonly [iComparerArity1InputBrand]: true;
}

export interface _IComparerArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IComparerArity1Input<T>>,
    _IComparerArity1Input<T> {
  compare(x: T | null, y: T | null): number;
}

export interface _IComparerArity1HostType<T> extends HostType<
  _IComparerArity1<T>,
  InterfaceTypeTrait
> {}

export type IComparerFamily<T1 = FamilyArgumentOmitted> = _IComparerArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IComparer<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IComparer").IComparerFamily<T1>;
  }
}

export type IComparerInputFamily<T1 = FamilyArgumentOmitted> = _IComparerArity1Input<T1>;
export type IComparerInput<T1> = _IComparerArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IComparerInput<T1> = import("./IComparer").IComparerInput<T1>;
  }
}

export type IComparerHostType<T1> = _IComparerArity1HostType<T1>;

export {};
