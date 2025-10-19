declare global {
  namespace System.Collections {
    interface IDictionary extends ICollection, IEnumerable {
      keys: ICollection;

      values: ICollection;

      contains(key: any): boolean;

      add(key: any, value: any): void;

      clear(): void;

      isReadOnly: boolean;

      isFixedSize: boolean;

      getEnumerator(): IDictionaryEnumerator;

      remove(key: any): void;
    }
  }
}

export {};
