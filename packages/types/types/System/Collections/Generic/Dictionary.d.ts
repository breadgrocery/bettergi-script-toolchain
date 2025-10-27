import "../../Runtime/Serialization/IDeserializationCallback";
import "../../Runtime/Serialization/ISerializable";
import "../DictionaryEntry";
import "../ICollection";
import "../IDictionary";
import "./DictionaryEnumerator";
import "./ICollection";
import "./IDictionary";
import "./IEnumerable";
import "./IEnumerator";
import "./IEqualityComparer";
import "./IReadOnlyCollection";
import "./IReadOnlyDictionary";
import "./KeyValuePair";

declare global {
  namespace System.Collections.Generic {
    class Dictionary<TKey, TValue>
      implements
        System.Collections.Generic.IDictionary<TKey, TValue>,
        System.Collections.IDictionary,
        System.Collections.Generic.IReadOnlyDictionary<TKey, TValue>,
        System.Runtime.Serialization.ISerializable,
        System.Runtime.Serialization.IDeserializationCallback
    {
      comparer: System.Collections.Generic.IEqualityComparer<TKey>;

      count: number;

      keys: System.Collections.Generic.KeyCollection<TKey, TValue>;

      values: System.Collections.Generic.ValueCollection<TKey, TValue>;

      add(item: System.Collections.Generic.KeyValuePair<TKey, TValue>): void;

      add(key: TKey, value: TValue): void;

      contains(item: System.Collections.Generic.KeyValuePair<TKey, TValue>): boolean;

      remove(item: System.Collections.Generic.KeyValuePair<TKey, TValue>): boolean;

      remove(key: TKey): boolean;

      remove(key: TKey, value: TValue | null): boolean;

      clear(): void;

      containsKey(key: TKey): boolean;

      containsValue(value: TValue): boolean;

      getEnumerator(): System.Collections.Generic.DictionaryEnumerator<TKey, TValue>;

      onDeserialization(sender: any): void;

      tryGetValue(key: TKey, value: TValue | null): boolean;

      tryAdd(key: TKey, value: TValue): boolean;

      copyTo(
        array: System.Collections.Generic.KeyValuePair<TKey, TValue>[],
        arrayIndex: number
      ): void;

      ensureCapacity(capacity: number): number;

      trimExcess(): void;

      trimExcess(capacity: number): void;

      isSynchronized: boolean;

      syncRoot: any;

      isFixedSize: boolean;

      isReadOnly: boolean;

      constructor();

      constructor(capacity: number);

      constructor(comparer: System.Collections.Generic.IEqualityComparer<TKey>);

      constructor(capacity: number, comparer: System.Collections.Generic.IEqualityComparer<TKey>);

      constructor(dictionary: System.Collections.Generic.IDictionary<TKey, TValue>);

      constructor(
        dictionary: System.Collections.Generic.IDictionary<TKey, TValue>,
        comparer: System.Collections.Generic.IEqualityComparer<TKey>
      );

      constructor(
        collection: System.Collections.Generic.IEnumerable<
          System.Collections.Generic.KeyValuePair<TKey, TValue>
        >
      );

      constructor(
        collection: System.Collections.Generic.IEnumerable<
          System.Collections.Generic.KeyValuePair<TKey, TValue>
        >,
        comparer: System.Collections.Generic.IEqualityComparer<TKey>
      );
    }

    class DictionaryEnumerator<TKey, TValue>
      implements
        System.Collections.Generic.IEnumerator<
          System.Collections.Generic.KeyValuePair<TKey, TValue>
        >,
        System.Collections.IDictionaryEnumerator
    {
      moveNext(): boolean;

      current: System.Collections.Generic.KeyValuePair<TKey, TValue>;

      dispose(): void;

      reset(): void;

      entry: System.Collections.DictionaryEntry;

      key: any;

      value: any;
    }

    class KeyCollection<TKey, TValue>
      implements
        System.Collections.Generic.ICollection<TKey>,
        System.Collections.ICollection,
        System.Collections.Generic.IReadOnlyCollection<TKey>
    {
      getEnumerator(): System.Collections.Generic.KeyCollection.Enumerator<TKey>;

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
      implements
        System.Collections.Generic.ICollection<TValue>,
        System.Collections.ICollection,
        System.Collections.Generic.IReadOnlyCollection<TValue>
    {
      getEnumerator(): System.Collections.Generic.ValueCollection.Enumerator<TValue>;

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
