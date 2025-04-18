export interface IEnumerator<T> {
  moveNext(): boolean;

  current: T;

  reset(): void;
}
