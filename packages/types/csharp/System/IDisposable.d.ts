declare global {
  namespace System {
    interface IDisposable {
      dispose(): void;
    }
  }
}

export {};
