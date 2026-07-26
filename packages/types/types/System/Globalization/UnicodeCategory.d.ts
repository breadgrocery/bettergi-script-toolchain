import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const unicodeCategoryBrand: unique symbol;
export interface UnicodeCategory extends ClrHostValue {
  readonly [unicodeCategoryBrand]: true;
}

declare global {
  namespace System.Globalization {
    type UnicodeCategory = import("./UnicodeCategory").UnicodeCategory;
  }
}

export interface UnicodeCategoryHostType extends HostType<UnicodeCategory, EnumTypeTrait> {
  readonly uppercaseLetter: UnicodeCategory;
  readonly lowercaseLetter: UnicodeCategory;
  readonly titlecaseLetter: UnicodeCategory;
  readonly modifierLetter: UnicodeCategory;
  readonly otherLetter: UnicodeCategory;
  readonly nonSpacingMark: UnicodeCategory;
  readonly spacingCombiningMark: UnicodeCategory;
  readonly enclosingMark: UnicodeCategory;
  readonly decimalDigitNumber: UnicodeCategory;
  readonly letterNumber: UnicodeCategory;
  readonly otherNumber: UnicodeCategory;
  readonly spaceSeparator: UnicodeCategory;
  readonly lineSeparator: UnicodeCategory;
  readonly paragraphSeparator: UnicodeCategory;
  readonly control: UnicodeCategory;
  readonly format: UnicodeCategory;
  readonly surrogate: UnicodeCategory;
  readonly privateUse: UnicodeCategory;
  readonly connectorPunctuation: UnicodeCategory;
  readonly dashPunctuation: UnicodeCategory;
  readonly openPunctuation: UnicodeCategory;
  readonly closePunctuation: UnicodeCategory;
  readonly initialQuotePunctuation: UnicodeCategory;
  readonly finalQuotePunctuation: UnicodeCategory;
  readonly otherPunctuation: UnicodeCategory;
  readonly mathSymbol: UnicodeCategory;
  readonly currencySymbol: UnicodeCategory;
  readonly modifierSymbol: UnicodeCategory;
  readonly otherSymbol: UnicodeCategory;
  readonly otherNotAssigned: UnicodeCategory;
}

export {};
