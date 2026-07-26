import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../IEnumerable";
import "./ICollection";
import "./IEnumerable";

declare const iListArity1InputBrand: unique symbol;
export interface _IListArity1Input<T> {
  readonly [iListArity1InputBrand]: true;
}

export interface _IListArity1<T>
  extends Microsoft.ClearScript.ClrInterfaceView<_IListArity1Input<T>>, _IListArity1Input<T> {
  [index: number]: T;
  indexOf(item: T | null): number;
  insert(index: number | StrongNumeric<Int32Host>, item: T | null): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
    set(index: number | StrongNumeric<Int32Host>, value: T): T;
  };
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
}

export interface _IListArity1HostType<T> extends HostType<_IListArity1<T>, InterfaceTypeTrait> {}

export type IListFamily<T1 = FamilyArgumentOmitted> = _IListArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type IList<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IList").IListFamily<T1>;
  }
}

export type IListInputFamily<T1 = FamilyArgumentOmitted> = _IListArity1Input<T1>;
export type IListInput<T1> = _IListArity1Input<T1>;

declare global {
  namespace System.Collections.Generic {
    type IListInput<T1> = import("./IList").IListInput<T1>;
  }
}

export type IListHostType<T1> = _IListArity1HostType<T1>;

export {};
