import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Action";
import "./Collections/Generic/IComparer";
import "./Collections/ICollection";
import "./Collections/IComparer";
import "./Collections/IEnumerable";
import "./Collections/IEnumerator";
import "./Collections/IList";
import "./Collections/IStructuralComparable";
import "./Collections/IStructuralEquatable";
import "./Collections/ObjectModel/ReadOnlyCollection";
import "./Comparison";
import "./Converter";
import "./ICloneable";
import "./Predicate";
import "./V8SplitProxyHelpers";

declare const arrayBrand: unique symbol;
export interface Array
  extends
    ClrHostValue,
    System.ICloneableInput,
    System.Collections.IListInput,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput,
    System.Collections.IStructuralComparableInput,
    System.Collections.IStructuralEquatableInput {
  readonly [arrayBrand]: true;
  clone(): unknown;
  copyTo(array: System.Array, index: number | StrongNumeric<Int32Host>): VoidResult;
  copyTo(array: System.Array, index: number | StrongNumeric<Int64Host>): VoidResult;
  getEnumerator(): System.Collections.IEnumerator;
  getLength(dimension: number | StrongNumeric<Int32Host>): number;
  getLongLength(dimension: number | StrongNumeric<Int32Host>): number;
  getLowerBound(dimension: number | StrongNumeric<Int32Host>): number;
  getUpperBound(dimension: number | StrongNumeric<Int32Host>): number;
  getValue(...indices: (number | StrongNumeric<Int32Host>)[]): unknown;
  getValue(...indices: (number | StrongNumeric<Int64Host>)[]): unknown;
  getValue(
    index1: number | StrongNumeric<Int32Host>,
    index2: number | StrongNumeric<Int32Host>
  ): unknown;
  getValue(
    index1: number | StrongNumeric<Int32Host>,
    index2: number | StrongNumeric<Int32Host>,
    index3: number | StrongNumeric<Int32Host>
  ): unknown;
  getValue(
    index1: number | StrongNumeric<Int64Host>,
    index2: number | StrongNumeric<Int64Host>
  ): unknown;
  getValue(
    index1: number | StrongNumeric<Int64Host>,
    index2: number | StrongNumeric<Int64Host>,
    index3: number | StrongNumeric<Int64Host>
  ): unknown;
  getValue(index: number | StrongNumeric<Int32Host>): unknown;
  getValue(index: number | StrongNumeric<Int64Host>): unknown;
  getValue(indices: HostArray<number | StrongNumeric<Int32Host>>): unknown;
  getValue(indices: HostArray<number | StrongNumeric<Int64Host>>): unknown;
  initialize(): VoidResult;
  readonly isFixedSize: boolean;
  readonly isReadOnly: boolean;
  readonly isSynchronized: boolean;
  readonly length: number;
  readonly longLength: number;
  readonly rank: number;
  readonly syncRoot: unknown;
  setValue(value: unknown | null, ...indices: (number | StrongNumeric<Int32Host>)[]): VoidResult;
  setValue(value: unknown | null, ...indices: (number | StrongNumeric<Int64Host>)[]): VoidResult;
  setValue(
    value: unknown | null,
    index1: number | StrongNumeric<Int32Host>,
    index2: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setValue(
    value: unknown | null,
    index1: number | StrongNumeric<Int32Host>,
    index2: number | StrongNumeric<Int32Host>,
    index3: number | StrongNumeric<Int32Host>
  ): VoidResult;
  setValue(
    value: unknown | null,
    index1: number | StrongNumeric<Int64Host>,
    index2: number | StrongNumeric<Int64Host>
  ): VoidResult;
  setValue(
    value: unknown | null,
    index1: number | StrongNumeric<Int64Host>,
    index2: number | StrongNumeric<Int64Host>,
    index3: number | StrongNumeric<Int64Host>
  ): VoidResult;
  setValue(value: unknown | null, index: number | StrongNumeric<Int32Host>): VoidResult;
  setValue(value: unknown | null, index: number | StrongNumeric<Int64Host>): VoidResult;
  setValue(
    value: unknown | null,
    indices: HostArray<number | StrongNumeric<Int32Host>>
  ): VoidResult;
  setValue(
    value: unknown | null,
    indices: HostArray<number | StrongNumeric<Int64Host>>
  ): VoidResult;
}

declare global {
  namespace System {
    type Array = import("./Array").Array;
  }
}

export interface ArrayHostType extends HostType<Array, ReferenceTypeTrait> {
  readonly maxLength: number;
  constrainedCopy(
    sourceArray: System.Array,
    sourceIndex: number | StrongNumeric<Int32Host>,
    destinationArray: System.Array,
    destinationIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  clear(array: System.Array): VoidResult;
  clear(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  asReadOnly<T>(
    type1: HostType<T>,
    array: HostArray<T>
  ): System.Collections.ObjectModel.ReadOnlyCollection<T>;
  resize<T>(
    type1: HostType<T>,
    array: HostVariableRef<HostArray<T>>,
    newSize: number | StrongNumeric<Int32Host>
  ): VoidResult;
  createInstance(elementType: System.Type, length: number | StrongNumeric<Int32Host>): System.Array;
  createInstance(
    elementType: System.Type,
    length1: number | StrongNumeric<Int32Host>,
    length2: number | StrongNumeric<Int32Host>
  ): System.Array;
  createInstance(
    elementType: System.Type,
    length1: number | StrongNumeric<Int32Host>,
    length2: number | StrongNumeric<Int32Host>,
    length3: number | StrongNumeric<Int32Host>
  ): System.Array;
  createInstance(
    elementType: System.Type,
    lengths: HostArray<number | StrongNumeric<Int32Host>>
  ): System.Array;
  createInstance(
    elementType: System.Type,
    ...lengths: (number | StrongNumeric<Int32Host>)[]
  ): System.Array;
  createInstance(
    elementType: System.Type,
    lengths: HostArray<number | StrongNumeric<Int32Host>>,
    lowerBounds: HostArray<number | StrongNumeric<Int32Host>>
  ): System.Array;
  createInstance(
    elementType: System.Type,
    lengths: HostArray<number | StrongNumeric<Int64Host>>
  ): System.Array;
  createInstance(
    elementType: System.Type,
    ...lengths: (number | StrongNumeric<Int64Host>)[]
  ): System.Array;
  copy(
    sourceArray: System.Array,
    destinationArray: System.Array,
    length: number | StrongNumeric<Int64Host>
  ): VoidResult;
  copy(
    sourceArray: System.Array,
    sourceIndex: number | StrongNumeric<Int64Host>,
    destinationArray: System.Array,
    destinationIndex: number | StrongNumeric<Int64Host>,
    length: number | StrongNumeric<Int64Host>
  ): VoidResult;
  copy(
    sourceArray: System.Array,
    destinationArray: System.Array,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  copy(
    sourceArray: System.Array,
    sourceIndex: number | StrongNumeric<Int32Host>,
    destinationArray: System.Array,
    destinationIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  binarySearch(array: System.Array, value: unknown | null): number;
  binarySearch(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    value: unknown | null
  ): number;
  binarySearch(
    array: System.Array,
    value: unknown | null,
    comparer: System.Collections.IComparer | null
  ): number;
  binarySearch(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    value: unknown | null,
    comparer: System.Collections.IComparer | null
  ): number;
  binarySearch<T>(type1: HostType<T>, array: HostArray<T>, value: T | null): number;
  binarySearch<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): number;
  binarySearch<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    value: T | null
  ): number;
  binarySearch<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    value: T | null,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): number;
  convertAll<TInput, TOutput>(
    type1: HostType<TInput>,
    type2: HostType<TOutput>,
    array: HostArray<TInput>,
    converter: System.Converter<TInput, TOutput>
  ): HostArray<TOutput>;
  empty<T>(type1: HostType<T>): HostArray<T>;
  exists<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): boolean;
  fill<T>(type1: HostType<T>, array: HostArray<T>, value: T | null): VoidResult;
  fill<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  find<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): T;
  findAll<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): HostArray<T>;
  findIndex<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): number;
  findIndex<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    startIndex: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  findIndex<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  findLast<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): T;
  findLastIndex<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): number;
  findLastIndex<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    startIndex: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  findLastIndex<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    match: System.Predicate<T>
  ): number;
  forEach<T>(type1: HostType<T>, array: HostArray<T>, action: System.Action<T>): VoidResult;
  indexOf(array: System.Array, value: unknown | null): number;
  indexOf(
    array: System.Array,
    value: unknown | null,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    array: System.Array,
    value: unknown | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  indexOf<T>(type1: HostType<T>, array: HostArray<T>, value: T | null): number;
  indexOf<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  indexOf<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(array: System.Array, value: unknown | null): number;
  lastIndexOf(
    array: System.Array,
    value: unknown | null,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    array: System.Array,
    value: unknown | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf<T>(type1: HostType<T>, array: HostArray<T>, value: T | null): number;
  lastIndexOf<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    value: T | null,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  reverse(array: System.Array): VoidResult;
  reverse(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  reverse<T>(type1: HostType<T>, array: HostArray<T>): VoidResult;
  reverse<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sort(array: System.Array): VoidResult;
  sort(keys: System.Array, items: System.Array | null): VoidResult;
  sort(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sort(
    keys: System.Array,
    items: System.Array | null,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sort(array: System.Array, comparer: System.Collections.IComparer | null): VoidResult;
  sort(
    keys: System.Array,
    items: System.Array | null,
    comparer: System.Collections.IComparer | null
  ): VoidResult;
  sort(
    array: System.Array,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.IComparer | null
  ): VoidResult;
  sort(
    keys: System.Array,
    items: System.Array | null,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.IComparer | null
  ): VoidResult;
  sort<T>(type1: HostType<T>, array: HostArray<T>): VoidResult;
  sort<TKey, TValue>(
    type1: HostType<TKey>,
    type2: HostType<TValue>,
    keys: HostArray<TKey>,
    items: HostArray<TValue> | null
  ): VoidResult;
  sort<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sort<TKey, TValue>(
    type1: HostType<TKey>,
    type2: HostType<TValue>,
    keys: HostArray<TKey>,
    items: HostArray<TValue> | null,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): VoidResult;
  sort<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): VoidResult;
  sort<TKey, TValue>(
    type1: HostType<TKey>,
    type2: HostType<TValue>,
    keys: HostArray<TKey>,
    items: HostArray<TValue> | null,
    comparer: System.Collections.Generic.IComparer<TKey> | null
  ): VoidResult;
  sort<T>(
    type1: HostType<T>,
    array: HostArray<T>,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IComparer<T> | null
  ): VoidResult;
  sort<TKey, TValue>(
    type1: HostType<TKey>,
    type2: HostType<TValue>,
    keys: HostArray<TKey>,
    items: HostArray<TValue> | null,
    index: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IComparer<TKey> | null
  ): VoidResult;
  sort<T>(type1: HostType<T>, array: HostArray<T>, comparison: System.Comparison<T>): VoidResult;
  trueForAll<T>(type1: HostType<T>, array: HostArray<T>, match: System.Predicate<T>): boolean;
}

export {};
