import "../IAsyncDisposable";
import "../IDisposable";
import "../IEquatable";

declare global {
  namespace System.Threading {
    class CancellationTokenRegistration
      implements
        System.IEquatable<CancellationTokenRegistration>,
        System.IDisposable,
        System.IAsyncDisposable
    {
      dispose(): void;

      disposeAsync(): System.Threading.Tasks.ValueTask;

      token: System.Threading.CancellationToken;

      unregister(): boolean;

      equals(other: CancellationTokenRegistration | null): boolean;

      equals(other: System.Threading.CancellationTokenRegistration | null): boolean;
    }
  }
}

export {};
