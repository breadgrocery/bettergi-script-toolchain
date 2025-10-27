declare global {
  namespace System {
    interface IEquatable<T> {
      equals(other: T | null): boolean;
    }
  }
}
export {};
