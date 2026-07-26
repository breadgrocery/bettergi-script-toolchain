import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../Generic/ICollection";
import "../Generic/IEnumerable";
import "../Generic/IEnumerator";
import "../Generic/IList";
import "../Generic/IReadOnlyCollection";
import "../Generic/IReadOnlyList";
import "../ICollection";
import "../IEnumerable";
import "../IList";

declare const readOnlyCollectionArity1Brand: unique symbol;
export interface _ReadOnlyCollectionArity1<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IListInput<T>,
    System.Collections.Generic.ICollectionInput<T>,
    System.Collections.Generic.IEnumerableInput<T>,
    System.Collections.IEnumerableInput,
    System.Collections.IListInput,
    System.Collections.ICollectionInput,
    System.Collections.Generic.IReadOnlyListInput<T>,
    System.Collections.Generic.IReadOnlyCollectionInput<T> {
  readonly [readOnlyCollectionArity1Brand]: true;
  contains(value: T | null): boolean;
  copyTo(array: HostArray<T>, index: number | StrongNumeric<Int32Host>): VoidResult;
  getEnumerator(): System.Collections.Generic.IEnumerator<T>;
  indexOf(value: T | null): number;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
  };
  readonly count: number;
}

export interface _ReadOnlyCollectionArity1HostType<T> extends HostType<
  _ReadOnlyCollectionArity1<T>,
  ReferenceTypeTrait
> {
  new (list: System.Collections.Generic.IList<T>): _ReadOnlyCollectionArity1<T>;
  readonly empty: System.Collections.ObjectModel.ReadOnlyCollection;
}

export type ReadOnlyCollectionFamily<T1 = FamilyArgumentOmitted> = _ReadOnlyCollectionArity1<T1>;

declare global {
  namespace System.Collections.ObjectModel {
    type ReadOnlyCollection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./ReadOnlyCollection").ReadOnlyCollectionFamily<T1>;
  }
}

export type ReadOnlyCollectionHostType<T1> = _ReadOnlyCollectionArity1HostType<T1>;

export {};
