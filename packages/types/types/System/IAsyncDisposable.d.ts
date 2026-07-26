import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./Threading/Tasks/ValueTask";

declare const iAsyncDisposableInputBrand: unique symbol;
export interface IAsyncDisposableInput {
  readonly [iAsyncDisposableInputBrand]: true;
}

export interface IAsyncDisposable
  extends Microsoft.ClearScript.ClrInterfaceView<IAsyncDisposableInput>, IAsyncDisposableInput {
  disposeAsync(): System.Threading.Tasks.ValueTask;
}

declare global {
  namespace System {
    type IAsyncDisposableInput = import("./IAsyncDisposable").IAsyncDisposableInput;
  }
}

declare global {
  namespace System {
    type IAsyncDisposable = import("./IAsyncDisposable").IAsyncDisposable;
  }
}

export interface IAsyncDisposableHostType extends HostType<IAsyncDisposable, InterfaceTypeTrait> {}

export {};
