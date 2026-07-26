import type { ClrHostValue } from "./HostType";
import type { VoidResult } from "./VoidResult";

declare const eventSourceBrand: unique symbol;
declare const eventConnectionBrand: unique symbol;

export interface EventConnection extends ClrHostValue {
  readonly [eventConnectionBrand]: true;
  disconnect(): VoidResult;
}

export interface EventSource<
  TCallback extends (...args: never) => unknown = (...args: never) => unknown
> extends ClrHostValue {
  readonly [eventSourceBrand]: TCallback;
  connect(callback: TCallback): EventConnection;
}

declare global {
  namespace Microsoft.ClearScript {
    type EventSource<TCallback extends (...args: never) => unknown> =
      import("./HostEvent").EventSource<TCallback>;
    type EventConnection = import("./HostEvent").EventConnection;
  }
}

export {};
