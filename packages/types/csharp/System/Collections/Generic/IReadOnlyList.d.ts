declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyList<T> extends IReadOnlyCollection<T> {
      [index: number]: T;
    }
  }
}

export {};
