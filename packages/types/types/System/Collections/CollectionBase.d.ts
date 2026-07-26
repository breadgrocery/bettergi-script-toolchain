import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./ICollection";
import "./IEnumerable";
import "./IEnumerator";
import "./IList";

declare const collectionBaseBrand: unique symbol;
export interface CollectionBase
  extends
    ClrHostValue,
    System.Collections.IListInput,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput {
  readonly [collectionBaseBrand]: true;
  capacity: number;
  clear(): VoidResult;
  getEnumerator(): System.Collections.IEnumerator;
  readonly count: number;
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace System.Collections {
    type CollectionBase = import("./CollectionBase").CollectionBase;
  }
}

export interface CollectionBaseHostType extends HostType<CollectionBase, ReferenceTypeTrait> {}

export {};
