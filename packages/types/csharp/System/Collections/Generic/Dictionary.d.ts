declare global {
  namespace System.Collections.Generic {
    class Dictionary<TKey, TValue>
      implements
        IDictionary<TKey, TValue>,
        System.Collections.IDictionary,
        IReadOnlyDictionary<TKey, TValue>,
        System.Runtime.Serialization.ISerializable,
        System.Runtime.Serialization.IDeserializationCallback
    {
      comparer: IEqualityComparer<TKey>;

      count: number;

      keys: KeyCollection<TKey, TValue>;

      values: ValueCollection<TKey, TValue>;

      add(item: KeyValuePair<TKey, TValue>): void;

      add(key: TKey, value: TValue): void;

      contains(item: KeyValuePair<TKey, TValue>): boolean;

      remove(item: KeyValuePair<TKey, TValue>): boolean;

      remove(key: TKey): boolean;

      remove(key: TKey, value: TValue | null): boolean;

      clear(): void;

      containsKey(key: TKey): boolean;

      containsValue(value: TValue): boolean;

      getEnumerator(): DictionaryEnumerator<TKey, TValue>;

      onDeserialization(sender: any): void;

      tryGetValue(key: TKey, value: TValue | null): boolean;

      tryAdd(key: TKey, value: TValue): boolean;

      copyTo(array: KeyValuePair<TKey, TValue>[], arrayIndex: number): void;

      ensureCapacity(capacity: number): number;

      trimExcess(): void;

      trimExcess(capacity: number): void;

      isSynchronized: boolean;

      syncRoot: any;

      isFixedSize: boolean;

      isReadOnly: boolean;

      constructor();

      constructor(capacity: number);

      constructor(comparer: IEqualityComparer<TKey>);

      constructor(capacity: number, comparer: IEqualityComparer<TKey>);

      constructor(dictionary: IDictionary<TKey, TValue>);

      constructor(dictionary: IDictionary<TKey, TValue>, comparer: IEqualityComparer<TKey>);

      constructor(collection: IEnumerable<KeyValuePair<TKey, TValue>>);

      constructor(
        collection: IEnumerable<KeyValuePair<TKey, TValue>>,
        comparer: IEqualityComparer<TKey>
      );
    }

    class DictionaryEnumerator<TKey, TValue>
      implements IEnumerator<KeyValuePair<TKey, TValue>>, IDictionaryEnumerator
    {
      moveNext(): boolean;

      current: KeyValuePair<TKey, TValue>;

      dispose(): void;

      reset(): void;

      entry: DictionaryEntry;

      key: any;

      value: any;
    }

    class KeyCollection<TKey, TValue>
      implements ICollection<TKey>, System.Collections.ICollection, IReadOnlyCollection<TKey>
    {
      getEnumerator(): KeyCollection.Enumerator<TKey>;

      copyTo(array: TKey[], index: number): void;

      count: number;

      isReadOnly: boolean;

      add(item: TKey): void;

      clear(): void;

      contains(key: TKey): boolean;

      remove(item: TKey): boolean;

      isSynchronized: boolean;

      syncRoot: any;

      constructor(dictionary: System.Collections.Generic.Dictionary<TKey, TValue>);
    }

    namespace KeyCollection {
      class Enumerator<TKey> implements System.Collections.Generic.IEnumerator<TKey> {
        dispose(): void;

        moveNext(): boolean;

        current: TKey;

        reset(): void;
      }
    }

    class ValueCollection<TKey, TValue>
      implements ICollection<TValue>, System.Collections.ICollection, IReadOnlyCollection<TValue>
    {
      getEnumerator(): ValueCollection.Enumerator<TValue>;

      copyTo(array: TValue[], index: number): void;

      count: number;

      isReadOnly: boolean;

      add(item: TValue): void;

      clear(): void;

      contains(key: TValue): boolean;

      remove(item: TValue): boolean;

      isSynchronized: boolean;

      syncRoot: any;

      constructor(dictionary: System.Collections.Generic.Dictionary<TKey, TValue>);
    }

    namespace ValueCollection {
      class Enumerator<TValue> implements System.Collections.Generic.IEnumerator<TValue> {
        dispose(): void;

        moveNext(): boolean;

        current: TValue;

        reset(): void;
      }
    }
  }
}

export {};
