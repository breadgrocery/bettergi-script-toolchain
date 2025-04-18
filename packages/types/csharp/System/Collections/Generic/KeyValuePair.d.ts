export interface KeyValuePair<TKey, TValue> {
  key: TKey;

  value: TValue;

  create<TKey, TValue>(key: TKey, value: TValue): KeyValuePair<TKey, TValue>;

  pairToString(key: any, value: any): string;

  toString(): string;

  deconstruct(outKey: TKey, outValue: TValue): void;
}
