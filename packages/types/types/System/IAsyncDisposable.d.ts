import "./Threading/Tasks/ValueTask";

declare global {
  namespace System {
    interface IAsyncDisposable {
      disposeAsync(): System.Threading.Tasks.ValueTask;
    }
  }
}

export {};
