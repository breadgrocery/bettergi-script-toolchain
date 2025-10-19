import "./IEnumerable";

declare global {
  namespace System.Collections {
    interface ICollection extends System.Collections.IEnumerable {
      copyTo(array: Array<any>, index: number): void;

      count: number;

      syncRoot: any;

      isSynchronized: boolean;
    }
  }
}

export {};
