import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import "./Globalization/CultureInfo";
import "./Globalization/UnicodeCategory";
import "./IComparable";
import "./IConvertible";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./IUtf8SpanParsable";
import "./Numerics/IAdditionOperators";
import "./Numerics/IAdditiveIdentity";
import "./Numerics/IBinaryInteger";
import "./Numerics/IBinaryNumber";
import "./Numerics/IBitwiseOperators";
import "./Numerics/IComparisonOperators";
import "./Numerics/IDecrementOperators";
import "./Numerics/IDivisionOperators";
import "./Numerics/IEqualityOperators";
import "./Numerics/IIncrementOperators";
import "./Numerics/IMinMaxValue";
import "./Numerics/IModulusOperators";
import "./Numerics/IMultiplicativeIdentity";
import "./Numerics/IMultiplyOperators";
import "./Numerics/INumber";
import "./Numerics/INumberBase";
import "./Numerics/IShiftOperators";
import "./Numerics/ISubtractionOperators";
import "./Numerics/IUnaryNegationOperators";
import "./Numerics/IUnaryPlusOperators";
import "./Numerics/IUnsignedNumber";
import "./TypeCode";
import "./ValueType";

declare const charBrand: unique symbol;
export interface Char
  extends
    ClrHostValue,
    System.IComparableInput,
    System.IComparableInput<number>,
    System.IEquatableInput<number>,
    System.IConvertibleInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.Numerics.IBinaryIntegerInput<number>,
    System.Numerics.IBinaryNumberInput<number>,
    System.Numerics.IBitwiseOperatorsInput<number, number, number>,
    System.Numerics.INumberInput<number>,
    System.Numerics.IComparisonOperatorsInput<number, number, boolean>,
    System.Numerics.IEqualityOperatorsInput<number, number, boolean>,
    System.Numerics.IModulusOperatorsInput<number, number, number>,
    System.Numerics.INumberBaseInput<number>,
    System.Numerics.IAdditionOperatorsInput<number, number, number>,
    System.Numerics.IAdditiveIdentityInput<number, number>,
    System.Numerics.IDecrementOperatorsInput<number>,
    System.Numerics.IDivisionOperatorsInput<number, number, number>,
    System.Numerics.IIncrementOperatorsInput<number>,
    System.Numerics.IMultiplicativeIdentityInput<number, number>,
    System.Numerics.IMultiplyOperatorsInput<number, number, number>,
    System.ISpanParsableInput<number>,
    System.IParsableInput<number>,
    System.Numerics.ISubtractionOperatorsInput<number, number, number>,
    System.Numerics.IUnaryPlusOperatorsInput<number, number>,
    System.Numerics.IUnaryNegationOperatorsInput<number, number>,
    System.IUtf8SpanFormattableInput,
    System.IUtf8SpanParsableInput<number>,
    System.Numerics.IShiftOperatorsInput<number, number, number>,
    System.Numerics.IMinMaxValueInput<number>,
    System.Numerics.IUnsignedNumberInput<number> {
  readonly [charBrand]: true;
  compareTo(value: number | StrongNumeric<CharHost>): number;
  compareTo(value: unknown | null): number;
  equals(obj: number | StrongNumeric<CharHost>): boolean;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  toString(): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type Char = import("./Char").Char;
  }
}

export interface CharHostType extends HostType<Char, ValueTypeTrait> {
  readonly maxValue: number;
  readonly minValue: number;
  isAscii(c: number | StrongNumeric<CharHost>): boolean;
  toString(c: number | StrongNumeric<CharHost>): string;
  parse(s: string): number;
  tryParse(s: string | null, result: HostVariableOut<number>): boolean;
  isAsciiLetter(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiLetterLower(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiLetterUpper(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiDigit(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiLetterOrDigit(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiHexDigit(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiHexDigitUpper(c: number | StrongNumeric<CharHost>): boolean;
  isAsciiHexDigitLower(c: number | StrongNumeric<CharHost>): boolean;
  isDigit(c: number | StrongNumeric<CharHost>): boolean;
  isBetween(
    c: number | StrongNumeric<CharHost>,
    minInclusive: number | StrongNumeric<CharHost>,
    maxInclusive: number | StrongNumeric<CharHost>
  ): boolean;
  isLetter(c: number | StrongNumeric<CharHost>): boolean;
  isWhiteSpace(c: number | StrongNumeric<CharHost>): boolean;
  isUpper(c: number | StrongNumeric<CharHost>): boolean;
  isLower(c: number | StrongNumeric<CharHost>): boolean;
  isPunctuation(c: number | StrongNumeric<CharHost>): boolean;
  isLetterOrDigit(c: number | StrongNumeric<CharHost>): boolean;
  toUpper(c: number | StrongNumeric<CharHost>, culture: System.Globalization.CultureInfo): number;
  toUpper(c: number | StrongNumeric<CharHost>): number;
  toUpperInvariant(c: number | StrongNumeric<CharHost>): number;
  toLower(c: number | StrongNumeric<CharHost>, culture: System.Globalization.CultureInfo): number;
  toLower(c: number | StrongNumeric<CharHost>): number;
  toLowerInvariant(c: number | StrongNumeric<CharHost>): number;
  isControl(c: number | StrongNumeric<CharHost>): boolean;
  isControl(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isDigit(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isLetter(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isLetterOrDigit(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isLower(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isNumber(c: number | StrongNumeric<CharHost>): boolean;
  isNumber(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isPunctuation(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isSeparator(c: number | StrongNumeric<CharHost>): boolean;
  isSeparator(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isSurrogate(c: number | StrongNumeric<CharHost>): boolean;
  isSurrogate(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isSymbol(c: number | StrongNumeric<CharHost>): boolean;
  isSymbol(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isUpper(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isWhiteSpace(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  getUnicodeCategory(c: number | StrongNumeric<CharHost>): System.Globalization.UnicodeCategory;
  getUnicodeCategory(
    s: string,
    index: number | StrongNumeric<Int32Host>
  ): System.Globalization.UnicodeCategory;
  getNumericValue(c: number | StrongNumeric<CharHost>): number;
  getNumericValue(s: string, index: number | StrongNumeric<Int32Host>): number;
  isHighSurrogate(c: number | StrongNumeric<CharHost>): boolean;
  isHighSurrogate(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isLowSurrogate(c: number | StrongNumeric<CharHost>): boolean;
  isLowSurrogate(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isSurrogatePair(s: string, index: number | StrongNumeric<Int32Host>): boolean;
  isSurrogatePair(
    highSurrogate: number | StrongNumeric<CharHost>,
    lowSurrogate: number | StrongNumeric<CharHost>
  ): boolean;
  convertFromUtf32(utf32: number | StrongNumeric<Int32Host>): string;
  convertToUtf32(
    highSurrogate: number | StrongNumeric<CharHost>,
    lowSurrogate: number | StrongNumeric<CharHost>
  ): number;
  convertToUtf32(s: string, index: number | StrongNumeric<Int32Host>): number;
}

export {};
