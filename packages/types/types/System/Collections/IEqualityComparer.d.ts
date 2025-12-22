declare global {
  namespace System.Collections {
    interface IEqualityComparer {
      equals(x: any, y: any): boolean;

      getHashCode(obj: any): number;
    }
  }
}

export {};
