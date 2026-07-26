import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const compareOptionsBrand: unique symbol;
export interface CompareOptions extends ClrHostValue {
  readonly [compareOptionsBrand]: true;
}

declare global {
  namespace System.Globalization {
    type CompareOptions = import("./CompareOptions").CompareOptions;
  }
}

export interface CompareOptionsHostType extends HostType<CompareOptions, EnumTypeTrait> {
  readonly none: CompareOptions;
  readonly ignoreCase: CompareOptions;
  readonly ignoreNonSpace: CompareOptions;
  readonly ignoreSymbols: CompareOptions;
  readonly ignoreKanaType: CompareOptions;
  readonly ignoreWidth: CompareOptions;
  readonly ordinalIgnoreCase: CompareOptions;
  readonly stringSort: CompareOptions;
  readonly ordinal: CompareOptions;
}

export {};
