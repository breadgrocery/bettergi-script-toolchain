declare global {
  namespace System.Collections {
    interface IEnumerator {
      moveNext(): boolean;

      current: any;

      reset(): void;
    }
  }
}

export {};
