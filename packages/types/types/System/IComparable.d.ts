declare global {
  namespace System {
    interface IComparable {
      compareTo(other: any): number;
    }
  }
}

export {};
