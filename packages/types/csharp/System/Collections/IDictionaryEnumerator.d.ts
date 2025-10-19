declare global {
  namespace System.Collections {
    interface IDictionaryEnumerator extends IEnumerator {
      key: any;
      value: any;
      entry: System.Collections.DictionaryEntry;
    }
  }
}

export {};
