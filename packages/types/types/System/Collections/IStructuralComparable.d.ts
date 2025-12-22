import "./IEqualityComparer";

declare global {
  namespace System.Collections {
    interface IStructuralComparable {
      compareTo(other: any, comparer: System.Collections.IEqualityComparer): number;
    }
  }
}

export {};
