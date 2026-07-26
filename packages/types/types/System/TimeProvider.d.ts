import type {
  ClrHostValue,
  HostType,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./DateTimeOffset";
import "./Threading/ITimer";
import "./Threading/TimerCallback";
import "./TimeSpan";
import "./TimeZoneInfo";

declare const timeProviderBrand: unique symbol;
export interface TimeProvider extends ClrHostValue {
  readonly [timeProviderBrand]: true;
  createTimer(
    callback: System.Threading.TimerCallback,
    state: unknown | null,
    dueTime: System.TimeSpan,
    period: System.TimeSpan
  ): System.Threading.ITimer;
  getElapsedTime(startingTimestamp: number | StrongNumeric<Int64Host>): System.TimeSpan;
  getElapsedTime(
    startingTimestamp: number | StrongNumeric<Int64Host>,
    endingTimestamp: number | StrongNumeric<Int64Host>
  ): System.TimeSpan;
  getLocalNow(): System.DateTimeOffset;
  getTimestamp(): number;
  getUtcNow(): System.DateTimeOffset;
  readonly localTimeZone: System.TimeZoneInfo;
  readonly timestampFrequency: number;
}

declare global {
  namespace System {
    type TimeProvider = import("./TimeProvider").TimeProvider;
  }
}

export interface TimeProviderHostType extends HostType<TimeProvider, ReferenceTypeTrait> {
  readonly system: System.TimeProvider;
}

export {};
