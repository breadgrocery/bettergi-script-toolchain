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
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Func";
import "../Generic/ICollection";
import "../Generic/IDictionary";
import "../Generic/IEnumerable";
import "../Generic/IEnumerator";
import "../Generic/IEqualityComparer";
import "../Generic/IReadOnlyCollection";
import "../Generic/IReadOnlyDictionary";
import "../Generic/KeyValuePair";
import "../ICollection";
import "../IDictionary";
import "../IEnumerable";

declare const concurrentDictionaryArity2Brand: unique symbol;
export interface _ConcurrentDictionaryArity2<TKey, TValue>
  extends
    ClrHostValue,
    System.Collections.Generic.IDictionaryInput<TKey, TValue>,
    System.Collections.Generic.ICollectionInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.Collections.Generic.IEnumerableInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    System.Collections.IEnumerableInput,
    System.Collections.IDictionaryInput,
    System.Collections.ICollectionInput,
    System.Collections.Generic.IReadOnlyDictionaryInput<TKey, TValue>,
    System.Collections.Generic.IReadOnlyCollectionInput<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    > {
  readonly [concurrentDictionaryArity2Brand]: true;
  addOrUpdate(
    key: TKey,
    addValue: TValue | null,
    updateValueFactory: System.Func<TKey, TValue, TValue>
  ): TValue;
  addOrUpdate(
    key: TKey,
    addValueFactory: System.Func<TKey, TValue>,
    updateValueFactory: System.Func<TKey, TValue, TValue>
  ): TValue;
  addOrUpdate<TArg>(
    type1: HostType<TArg>,
    key: TKey,
    addValueFactory: System.Func<TKey, TArg, TValue>,
    updateValueFactory: System.Func<TKey, TValue, TArg, TValue>,
    factoryArgument: TArg | null
  ): TValue;
  clear(): VoidResult;
  containsKey(key: TKey): boolean;
  getEnumerator(): System.Collections.Generic.IEnumerator<
    System.Collections.Generic.KeyValuePair<TKey, TValue>
  >;
  getOrAdd(key: TKey, value: TValue | null): TValue;
  getOrAdd(key: TKey, valueFactory: System.Func<TKey, TValue>): TValue;
  getOrAdd<TArg>(
    type1: HostType<TArg>,
    key: TKey,
    valueFactory: System.Func<TKey, TArg, TValue>,
    factoryArgument: TArg | null
  ): TValue;
  item: { (key: TKey): TValue; get(key: TKey): TValue; set(key: TKey, value: TValue): TValue };
  readonly comparer: System.Collections.Generic.IEqualityComparer<TKey>;
  readonly count: number;
  readonly isEmpty: boolean;
  readonly keys: System.Collections.Generic.ICollection<TKey>;
  readonly values: System.Collections.Generic.ICollection<TValue>;
  toArray(): HostArray<System.Collections.Generic.KeyValuePair<TKey, TValue>>;
  tryAdd(key: TKey, value: TValue | null): boolean;
  tryGetValue(key: TKey, value: HostVariableOut<TValue>): boolean;
  tryRemove(item: System.Collections.Generic.KeyValuePair<TKey, TValue>): boolean;
  tryRemove(key: TKey, value: HostVariableOut<TValue>): boolean;
  tryUpdate(key: TKey, newValue: TValue | null, comparisonValue: TValue | null): boolean;
}

export interface _ConcurrentDictionaryArity2HostType<TKey, TValue> extends HostType<
  _ConcurrentDictionaryArity2<TKey, TValue>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    concurrencyLevel: number | StrongNumeric<Int32Host>,
    capacity: number | StrongNumeric<Int32Host>
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    collection: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    collection: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    concurrencyLevel: number | StrongNumeric<Int32Host>,
    collection: System.Collections.Generic.IEnumerable<
      System.Collections.Generic.KeyValuePair<TKey, TValue>
    >,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
  new (
    concurrencyLevel: number | StrongNumeric<Int32Host>,
    capacity: number | StrongNumeric<Int32Host>,
    comparer: System.Collections.Generic.IEqualityComparer<TKey> | null
  ): _ConcurrentDictionaryArity2<TKey, TValue>;
}

export type ConcurrentDictionaryFamily<
  T1 = FamilyArgumentOmitted,
  T2 = FamilyArgumentOmitted
> = _ConcurrentDictionaryArity2<T1, T2>;

declare global {
  namespace System.Collections.Concurrent {
    type ConcurrentDictionary<
      T1 = Microsoft.ClearScript.FamilyArgumentOmitted,
      T2 = Microsoft.ClearScript.FamilyArgumentOmitted
    > = import("./ConcurrentDictionary").ConcurrentDictionaryFamily<T1, T2>;
  }
}

export type ConcurrentDictionaryHostType<T1, T2> = _ConcurrentDictionaryArity2HostType<T1, T2>;

export {};
