import "../../Collections/IEnumerator";
import "../../IDisposable";

declare global {
  namespace System.Collections.Generic {
    interface IEnumerator<T> extends System.IDisposable, System.Collections.IEnumerator {
      current: T;
    }
  }
}

export {};
