import "../Collections/IEnumerable";
import "./ICollection";

declare global {
  namespace System.Collections {
    interface IList extends System.Collections.ICollection, System.Collections.IEnumerable {
      [index: number]: any;

      add(item: any): number;

      contains(item: any): boolean;

      clear(): void;

      isReadOnly: boolean;

      isFixedSize: boolean;

      indexOf(item: any): number;

      insert(index: number, item: any): void;

      remove(item: any): void;

      removeAt(index: number): void;
    }
  }
}

export {};
