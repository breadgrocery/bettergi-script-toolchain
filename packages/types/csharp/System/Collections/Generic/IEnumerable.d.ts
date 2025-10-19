declare global {
  namespace System.Collections.Generic {
    interface IEnumerable<T> extends System.Collections.IEnumerable {
      getEnumerator(): System.Collections.Generic.IEnumerator<T>;
    }
  }
}

export {};
