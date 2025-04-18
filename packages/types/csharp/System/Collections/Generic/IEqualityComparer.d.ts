export interface IEqualityComparer<T> {
  equals(x: T | null, y: T | null): boolean;

  getHashCode(obj: T): number;
}
