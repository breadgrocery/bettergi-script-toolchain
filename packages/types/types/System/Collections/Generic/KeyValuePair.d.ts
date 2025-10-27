declare global {
  namespace System.Collections.Generic {
    class KeyValuePair<TKey, TValue> {
      key: TKey;

      value: TValue;

      static create<TKey, TValue>(
        key: TKey,
        value: TValue
      ): System.Collections.Generic.KeyValuePair<TKey, TValue>;

      deconstruct(outKey: TKey, outValue: TValue): void;

      constructor(key: TKey, value: TValue);
    }
  }
}

export {};
