import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const logLevelBrand: unique symbol;
export interface LogLevel extends ClrHostValue {
  readonly [logLevelBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type LogLevel = import("./LogLevel").LogLevel;
  }
}

export interface LogLevelHostType extends HostType<LogLevel, EnumTypeTrait> {
  readonly silent: LogLevel;
  readonly fatal: LogLevel;
  readonly error: LogLevel;
  readonly warning: LogLevel;
  readonly info: LogLevel;
  readonly debug: LogLevel;
  readonly verbose: LogLevel;
}

export {};
