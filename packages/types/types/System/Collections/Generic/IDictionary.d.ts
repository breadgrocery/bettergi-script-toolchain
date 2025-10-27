import "./ICollection";
import "./IEnumerable";

declare global {
  namespace System.Collections.Generic {
    interface IDictionary<TKey, TValue>
      extends System.Collections.Generic.ICollection<KeyValuePair<TKey, TValue>>,
        System.Collections.Generic.IEnumerable<KeyValuePair<TKey, TValue>> {}
  }
}

export {};
