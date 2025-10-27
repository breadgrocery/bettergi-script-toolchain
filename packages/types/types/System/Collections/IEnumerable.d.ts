declare global {
  namespace System.Collections {
    interface IEnumerable {
      getEnumerator(): IEnumerator;
    }
  }
}

export {};
