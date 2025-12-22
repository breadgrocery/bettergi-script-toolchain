import "./IEqualityComparer";

declare global {
  namespace System.Collections {
    interface IStructuralEquatable {
      equals(other: any, comparer: System.Collections.IEqualityComparer): boolean;

      getHashCode(comparer: System.Collections.IEqualityComparer): number;
    }
  }
}

export {};
