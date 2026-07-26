import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Action";
import "../../Comparison";
import "../../Converter";
import "../../IDisposable";
import "../../Predicate";
import "../../ValueType";
import "../ICollection";
import "../IEnumerable";
import "../IEnumerator";
import "../IList";
import "../ObjectModel/ReadOnlyCollection";
import "./ICollection";
import "./IComparer";
import "./IEnumerable";
import "./IEnumerator";
import "./IList";
import "./IReadOnlyCollection";
import "./IReadOnlyList";

declare const listArity1Brand: unique symbol;
export interface _ListArity1<T>
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
  readonly [listArity1Brand]: true;
  [index: number]: T;
  add(item: T | null): VoidResult;
  addRange(collection: System.Collections.Generic.IEnumerable<T>): VoidResult;
  asReadOnly(): System.Collections.ObjectModel.ReadOnlyCollection<T>;
  binarySearch(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    item: T | null,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): number;
  binarySearch(item: T | null): number;
  binarySearch(item: T | null, comparer: System.Collections.Generic.IComparer<T> | null): number;
  capacity: number;
  clear(): VoidResult;
  contains(item: T | null): boolean;
  convertAll<TOutput>(
    type1: HostType<TOutput>,
    converter: System.Converter<T, TOutput>
  ): System.Collections.Generic.List<TOutput>;
  copyTo(array: HostArray<T>): VoidResult;
  copyTo(array: HostArray<T>, arrayIndex: number | StrongNumeric<Int32Host>): VoidResult;
  copyTo(
    index: number | StrongNumeric<Int32Host>,
    array: HostArray<T>,
    arrayIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  ensureCapacity(capacity: number | StrongNumeric<Int32Host>): number;
  exists(match: System.Predicate<T>): boolean;
  find(match: System.Predicate<T>): T;
  findAll(match: System.Predicate<T>): System.Collections.Generic.List;
  findIndex(match: System.Predicate<T>): number;
  findIndex(
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  findIndex(startIndex: number | StrongNumeric<Int32Host>, match: System.Predicate<T>): number;
  findLast(match: System.Predicate<T>): T;
  findLastIndex(match: System.Predicate<T>): number;
  findLastIndex(
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  findLastIndex(startIndex: number | StrongNumeric<Int32Host>, match: System.Predicate<T>): number;
  forEach(action: System.Action<T>): VoidResult;
  getEnumerator(): _ListArity1_Enumerator<T>;
  getRange(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): System.Collections.Generic.List;
  indexOf(item: T | null): number;
  indexOf(item: T | null, index: number | StrongNumeric<Int32Host>): number;
  indexOf(
    item: T | null,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  insert(index: number | StrongNumeric<Int32Host>, item: T | null): VoidResult;
  insertRange(
    index: number | StrongNumeric<Int32Host>,
    collection: System.Collections.Generic.IEnumerable<T>
  ): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): T;
    get(index: number | StrongNumeric<Int32Host>): T;
    set(index: number | StrongNumeric<Int32Host>, value: T): T;
  };
  lastIndexOf(item: T | null): number;
  lastIndexOf(item: T | null, index: number | StrongNumeric<Int32Host>): number;
  lastIndexOf(
    item: T | null,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readonly count: number;
  remove(item: T | null): boolean;
  removeAll(match: System.Predicate<T>): number;
  removeAt(index: number | StrongNumeric<Int32Host>): VoidResult;
  removeRange(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  reverse(): VoidResult;
  reverse(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  slice(
    start: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): System.Collections.Generic.List;
  sort(): VoidResult;
  sort(comparer: System.Collections.Generic.IComparer<T> | null): VoidResult;
  sort(comparison: System.Comparison<T>): VoidResult;
  sort(
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): VoidResult;
  toArray(): HostArray<T>;
  trimExcess(): VoidResult;
  trueForAll(match: System.Predicate<T>): boolean;
}

declare const listArity1_EnumeratorBrand: unique symbol;
export interface _ListArity1_Enumerator<T>
  extends
    ClrHostValue,
    System.Collections.Generic.IEnumeratorInput<T>,
    System.IDisposableInput,
    System.Collections.IEnumeratorInput {
  readonly [listArity1_EnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: T;
  dispose(): VoidResult;
}

export interface _ListArity1_EnumeratorHostType<T> extends HostType<
  _ListArity1_Enumerator<T>,
  ValueTypeTrait
> {}

declare global {
  namespace System.Collections.Generic.List {
    type Enumerator<T> = import("./List")._ListArity1_Enumerator<T>;
  }
}

export interface _ListArity1HostType<T> extends HostType<
  _ListArity1<T>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _ListArity1<T>;
  new (capacity: number | StrongNumeric<Int32Host>): _ListArity1<T>;
  new (collection: System.Collections.Generic.IEnumerable<T>): _ListArity1<T>;
  readonly Enumerator: _ListArity1_EnumeratorHostType<any>;
}

export type ListFamily<T1 = FamilyArgumentOmitted> = _ListArity1<T1>;

declare global {
  namespace System.Collections.Generic {
    type List<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> = import("./List").ListFamily<T1>;
  }
}

export type ListHostType<T1> = _ListArity1HostType<T1>;

export {};
