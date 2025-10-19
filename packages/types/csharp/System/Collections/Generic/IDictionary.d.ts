declare global {
  namespace System.Collections.Generic {
    interface IDictionary<TKey, TValue>
      extends ICollection<KeyValuePair<TKey, TValue>>,
        IEnumerable<KeyValuePair<TKey, TValue>> {}
  }
}

export {};
