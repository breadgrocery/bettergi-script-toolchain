import "./IEnumerable";

declare global {
  namespace System.Collections.Generic {
    interface ICollection<T> extends System.Collections.Generic.IEnumerable<T> {
      count: number;

      isReadOnly: boolean;

      add(item: T): void;

      clear(): void;

      contains(item: T): boolean;

      copyTo(array: T[], arrayIndex: number): void;

      remove(item: T): boolean;
    }
  }
}

export {};
