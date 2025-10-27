import "./ICollection";
import "./IDictionaryEnumerator";
import "./IEnumerable";

declare global {
  namespace System.Collections {
    interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable {
      keys: System.Collections.ICollection;

      values: System.Collections.ICollection;

      contains(key: any): boolean;

      add(key: any, value: any): void;

      clear(): void;

      isReadOnly: boolean;

      isFixedSize: boolean;

      getEnumerator(): System.Collections.IDictionaryEnumerator;

      remove(key: any): void;
    }
  }
}

export {};
