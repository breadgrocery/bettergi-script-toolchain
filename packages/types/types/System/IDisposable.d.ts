import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";

declare const iDisposableInputBrand: unique symbol;
export interface IDisposableInput {
  readonly [iDisposableInputBrand]: true;
}

export interface IDisposable
  extends Microsoft.ClearScript.ClrInterfaceView<IDisposableInput>, IDisposableInput {
  dispose(): VoidResult;
}

declare global {
  namespace System {
    type IDisposableInput = import("./IDisposable").IDisposableInput;
  }
}

declare global {
  namespace System {
    type IDisposable = import("./IDisposable").IDisposable;
  }
}

export interface IDisposableHostType extends HostType<IDisposable, InterfaceTypeTrait> {}

export {};
