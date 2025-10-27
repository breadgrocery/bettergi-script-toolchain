import "./ICollection";
import "./IEnumerable";

declare global {
  namespace System.Collections.Generic {
    interface IList<T>
      extends System.Collections.Generic.ICollection<T>,
        System.Collections.Generic.IEnumerable<T> {
      isFixedSize: boolean;

      [index: number]: T;

      indexOf(item: T): number;

      insert(index: number, item: T): void;

      removeAt(index: number): void;
    }
  }
}

export {};
