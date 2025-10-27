import "./IEnumerable";

declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyCollection<T> extends System.Collections.Generic.IEnumerable<T> {
      count: number;
    }
  }
}

export {};
