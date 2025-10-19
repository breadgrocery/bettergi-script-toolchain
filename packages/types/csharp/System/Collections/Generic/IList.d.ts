declare global {
  namespace System.Collections.Generic {
    interface IList<T> extends ICollection<T>, IEnumerable<T> {
      isFixedSize: boolean;

      [index: number]: T;

      indexOf(item: T): number;

      insert(index: number, item: T): void;

      removeAt(index: number): void;
    }
  }
}

export {};
