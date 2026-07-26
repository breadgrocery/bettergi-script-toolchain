import type { HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../IAsyncDisposable";
import "../IDisposable";
import "../TimeSpan";

declare const iTimerInputBrand: unique symbol;
export interface ITimerInput {
  readonly [iTimerInputBrand]: true;
}

export interface ITimer extends Microsoft.ClearScript.ClrInterfaceView<ITimerInput>, ITimerInput {
  change(dueTime: System.TimeSpan, period: System.TimeSpan): boolean;
}

declare global {
  namespace System.Threading {
    type ITimerInput = import("./ITimer").ITimerInput;
  }
}

declare global {
  namespace System.Threading {
    type ITimer = import("./ITimer").ITimer;
  }
}

export interface ITimerHostType extends HostType<ITimer, InterfaceTypeTrait> {}

export {};
