import { ICollection } from "./ICollection";
import { IEnumerable } from "./IEnumerable";
import { KeyValuePair } from "./KeyValuePair";

export interface IDictionary<TKey, TValue> extends ICollection<KeyValuePair<TKey, TValue>> {
  keys: ICollection<TKey>;

  values: ICollection<TValue>;

  containsKey(key: TKey): boolean;

  add(item: KeyValuePair<TKey, TValue>): void;

  // overload
  add(key: TKey, value: TValue): void;

  remove(item: KeyValuePair<TKey, TValue>): boolean;

  // overload
  remove(key: TKey): boolean;

  tryGetValue(key: TKey, value: TValue | null): boolean;
}
