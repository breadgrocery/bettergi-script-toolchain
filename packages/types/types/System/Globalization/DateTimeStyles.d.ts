import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const dateTimeStylesBrand: unique symbol;
export interface DateTimeStyles extends ClrHostValue {
  readonly [dateTimeStylesBrand]: true;
}

declare global {
  namespace System.Globalization {
    type DateTimeStyles = import("./DateTimeStyles").DateTimeStyles;
  }
}

export interface DateTimeStylesHostType extends HostType<DateTimeStyles, EnumTypeTrait> {
  readonly none: DateTimeStyles;
  readonly allowLeadingWhite: DateTimeStyles;
  readonly allowTrailingWhite: DateTimeStyles;
  readonly allowInnerWhite: DateTimeStyles;
  readonly allowWhiteSpaces: DateTimeStyles;
  readonly noCurrentDateDefault: DateTimeStyles;
  readonly adjustToUniversal: DateTimeStyles;
  readonly assumeLocal: DateTimeStyles;
  readonly assumeUniversal: DateTimeStyles;
  readonly roundtripKind: DateTimeStyles;
}

export {};
