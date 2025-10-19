declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyDictionary<TKey, TValue>
      extends IReadOnlyCollection<KeyValuePair<TKey, TValue>>,
        IEnumerable<KeyValuePair<TKey, TValue>> {
      containsKey(key: TKey): boolean;

      tryGetValue(key: TKey, value: TValue | null): boolean;

      keys: IEnumerable<TKey>;

      values: IEnumerable<TValue>;
    }
  }
}

export {};
