import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const stringDigitSubstituteBrand: unique symbol;
export interface StringDigitSubstitute extends ClrHostValue {
  readonly [stringDigitSubstituteBrand]: true;
}

declare global {
  namespace System.Drawing {
    type StringDigitSubstitute = import("./StringDigitSubstitute").StringDigitSubstitute;
  }
}

export interface StringDigitSubstituteHostType extends HostType<
  StringDigitSubstitute,
  EnumTypeTrait
> {
  readonly user: StringDigitSubstitute;
  readonly none: StringDigitSubstitute;
  readonly national: StringDigitSubstitute;
  readonly traditional: StringDigitSubstitute;
}

export {};
