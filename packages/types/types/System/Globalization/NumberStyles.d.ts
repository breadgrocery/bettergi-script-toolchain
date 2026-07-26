import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const numberStylesBrand: unique symbol;
export interface NumberStyles extends ClrHostValue {
  readonly [numberStylesBrand]: true;
}

declare global {
  namespace System.Globalization {
    type NumberStyles = import("./NumberStyles").NumberStyles;
  }
}

export interface NumberStylesHostType extends HostType<NumberStyles, EnumTypeTrait> {
  readonly none: NumberStyles;
  readonly allowLeadingWhite: NumberStyles;
  readonly allowTrailingWhite: NumberStyles;
  readonly allowLeadingSign: NumberStyles;
  readonly allowTrailingSign: NumberStyles;
  readonly allowParentheses: NumberStyles;
  readonly allowDecimalPoint: NumberStyles;
  readonly allowThousands: NumberStyles;
  readonly allowExponent: NumberStyles;
  readonly allowCurrencySymbol: NumberStyles;
  readonly allowHexSpecifier: NumberStyles;
  readonly allowBinarySpecifier: NumberStyles;
  readonly integer: NumberStyles;
  readonly hexNumber: NumberStyles;
  readonly binaryNumber: NumberStyles;
  readonly number: NumberStyles;
  readonly float: NumberStyles;
  readonly currency: NumberStyles;
  readonly any: NumberStyles;
}

export {};
