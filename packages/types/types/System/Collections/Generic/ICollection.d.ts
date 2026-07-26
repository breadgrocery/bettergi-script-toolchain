import type {
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../IEnumerable";
import "./IEnumerable";

declare const iCollectionArity1InputBrand: unique symbol;
export interface _ICollectionArity1Input<T> {
  readonly [iCollectionArity1InputBrand]: true;
}

export interface _ICollectionArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_ICollectionArity1Input<T>>,
    _ICollectionArity1Input<T> {
  add(item: T | null): VoidResult;
  clear(): VoidResult;
  contains(item: T | null): boolean;
  copyTo(array: HostArray<T>, arrayIndex: number | StrongNumeric<Int32Host>): VoidResult;
  readonly count: number;
  readonly isReadOnly: boolean;
  remove(item: T | null): boolean;
}

export interface _ICollectionArity1HostType<T> extends HostType<
  _ICollectionArity1<T>,
  InterfaceTypeTrait
> {}

export type ICollectionFamily<T1 = FamilyArgumentOmitted> = _ICollectionArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type ICollection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ICollection").ICollectionFamily<T1>;
  }
}

export type ICollectionInputFamily<T1 = FamilyArgumentOmitted> = _ICollectionArity1Input<T1>;
export type ICollectionInput<T1> = _ICollectionArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type ICollectionInput<T1> = import("./ICollection").ICollectionInput<T1>;
  }
}

export type ICollectionHostType<T1> = _ICollectionArity1HostType<T1>;

export {};
