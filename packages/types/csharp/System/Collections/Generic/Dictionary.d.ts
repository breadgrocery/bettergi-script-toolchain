import { ICollection } from "./ICollection";
import { IDictionary } from "./IDictionary";
import { IEnumerable } from "./IEnumerable";
import { IEnumerator } from "./IEnumerator";
import { IEqualityComparer } from "./IEqualityComparer";
import { IReadOnlyDictionary } from "./IReadOnlyDictionary";
import { KeyValuePair } from "./KeyValuePair";

export interface Dictionary<TKey, TValue>
  extends IDictionary<TKey, TValue>,
    IReadOnlyDictionary<TKey, TValue> {
  comparer: IEqualityComparer<TKey>;

  count: number;

  keys: KeyCollection<TKey, TValue>;

  values: ValueCollection<TKey, TValue>;

  add(item: KeyValuePair<TKey, TValue>): void;

  // overload
  add(key: TKey, value: TValue): void;

  clear(): void;

  containsKey(key: TKey): boolean;

  containsValue(value: TValue): boolean;

  getEnumerator(): Enumerator<KeyValuePair<TKey, TValue>>;

  remove(item: KeyValuePair<TKey, TValue>): boolean;

  // overload
  remove(key: TKey): boolean;

  remove(key: TKey, value: TValue | null): boolean;

  tryGetValue(key: TKey, value: TValue | null): boolean;

  tryAdd(key: TKey, value: TValue): boolean;

  ensureCapacity(capacity: number): number;

  trimExcess(): void;

  trimExcess(capacity: number): void;
}

interface KeyCollection<TKey, TValue> extends ICollection<TKey>, IEnumerable<TKey> {}

interface ValueCollection<TKey, TValue> extends ICollection<TValue>, IEnumerable<TValue> {}

interface Enumerator<T> extends IEnumerator<T> {}
