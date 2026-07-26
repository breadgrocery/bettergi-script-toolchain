import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
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

declare const collectionArity1Brand: unique symbol;
export interface _CollectionArity1<T>
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
  readonly [collectionArity1Brand]: true;
  add(item: T | null): VoidResult;
  clear(): VoidResult;
  contains(item: T | null): boolean;
  copyTo(array: HostArray<T>, index: number | StrongNumeric<Int32Host>): VoidResult;
  getEnumerator(): System.Collections.Generic.IEnumerator<T>;
  indexOf(item: T | null): number;
  insert(index: number | StrongNumeric<Int32Host>, item: T | null): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
    set(index: number | StrongNumeric<Int32Host>, value: T): T;
  };
  readonly count: number;
  remove(item: T | null): boolean;
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
}

export interface _CollectionArity1HostType<T> extends HostType<
  _CollectionArity1<T>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _CollectionArity1<T>;
  new (list: System.Collections.Generic.IList<T>): _CollectionArity1<T>;
}

export type CollectionFamily<T1 = FamilyArgumentOmitted> = _CollectionArity1<T1>;

declare global {
  namespace System.Collections.ObjectModel {
    type Collection<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./Collection").CollectionFamily<T1>;
  }
}

export type CollectionHostType<T1> = _CollectionArity1HostType<T1>;

export {};
