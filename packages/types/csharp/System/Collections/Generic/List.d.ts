declare global {
  namespace System.Collections.Generic {
    class List<T> implements IList<T>, IReadOnlyList<T> {
      capacity: number;

      count: number;

      isReadOnly: boolean;

      isFixedSize: boolean;

      [index: number]: T;

      add(item: T): void;

      addRange(collection: IEnumerable<T>): void;

      asReadOnly(): IReadOnlyList<T>;

      /** @deprecated Not yet supported  */
      binarySearch(item: T, comparer?: (a: T, b: T) => number): number;

      /** @deprecated Not yet supported  */
      binarySearch(
        index: number,
        count: number,
        item: T,
        comparer?: (a: T, b: T) => number
      ): number;

      clear(): void;

      contains(item: T): boolean;

      /** @deprecated Not yet supported  */
      convertAll<TOutput>(converter: (item: T) => TOutput): List<TOutput>;

      copyTo(array: T[]): void;

      copyTo(array: T[], arrayIndex: number): void;

      copyTo(index: number, array: T[], arrayIndex: number, count: number): void;

      ensureCapacity(capacity: number): number;

      /** @deprecated Not yet supported  */
      exists(match: (item: T) => boolean): boolean;

      /** @deprecated Not yet supported  */
      find(match: (item: T) => boolean): T | null;

      /** @deprecated Not yet supported  */
      findAll(match: (item: T) => boolean): List<T>;

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

      getEnumerator(): IEnumerator<T>;

      getRange(index: number, count: number): List<T>;

      indexOf(item: T): number;

      indexOf(item: T, index: number): number;

      indexOf(item: T, index: number, count: number): number;

      insert(index: number, item: T): void;

      insertRange(index: number, collection: IEnumerable<T>): void;

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

      slice(start: number, length: number): List<T>;

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

      constructor(collection: IEnumerable<T>);
    }
  }
}

export {};
