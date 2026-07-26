import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const stringFormatFlagsBrand: unique symbol;
export interface StringFormatFlags extends ClrHostValue {
  readonly [stringFormatFlagsBrand]: true;
}

declare global {
  namespace System.Drawing {
    type StringFormatFlags = import("./StringFormatFlags").StringFormatFlags;
  }
}

export interface StringFormatFlagsHostType extends HostType<StringFormatFlags, EnumTypeTrait> {
  readonly directionRightToLeft: StringFormatFlags;
  readonly directionVertical: StringFormatFlags;
  readonly fitBlackBox: StringFormatFlags;
  readonly displayFormatControl: StringFormatFlags;
  readonly noFontFallback: StringFormatFlags;
  readonly measureTrailingSpaces: StringFormatFlags;
  readonly noWrap: StringFormatFlags;
  readonly lineLimit: StringFormatFlags;
  readonly noClip: StringFormatFlags;
}

export {};
