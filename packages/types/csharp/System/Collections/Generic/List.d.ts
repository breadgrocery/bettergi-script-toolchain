import "./IEnumerable";
import "./IEnumerator";
import "./IList";
import "./IReadOnlyList";

declare global {
  namespace System.Collections.Generic {
    class List<T>
      implements System.Collections.Generic.IList<T>, System.Collections.Generic.IReadOnlyList<T>
    {
      capacity: number;

      count: number;

      isReadOnly: boolean;

      isFixedSize: boolean;

      [index: number]: T;

      add(item: T): void;

      addRange(collection: System.Collections.Generic.IEnumerable<T>): void;

      asReadOnly(): System.Collections.Generic.IReadOnlyList<T>;

      /** @deprecated Not yet supported  */
      binarySearch(item: T): number;
      // overload
      binarySearch(item: T, comparer: ((a: T, b: T) => number) | null): number;

      /** @deprecated Not yet supported  */
      binarySearch(index: number, count: number, item: T): number;
      // overload
      binarySearch(
        index: number,
        count: number,
        item: T,
        comparer: ((a: T, b: T) => number) | null
      ): number;

      clear(): void;

      contains(item: T): boolean;

      /** @deprecated Not yet supported  */
      convertAll<TOutput>(
        converter: (item: T) => TOutput
      ): System.Collections.Generic.List<TOutput>;

      copyTo(array: T[]): void;

      copyTo(array: T[], arrayIndex: number): void;

      copyTo(index: number, array: T[], arrayIndex: number, count: number): void;

      ensureCapacity(capacity: number): number;

      /** @deprecated Not yet supported  */
      exists(match: (item: T) => boolean): boolean;

      /** @deprecated Not yet supported  */
      find(match: (item: T) => boolean): T | null;

      /** @deprecated Not yet supported  */
      findAll(match: (item: T) => boolean): System.Collections.Generic.List<T>;

      /** @deprecated Not yet supported  */
      findIndex(match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      findIndex(startIndex: number, match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      findIndex(startIndex: number, count: number, match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      findLast(match: (item: T) => boolean): T | null;

      /** @deprecated Not yet supported  */
      findLastIndex(match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      findLastIndex(startIndex: number, match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      findLastIndex(startIndex: number, count: number, match: (item: T) => boolean): number;

      /** @deprecated Not yet supported  */
      forEach(action: (item: T) => void): void;

      getEnumerator(): System.Collections.Generic.IEnumerator<T>;

      getRange(index: number, count: number): System.Collections.Generic.List<T>;

      indexOf(item: T): number;

      indexOf(item: T, index: number): number;

      indexOf(item: T, index: number, count: number): number;

      insert(index: number, item: T): void;

      insertRange(index: number, collection: System.Collections.Generic.IEnumerable<T>): void;

      lastIndexOf(item: T): number;

      lastIndexOf(item: T, index: number): number;

      lastIndexOf(item: T, index: number, count: number): number;

      remove(item: T): boolean;

      /** @deprecated Not yet supported  */
      removeAll(match: (item: T) => boolean): number;

      removeAt(index: number): void;

      removeRange(index: number, count: number): void;

      reverse(): void;

      reverse(index: number, count: number): void;

      slice(start: number, length: number): System.Collections.Generic.List<T>;

      sort(): void;

      /** @deprecated Not yet supported  */
      sort(comparer: (a: T, b: T) => number): void;

      /** @deprecated Not yet supported  */
      sort(index: number, count: number, comparer: (a: T, b: T) => number): void;

      /** @deprecated Not yet supported  */
      sort(comparison: (a: T, b: T) => number): void;

      toArray(): T[];

      trimExcess(): void;

      /** @deprecated Not yet supported  */
      trueForAll(match: (item: T) => boolean): boolean;

      constructor();

      constructor(capacity: number);

      constructor(collection: System.Collections.Generic.IEnumerable<T>);
    }
  }
}

export {};
