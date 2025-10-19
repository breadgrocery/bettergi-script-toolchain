import "../IDisposable";
import "../TimeProvider";
import "../TimeSpan";
import "./CancellationToken";

declare global {
  namespace System.Threading {
    class CancellationTokenSource implements System.IDisposable {
      isCancellationRequested: boolean;

      token: System.Threading.CancellationToken;

      cancel(): void;

      cancel(throwOnFirstException: boolean): void;

      cancelAsync(): Promise<void>;

      cancelAfter(delay: System.TimeSpan): void;

      cancelAfter(millisecondsDelay: number): void;

      tryReset(): boolean;

      dispose(): void;

      static createLinkedTokenSource(
        token1: System.Threading.CancellationToken,
        token2: System.Threading.CancellationToken
      ): System.Threading.CancellationTokenSource;

      static createLinkedTokenSource(
        token: System.Threading.CancellationToken
      ): System.Threading.CancellationTokenSource;

      static createLinkedTokenSource(
        tokens: System.Threading.CancellationToken[]
      ): System.Threading.CancellationTokenSource;

      constructor();

      constructor(delay: System.TimeSpan);

      constructor(delay: System.TimeSpan, timeProvider: System.TimeProvider);

      constructor(millisecondsDelay: number);
    }
  }
  export import CancellationTokenSource = System.Threading.CancellationTokenSource;
}
export {};
