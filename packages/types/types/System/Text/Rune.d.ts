import type {
  CharHost,
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  UInt32Host,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import "../Globalization/CultureInfo";
import "../Globalization/UnicodeCategory";
import "../IComparable";
import "../IEquatable";
import "../IFormattable";
import "../ISpanFormattable";
import "../IUtf8SpanFormattable";
import "../ValueType";

declare const runeBrand: unique symbol;
export interface Rune
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IUtf8SpanFormattableInput {
  readonly [runeBrand]: true;
  compareTo(other: System.Text.Rune): number;
  equals(obj: unknown | null): boolean;
  equals(other: System.Text.Rune): boolean;
  getHashCode(): number;
  readonly isAscii: boolean;
  readonly isBmp: boolean;
  readonly plane: number;
  readonly utf16SequenceLength: number;
  readonly utf8SequenceLength: number;
  readonly value: number;
  toString(): string;
}

declare global {
  namespace System.Text {
    type Rune = import("./Rune").Rune;
  }
}

export interface RuneHostType extends HostType<Rune, ValueTypeTrait> {
  new (ch: number | StrongNumeric<CharHost>): Rune;
  new (
    highSurrogate: number | StrongNumeric<CharHost>,
    lowSurrogate: number | StrongNumeric<CharHost>
  ): Rune;
  new (value: number | StrongNumeric<Int32Host>): Rune;
  new (value: number | StrongNumeric<UInt32Host>): Rune;
  readonly replacementChar: System.Text.Rune;
  getRuneAt(input: string, index: number | StrongNumeric<Int32Host>): System.Text.Rune;
  isValid(value: number | StrongNumeric<Int32Host>): boolean;
  isValid(value: number | StrongNumeric<UInt32Host>): boolean;
  tryCreate(
    ch: number | StrongNumeric<CharHost>,
    result: HostVariableOut<System.Text.Rune>
  ): boolean;
  tryCreate(
    highSurrogate: number | StrongNumeric<CharHost>,
    lowSurrogate: number | StrongNumeric<CharHost>,
    result: HostVariableOut<System.Text.Rune>
  ): boolean;
  tryCreate(
    value: number | StrongNumeric<Int32Host>,
    result: HostVariableOut<System.Text.Rune>
  ): boolean;
  tryCreate(
    value: number | StrongNumeric<UInt32Host>,
    result: HostVariableOut<System.Text.Rune>
  ): boolean;
  tryGetRuneAt(
    input: string,
    index: number | StrongNumeric<Int32Host>,
    value: HostVariableOut<System.Text.Rune>
  ): boolean;
  getNumericValue(value: System.Text.Rune): number;
  getUnicodeCategory(value: System.Text.Rune): System.Globalization.UnicodeCategory;
  isControl(value: System.Text.Rune): boolean;
  isDigit(value: System.Text.Rune): boolean;
  isLetter(value: System.Text.Rune): boolean;
  isLetterOrDigit(value: System.Text.Rune): boolean;
  isLower(value: System.Text.Rune): boolean;
  isNumber(value: System.Text.Rune): boolean;
  isPunctuation(value: System.Text.Rune): boolean;
  isSeparator(value: System.Text.Rune): boolean;
  isSymbol(value: System.Text.Rune): boolean;
  isUpper(value: System.Text.Rune): boolean;
  isWhiteSpace(value: System.Text.Rune): boolean;
  toLower(value: System.Text.Rune, culture: System.Globalization.CultureInfo): System.Text.Rune;
  toLowerInvariant(value: System.Text.Rune): System.Text.Rune;
  toUpper(value: System.Text.Rune, culture: System.Globalization.CultureInfo): System.Text.Rune;
  toUpperInvariant(value: System.Text.Rune): System.Text.Rune;
}

export {};
