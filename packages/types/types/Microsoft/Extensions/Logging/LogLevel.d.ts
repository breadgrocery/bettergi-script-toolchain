import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const logLevelBrand: unique symbol;
export interface LogLevel extends ClrHostValue {
  readonly [logLevelBrand]: true;
}

declare global {
  namespace Microsoft.Extensions.Logging {
    type LogLevel = import("./LogLevel").LogLevel;
  }
}

export interface LogLevelHostType extends HostType<LogLevel, EnumTypeTrait> {
  readonly trace: LogLevel;
  readonly debug: LogLevel;
  readonly information: LogLevel;
  readonly warning: LogLevel;
  readonly error: LogLevel;
  readonly critical: LogLevel;
  readonly none: LogLevel;
}

export {};
