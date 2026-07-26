import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const timeSpanStylesBrand: unique symbol;
export interface TimeSpanStyles extends ClrHostValue {
  readonly [timeSpanStylesBrand]: true;
}

declare global {
  namespace System.Globalization {
    type TimeSpanStyles = import("./TimeSpanStyles").TimeSpanStyles;
  }
}

export interface TimeSpanStylesHostType extends HostType<TimeSpanStyles, EnumTypeTrait> {
  readonly none: TimeSpanStyles;
  readonly assumeNegative: TimeSpanStyles;
}

export {};
