declare global {
  namespace System.Collections.Generic {
    interface IEqualityComparer<T> {
      equals(x: T | null, y: T | null): boolean;

      getHashCode(obj: T): number;
    }
  }
}

export {};
