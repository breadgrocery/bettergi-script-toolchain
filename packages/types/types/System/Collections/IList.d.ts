import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./ICollection";
import "./IEnumerable";

declare const iListInputBrand: unique symbol;
export interface IListInput {
  readonly [iListInputBrand]: true;
}

export interface IList extends Microsoft.ClearScript.ClrInterfaceView<IListInput>, IListInput {
  [index: number]: unknown;
  add(value: unknown | null): number;
  clear(): VoidResult;
  contains(value: unknown | null): boolean;
  indexOf(value: unknown | null): number;
  insert(index: number | StrongNumeric<Int32Host>, value: unknown | null): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): unknown;
    get(index: number | StrongNumeric<Int32Host>): unknown;
    set(index: number | StrongNumeric<Int32Host>, value: unknown): unknown;
  };
  readonly isFixedSize: boolean;
  readonly isReadOnly: boolean;
  remove(value: unknown | null): VoidResult;
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace System.Collections {
    type IListInput = import("./IList").IListInput;
  }
}

declare global {
  namespace System.Collections {
    type IList = import("./IList").IList;
  }
}

export interface IListHostType extends HostType<IList, InterfaceTypeTrait> {}

export {};
