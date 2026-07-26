import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";

declare const delegateTimerCallbackBrand: unique symbol;
export interface TimerCallback extends HostDelegate {
  readonly [delegateTimerCallbackBrand]: true;
  (state: unknown | null): VoidResult;
  invoke(state: unknown | null): VoidResult;
}

declare global {
  namespace System.Threading {
    type TimerCallback = import("./TimerCallback").TimerCallback;
  }
}

export interface TimerCallbackHostType extends HostType<TimerCallback, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): TimerCallback;
}

export {};
