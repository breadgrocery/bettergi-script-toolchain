import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const covarFlagsBrand: unique symbol;
export interface CovarFlags extends ClrHostValue {
  readonly [covarFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CovarFlags = import("./CovarFlags").CovarFlags;
  }
}

export interface CovarFlagsHostType extends HostType<CovarFlags, EnumTypeTrait> {
  readonly scrambled: CovarFlags;
  readonly normal: CovarFlags;
  readonly useAvg: CovarFlags;
  readonly scale: CovarFlags;
  readonly rows: CovarFlags;
  readonly cols: CovarFlags;
}

export {};
