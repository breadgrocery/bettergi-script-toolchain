import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const stringTrimmingBrand: unique symbol;
export interface StringTrimming extends ClrHostValue {
  readonly [stringTrimmingBrand]: true;
}

declare global {
  namespace System.Drawing {
    type StringTrimming = import("./StringTrimming").StringTrimming;
  }
}

export interface StringTrimmingHostType extends HostType<StringTrimming, EnumTypeTrait> {
  readonly none: StringTrimming;
  readonly character: StringTrimming;
  readonly word: StringTrimming;
  readonly ellipsisCharacter: StringTrimming;
  readonly ellipsisWord: StringTrimming;
  readonly ellipsisPath: StringTrimming;
}

export {};
