import type {
  FamilyArgumentOmitted,
  HostType,
  InterfaceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../IEnumerable";
import "./IEnumerable";

declare const iReadOnlyCollectionArity1InputBrand: unique symbol;
export interface _IReadOnlyCollectionArity1Input<T> {
  readonly [iReadOnlyCollectionArity1InputBrand]: true;
}

export interface _IReadOnlyCollectionArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IReadOnlyCollectionArity1Input<T>>,
    _IReadOnlyCollectionArity1Input<T> {
  readonly count: number;
}

export interface _IReadOnlyCollectionArity1HostType<T> extends HostType<
  _IReadOnlyCollectionArity1<T>,
  InterfaceTypeTrait
> {}

export type IReadOnlyCollectionFamily<T1 = FamilyArgumentOmitted> = _IReadOnlyCollectionArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyCollection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IReadOnlyCollection").IReadOnlyCollectionFamily<T1>;
  }
}

export type IReadOnlyCollectionInputFamily<T1 = FamilyArgumentOmitted> =
  _IReadOnlyCollectionArity1Input<T1>;
export type IReadOnlyCollectionInput<T1> = _IReadOnlyCollectionArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IReadOnlyCollectionInput<T1> =
      import("./IReadOnlyCollection").IReadOnlyCollectionInput<T1>;
  }
}

export type IReadOnlyCollectionHostType<T1> = _IReadOnlyCollectionArity1HostType<T1>;

export {};
