import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Array";
import "./IEnumerable";

declare const iCollectionInputBrand: unique symbol;
export interface ICollectionInput {
  readonly [iCollectionInputBrand]: true;
}

export interface ICollection
  extends Microsoft.ClearScript.ClrInterfaceView<ICollectionInput>, ICollectionInput {
  copyTo(array: System.Array, index: number | StrongNumeric<Int32Host>): VoidResult;
  readonly count: number;
  readonly isSynchronized: boolean;
  readonly syncRoot: unknown;
}

declare global {
  namespace System.Collections {
    type ICollectionInput = import("./ICollection").ICollectionInput;
  }
}

declare global {
  namespace System.Collections {
    type ICollection = import("./ICollection").ICollection;
  }
}

export interface ICollectionHostType extends HostType<ICollection, InterfaceTypeTrait> {}

export {};
