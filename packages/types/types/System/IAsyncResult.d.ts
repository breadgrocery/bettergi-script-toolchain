import type { HostType, InterfaceTypeTrait } from "../Microsoft/ClearScript/HostType";
import "./Threading/WaitHandle";

declare const iAsyncResultInputBrand: unique symbol;
export interface IAsyncResultInput {
  readonly [iAsyncResultInputBrand]: true;
}

export interface IAsyncResult
  extends Microsoft.ClearScript.ClrInterfaceView<IAsyncResultInput>, IAsyncResultInput {
  readonly asyncState: unknown;
  readonly asyncWaitHandle: System.Threading.WaitHandle;
  readonly completedSynchronously: boolean;
  readonly isCompleted: boolean;
}

declare global {
  namespace System {
    type IAsyncResultInput = import("./IAsyncResult").IAsyncResultInput;
  }
}

declare global {
  namespace System {
    type IAsyncResult = import("./IAsyncResult").IAsyncResult;
  }
}

export interface IAsyncResultHostType extends HostType<IAsyncResult, InterfaceTypeTrait> {}

export {};
