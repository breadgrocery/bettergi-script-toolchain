import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const ortLoggingLevelBrand: unique symbol;
export interface OrtLoggingLevel extends ClrHostValue {
  readonly [ortLoggingLevelBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtLoggingLevel = import("./OrtLoggingLevel").OrtLoggingLevel;
  }
}

export interface OrtLoggingLevelHostType extends HostType<OrtLoggingLevel, EnumTypeTrait> {
  readonly orT_LOGGING_LEVEL_VERBOSE: OrtLoggingLevel;
  readonly orT_LOGGING_LEVEL_INFO: OrtLoggingLevel;
  readonly orT_LOGGING_LEVEL_WARNING: OrtLoggingLevel;
  readonly orT_LOGGING_LEVEL_ERROR: OrtLoggingLevel;
  readonly orT_LOGGING_LEVEL_FATAL: OrtLoggingLevel;
}

export {};
