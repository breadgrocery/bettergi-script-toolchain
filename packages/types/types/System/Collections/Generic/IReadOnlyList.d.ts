import "./IReadOnlyCollection";

declare global {
  namespace System.Collections.Generic {
    interface IReadOnlyList<T> extends System.Collections.Generic.IReadOnlyCollection<T> {
      [index: number]: T;
    }
  }
}

export {};
