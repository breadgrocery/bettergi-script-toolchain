declare global {
  namespace System.Runtime.CompilerServices {
    interface ITuple {
      length: number;

      [index: number]: any;
    }
  }
}

export {};
