import "../Collections/DictionaryEntry";
import "./IEnumerator";

declare global {
  namespace System.Collections {
    interface IDictionaryEnumerator extends System.Collections.IEnumerator {
      key: any;
      value: any;
      entry: System.Collections.DictionaryEntry;
    }
  }
}

export {};
