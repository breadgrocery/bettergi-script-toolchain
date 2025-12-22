import "../IEquatable";
import "./CancellationTokenRegistration";
import "./WaitHandle";

declare global {
  namespace System.Threading {
    class CancellationToken implements System.IEquatable<CancellationToken> {
      isCancellationRequested: boolean;

      canBeCanceled: boolean;

      waitHandle: System.Threading.WaitHandle;

      register(callback: () => void): System.Threading.CancellationTokenRegistration;

      register(
        callback: () => void,
        useSynchronizationContext: boolean
      ): System.Threading.CancellationTokenRegistration;

      register(
        callback: (obj: any) => void,
        state: any
      ): System.Threading.CancellationTokenRegistration;

      register(
        callback: (obj: any) => System.Threading.CancellationToken,
        state: any
      ): System.Threading.CancellationTokenRegistration;

      register(
        callback: (obj: any) => void,
        state: any,
        useSynchronizationContext: boolean
      ): System.Threading.CancellationTokenRegistration;

      unsafeRegister(
        callback: (obj: any) => void,
        state: any
      ): System.Threading.CancellationTokenRegistration;

      unsafeRegister(
        callback: (obj: any) => System.Threading.CancellationToken,
        state: any
      ): System.Threading.CancellationTokenRegistration;

      equals(other: CancellationToken | null): boolean;

      throwIfCancellationRequested(): void;

      static readonly none: System.Threading.CancellationToken;

      constructor(canceled: boolean);
    }
  }
  export import CancellationToken = System.Threading.CancellationToken;
}

export {};
