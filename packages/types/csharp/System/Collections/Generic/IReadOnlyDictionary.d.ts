import { IEnumerable } from "./IEnumerable";
import { IReadOnlyCollection } from "./IReadOnlyCollection";
import { KeyValuePair } from "./KeyValuePair";

export interface IReadOnlyDictionary<TKey, TValue>
  extends IReadOnlyCollection<KeyValuePair<TKey, TValue>>,
    IEnumerable<KeyValuePair<TKey, TValue>> {
  containsKey(key: TKey): boolean;

  tryGetValue(key: TKey, value: TValue | null): boolean;

  Keys: IEnumerable<TKey>;

  Values: IEnumerable<TValue>;
}
