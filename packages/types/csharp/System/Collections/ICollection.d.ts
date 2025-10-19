declare global {
  namespace System.Collections {
    interface ICollection extends IEnumerable {
      copyTo(array: Array<any>, index: number): void;

      count: number;

      syncRoot: any;

      isSynchronized: boolean;
    }
  }
}

export {};
