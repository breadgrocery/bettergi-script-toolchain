import type {
  CharHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Buffers/SpanAction";
import "./CharEnumerator";
import "./Collections/Generic/IEnumerable";
import "./Collections/IEnumerable";
import "./Globalization/CompareOptions";
import "./Globalization/CultureInfo";
import "./ICloneable";
import "./IComparable";
import "./IConvertible";
import "./IEquatable";
import "./IFormatProvider";
import "./IParsable";
import "./ISpanParsable";
import "./StringComparison";
import "./StringSplitOptions";
import "./Text/CompositeFormat";
import "./Text/Encoding";
import "./Text/NormalizationForm";
import "./Text/StringRuneEnumerator";
import "./TypeCode";

declare const stringBrand: unique symbol;
export interface String
  extends
    ClrHostValue,
    System.IComparableInput,
    System.Collections.IEnumerableInput,
    System.IConvertibleInput,
    System.Collections.Generic.IEnumerableInput<number>,
    System.IComparableInput<string>,
    System.IEquatableInput<string>,
    System.ICloneableInput,
    System.ISpanParsableInput<string>,
    System.IParsableInput<string> {
  readonly [stringBrand]: true;
  clone(): unknown;
  compareTo(strB: string | null): number;
  compareTo(value: unknown | null): number;
  contains(value: number | StrongNumeric<CharHost>): boolean;
  contains(
    value: number | StrongNumeric<CharHost>,
    comparisonType: EnumInput<System.StringComparison>
  ): boolean;
  contains(value: string): boolean;
  contains(value: string, comparisonType: EnumInput<System.StringComparison>): boolean;
  copyTo(
    sourceIndex: number | StrongNumeric<Int32Host>,
    destination: HostArray<number | StrongNumeric<CharHost>>,
    destinationIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  endsWith(value: number | StrongNumeric<CharHost>): boolean;
  endsWith(value: string): boolean;
  endsWith(value: string, comparisonType: EnumInput<System.StringComparison>): boolean;
  endsWith(
    value: string,
    ignoreCase: boolean,
    culture: System.Globalization.CultureInfo | null
  ): boolean;
  enumerateRunes(): System.Text.StringRuneEnumerator;
  equals(obj: unknown | null): boolean;
  equals(value: string | null): boolean;
  equals(value: string | null, comparisonType: EnumInput<System.StringComparison>): boolean;
  getEnumerator(): System.CharEnumerator;
  getHashCode(): number;
  getHashCode(comparisonType: EnumInput<System.StringComparison>): number;
  getTypeCode(): System.TypeCode;
  indexOf(value: number | StrongNumeric<CharHost>): number;
  indexOf(
    value: number | StrongNumeric<CharHost>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  indexOf(
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(value: string): number;
  indexOf(value: string, comparisonType: EnumInput<System.StringComparison>): number;
  indexOf(value: string, startIndex: number | StrongNumeric<Int32Host>): number;
  indexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  indexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  indexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  indexOfAny(anyOf: HostArray<number | StrongNumeric<CharHost>>): number;
  indexOfAny(
    anyOf: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  indexOfAny(
    anyOf: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  insert(startIndex: number | StrongNumeric<Int32Host>, value: string): string;
  isNormalized(): boolean;
  isNormalized(normalizationForm: EnumInput<System.Text.NormalizationForm>): boolean;
  item: {
    (index: number | StrongNumeric<Int32Host>): number;
    get(index: number | StrongNumeric<Int32Host>): number;
  };
  lastIndexOf(value: number | StrongNumeric<CharHost>): number;
  lastIndexOf(
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    value: number | StrongNumeric<CharHost>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(value: string): number;
  lastIndexOf(value: string, comparisonType: EnumInput<System.StringComparison>): number;
  lastIndexOf(value: string, startIndex: number | StrongNumeric<Int32Host>): number;
  lastIndexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  lastIndexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOf(
    value: string,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  lastIndexOfAny(anyOf: HostArray<number | StrongNumeric<CharHost>>): number;
  lastIndexOfAny(
    anyOf: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>
  ): number;
  lastIndexOfAny(
    anyOf: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  normalize(): string;
  normalize(normalizationForm: EnumInput<System.Text.NormalizationForm>): string;
  padLeft(totalWidth: number | StrongNumeric<Int32Host>): string;
  padLeft(
    totalWidth: number | StrongNumeric<Int32Host>,
    paddingChar: number | StrongNumeric<CharHost>
  ): string;
  padRight(totalWidth: number | StrongNumeric<Int32Host>): string;
  padRight(
    totalWidth: number | StrongNumeric<Int32Host>,
    paddingChar: number | StrongNumeric<CharHost>
  ): string;
  readonly length: number;
  remove(startIndex: number | StrongNumeric<Int32Host>): string;
  remove(
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): string;
  replace(
    oldChar: number | StrongNumeric<CharHost>,
    newChar: number | StrongNumeric<CharHost>
  ): string;
  replace(oldValue: string, newValue: string | null): string;
  replace(
    oldValue: string,
    newValue: string | null,
    comparisonType: EnumInput<System.StringComparison>
  ): string;
  replace(
    oldValue: string,
    newValue: string | null,
    ignoreCase: boolean,
    culture: System.Globalization.CultureInfo | null
  ): string;
  replaceLineEndings(): string;
  replaceLineEndings(replacementText: string): string;
  split(...separator: (number | StrongNumeric<CharHost>)[]): HostArray<string>;
  split(
    separator: HostArray<number | StrongNumeric<CharHost>> | null,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<string>;
  split(
    separator: HostArray<number | StrongNumeric<CharHost>> | null,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(
    separator: HostArray<number | StrongNumeric<CharHost>> | null,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(separator: HostArray<number | StrongNumeric<CharHost>>): HostArray<string>;
  split(
    separator: HostArray<string> | null,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(
    separator: HostArray<string> | null,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(separator: number | StrongNumeric<CharHost>): HostArray<string>;
  split(
    separator: number | StrongNumeric<CharHost>,
    count: number | StrongNumeric<Int32Host>
  ): HostArray<string>;
  split(
    separator: number | StrongNumeric<CharHost>,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(
    separator: number | StrongNumeric<CharHost>,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(separator: string | null): HostArray<string>;
  split(separator: string | null, count: number | StrongNumeric<Int32Host>): HostArray<string>;
  split(
    separator: string | null,
    count: number | StrongNumeric<Int32Host>,
    options: EnumInput<System.StringSplitOptions>
  ): HostArray<string>;
  split(separator: string | null, options: EnumInput<System.StringSplitOptions>): HostArray<string>;
  startsWith(value: number | StrongNumeric<CharHost>): boolean;
  startsWith(value: string): boolean;
  startsWith(value: string, comparisonType: EnumInput<System.StringComparison>): boolean;
  startsWith(
    value: string,
    ignoreCase: boolean,
    culture: System.Globalization.CultureInfo | null
  ): boolean;
  substring(startIndex: number | StrongNumeric<Int32Host>): string;
  substring(
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): string;
  toCharArray(): HostArray<number>;
  toCharArray(
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): HostArray<number>;
  toLower(): string;
  toLower(culture: System.Globalization.CultureInfo | null): string;
  toLowerInvariant(): string;
  toString(): string;
  toString(provider: System.IFormatProvider | null): string;
  toUpper(): string;
  toUpper(culture: System.Globalization.CultureInfo | null): string;
  toUpperInvariant(): string;
  trim(): string;
  trim(...trimChars: (number | StrongNumeric<CharHost>)[]): string;
  trim(trimChar: number | StrongNumeric<CharHost>): string;
  trim(trimChars: HostArray<number | StrongNumeric<CharHost>>): string;
  trimEnd(): string;
  trimEnd(...trimChars: (number | StrongNumeric<CharHost>)[]): string;
  trimEnd(trimChar: number | StrongNumeric<CharHost>): string;
  trimEnd(trimChars: HostArray<number | StrongNumeric<CharHost>>): string;
  trimStart(): string;
  trimStart(...trimChars: (number | StrongNumeric<CharHost>)[]): string;
  trimStart(trimChar: number | StrongNumeric<CharHost>): string;
  trimStart(trimChars: HostArray<number | StrongNumeric<CharHost>>): string;
}

declare global {
  namespace System {
    type String = import("./String").String;
  }
}

export interface StringHostType extends HostType<String, ReferenceTypeTrait> {
  new (value: HostArray<number | StrongNumeric<CharHost>> | null): String;
  new (
    value: HostArray<number | StrongNumeric<CharHost>>,
    startIndex: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): String;
  new (c: number | StrongNumeric<CharHost>, count: number | StrongNumeric<Int32Host>): String;
  readonly empty: string;
  intern(str: string): string;
  isInterned(str: string): string;
  compare(strA: string | null, strB: string | null): number;
  compare(strA: string | null, strB: string | null, ignoreCase: boolean): number;
  compare(
    strA: string | null,
    strB: string | null,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  compare(
    strA: string | null,
    strB: string | null,
    culture: System.Globalization.CultureInfo | null,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  compare(
    strA: string | null,
    strB: string | null,
    ignoreCase: boolean,
    culture: System.Globalization.CultureInfo | null
  ): number;
  compare(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): number;
  compare(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    ignoreCase: boolean
  ): number;
  compare(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    ignoreCase: boolean,
    culture: System.Globalization.CultureInfo | null
  ): number;
  compare(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    culture: System.Globalization.CultureInfo | null,
    options: EnumInput<System.Globalization.CompareOptions>
  ): number;
  compare(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>,
    comparisonType: EnumInput<System.StringComparison>
  ): number;
  compareOrdinal(strA: string | null, strB: string | null): number;
  compareOrdinal(
    strA: string | null,
    indexA: number | StrongNumeric<Int32Host>,
    strB: string | null,
    indexB: number | StrongNumeric<Int32Host>,
    length: number | StrongNumeric<Int32Host>
  ): number;
  equals(a: string | null, b: string | null): boolean;
  equals(
    a: string | null,
    b: string | null,
    comparisonType: EnumInput<System.StringComparison>
  ): boolean;
  create<TState>(
    type1: HostType<TState>,
    length: number | StrongNumeric<Int32Host>,
    state: TState | null,
    action: System.Buffers.SpanAction<number, TState>
  ): string;
  copy(str: string): string;
  isNullOrEmpty(value: string | null): boolean;
  isNullOrWhiteSpace(value: string | null): boolean;
  concat(arg0: unknown | null): string;
  concat(arg0: unknown | null, arg1: unknown | null): string;
  concat(arg0: unknown | null, arg1: unknown | null, arg2: unknown | null): string;
  concat(args: HostArray<unknown>): string;
  concat(...args: unknown[]): string;
  concat<T>(type1: HostType<T>, values: System.Collections.Generic.IEnumerable<T>): string;
  concat(values: System.Collections.Generic.IEnumerable<string>): string;
  concat(str0: string | null, str1: string | null): string;
  concat(str0: string | null, str1: string | null, str2: string | null): string;
  concat(
    str0: string | null,
    str1: string | null,
    str2: string | null,
    str3: string | null
  ): string;
  concat(values: HostArray<string>): string;
  concat(...values: string[]): string;
  format(format: string, arg0: unknown | null): string;
  format(format: string, arg0: unknown | null, arg1: unknown | null): string;
  format(format: string, arg0: unknown | null, arg1: unknown | null, arg2: unknown | null): string;
  format(format: string, args: HostArray<unknown>): string;
  format(format: string, ...args: unknown[]): string;
  format(provider: System.IFormatProvider | null, format: string, arg0: unknown | null): string;
  format(
    provider: System.IFormatProvider | null,
    format: string,
    arg0: unknown | null,
    arg1: unknown | null
  ): string;
  format(
    provider: System.IFormatProvider | null,
    format: string,
    arg0: unknown | null,
    arg1: unknown | null,
    arg2: unknown | null
  ): string;
  format(provider: System.IFormatProvider | null, format: string, args: HostArray<unknown>): string;
  format(provider: System.IFormatProvider | null, format: string, ...args: unknown[]): string;
  format<TArg0>(
    type1: HostType<TArg0>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null
  ): string;
  format<TArg0, TArg1>(
    type1: HostType<TArg0>,
    type2: HostType<TArg1>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null,
    arg1: TArg1 | null
  ): string;
  format<TArg0, TArg1, TArg2>(
    type1: HostType<TArg0>,
    type2: HostType<TArg1>,
    type3: HostType<TArg2>,
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    arg0: TArg0 | null,
    arg1: TArg1 | null,
    arg2: TArg2 | null
  ): string;
  format(
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    args: HostArray<unknown>
  ): string;
  format(
    provider: System.IFormatProvider | null,
    format: System.Text.CompositeFormat,
    ...args: unknown[]
  ): string;
  join(separator: number | StrongNumeric<CharHost>, value: HostArray<string>): string;
  join(separator: number | StrongNumeric<CharHost>, ...value: string[]): string;
  join(separator: string | null, value: HostArray<string>): string;
  join(separator: string | null, ...value: string[]): string;
  join(
    separator: number | StrongNumeric<CharHost>,
    value: HostArray<string>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): string;
  join(
    separator: string | null,
    value: HostArray<string>,
    startIndex: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): string;
  join(separator: string | null, values: System.Collections.Generic.IEnumerable<string>): string;
  join(separator: number | StrongNumeric<CharHost>, values: HostArray<unknown>): string;
  join(separator: number | StrongNumeric<CharHost>, ...values: unknown[]): string;
  join(separator: string | null, values: HostArray<unknown>): string;
  join(separator: string | null, ...values: unknown[]): string;
  join<T>(
    type1: HostType<T>,
    separator: number | StrongNumeric<CharHost>,
    values: System.Collections.Generic.IEnumerable<T>
  ): string;
  join<T>(
    type1: HostType<T>,
    separator: string | null,
    values: System.Collections.Generic.IEnumerable<T>
  ): string;
}

export {};
