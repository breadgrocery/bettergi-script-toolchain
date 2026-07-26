import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./ICollection";
import "./IEnumerable";
import "./IEnumerator";

declare const readOnlyCollectionBaseBrand: unique symbol;
export interface ReadOnlyCollectionBase
  extends ClrHostValue, System.Collections.ICollectionInput, System.Collections.IEnumerableInput {
  readonly [readOnlyCollectionBaseBrand]: true;
  getEnumerator(): System.Collections.IEnumerator;
  readonly count: number;
}

declare global {
  namespace System.Collections {
    type ReadOnlyCollectionBase = import("./ReadOnlyCollectionBase").ReadOnlyCollectionBase;
  }
}

export interface ReadOnlyCollectionBaseHostType extends HostType<
  ReadOnlyCollectionBase,
  ReferenceTypeTrait
> {}

export {};
