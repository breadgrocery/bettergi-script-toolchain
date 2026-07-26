import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const iEqualityComparerArity1InputBrand: unique symbol;
export interface _IEqualityComparerArity1Input<T> {
  readonly [iEqualityComparerArity1InputBrand]: true;
}

export interface _IEqualityComparerArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IEqualityComparerArity1Input<T>>,
    _IEqualityComparerArity1Input<T> {
  equals(x: T | null, y: T | null): boolean;
  getHashCode(obj: T | null): number;
}

export interface _IEqualityComparerArity1HostType<T> extends HostType<
  _IEqualityComparerArity1<T>,
  InterfaceTypeTrait
> {}

export type IEqualityComparerFamily<T1 = FamilyArgumentOmitted> = _IEqualityComparerArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEqualityComparer<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IEqualityComparer").IEqualityComparerFamily<T1>;
  }
}

export type IEqualityComparerInputFamily<T1 = FamilyArgumentOmitted> =
  _IEqualityComparerArity1Input<T1>;
export type IEqualityComparerInput<T1> = _IEqualityComparerArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IEqualityComparerInput<T1> = import("./IEqualityComparer").IEqualityComparerInput<T1>;
  }
}

export type IEqualityComparerHostType<T1> = _IEqualityComparerArity1HostType<T1>;

export {};
