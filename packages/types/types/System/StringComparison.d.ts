import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const stringComparisonBrand: unique symbol;
export interface StringComparison extends ClrHostValue {
  readonly [stringComparisonBrand]: true;
}

declare global {
  namespace System {
    type StringComparison = import("./StringComparison").StringComparison;
  }
}

export interface StringComparisonHostType extends HostType<StringComparison, EnumTypeTrait> {
  readonly currentCulture: StringComparison;
  readonly currentCultureIgnoreCase: StringComparison;
  readonly invariantCulture: StringComparison;
  readonly invariantCultureIgnoreCase: StringComparison;
  readonly ordinal: StringComparison;
  readonly ordinalIgnoreCase: StringComparison;
}

export {};
