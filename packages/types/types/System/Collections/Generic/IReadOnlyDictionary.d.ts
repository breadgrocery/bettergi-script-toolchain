import "./IEnumerable";
import "./IReadOnlyCollection";

declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyDictionary<TKey, TValue>
      extends System.Collections.Generic.IReadOnlyCollection<KeyValuePair<TKey, TValue>>,
        System.Collections.Generic.IEnumerable<KeyValuePair<TKey, TValue>> {
      containsKey(key: TKey): boolean;

      tryGetValue(key: TKey, value: TValue | null): boolean;

      keys: System.Collections.Generic.IEnumerable<TKey>;

      values: System.Collections.Generic.IEnumerable<TValue>;
    }
  }
}

export {};
