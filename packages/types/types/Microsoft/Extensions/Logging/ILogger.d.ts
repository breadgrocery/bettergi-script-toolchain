import "../../../System/Func";
import "../../../System/IDisposable";
import "../../../System/WebSocket";
import type { EnumInput, HostType, InterfaceTypeTrait } from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./EventId";
import "./LogLevel";

declare const iLoggerInputBrand: unique symbol;
export interface ILoggerInput {
  readonly [iLoggerInputBrand]: true;
}

export interface ILogger
  extends Microsoft.ClearScript.ClrInterfaceView<ILoggerInput>, ILoggerInput {
  beginScope<TState>(type1: HostType<TState>, state: TState): System.IDisposable;
  isEnabled(logLevel: EnumInput<Microsoft.Extensions.Logging.LogLevel>): boolean;
  log<TState>(
    type1: HostType<TState>,
    logLevel: EnumInput<Microsoft.Extensions.Logging.LogLevel>,
    eventId: Microsoft.Extensions.Logging.EventId,
    state: TState,
    exception: System.Exception | null,
    formatter: System.Func<TState, System.Exception, string>
  ): VoidResult;
}

declare global {
  namespace Microsoft.Extensions.Logging {
    type ILoggerInput = import("./ILogger").ILoggerInput;
  }
}

declare global {
  namespace Microsoft.Extensions.Logging {
    type ILogger = import("./ILogger").ILogger;
  }
}

export interface ILoggerHostType extends HostType<ILogger, InterfaceTypeTrait> {}

export {};
