declare global {
  namespace System.Collections {
    class DictionaryEntry {
      key: any;
      value: any;

      deconstruct(): [any, any];

      constructor(key: any, value: any);
    }
  }
}

export {};
