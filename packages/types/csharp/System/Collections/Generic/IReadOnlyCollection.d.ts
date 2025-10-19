declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyCollection<T> extends IEnumerable<T> {
      count: number;
    }
  }
}

export {};
