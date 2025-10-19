import "../IAsyncDisposable";
import "../IDisposable";
import "../TimeSpan";

declare global {
  namespace System.Threading {
    interface ITimer extends System.IDisposable, System.IAsyncDisposable {
      change(dueTime: System.TimeSpan, period: System.TimeSpan): boolean;
    }
  }
}
export {};
