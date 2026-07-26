import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./DateTime";
import "./Globalization/DateTimeStyles";
import "./IComparable";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./TimeSpan";
import "./ValueType";

declare const timeOnlyBrand: unique symbol;
export interface TimeOnly
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IUtf8SpanFormattableInput {
  readonly [timeOnlyBrand]: true;
  add(value: System.TimeSpan): System.TimeOnly;
  add(value: System.TimeSpan, wrappedDays: HostVariableOut<number>): System.TimeOnly;
  addHours(value: number | StrongNumeric<DoubleHost>): System.TimeOnly;
  addHours(
    value: number | StrongNumeric<DoubleHost>,
    wrappedDays: HostVariableOut<number>
  ): System.TimeOnly;
  addMinutes(value: number | StrongNumeric<DoubleHost>): System.TimeOnly;
  addMinutes(
    value: number | StrongNumeric<DoubleHost>,
    wrappedDays: HostVariableOut<number>
  ): System.TimeOnly;
  compareTo(value: System.TimeOnly): number;
  compareTo(value: unknown | null): number;
  deconstruct(hour: HostVariableOut<number>, minute: HostVariableOut<number>): VoidResult;
  deconstruct(
    hour: HostVariableOut<number>,
    minute: HostVariableOut<number>,
    second: HostVariableOut<number>
  ): VoidResult;
  deconstruct(
    hour: HostVariableOut<number>,
    minute: HostVariableOut<number>,
    second: HostVariableOut<number>,
    millisecond: HostVariableOut<number>
  ): VoidResult;
  deconstruct(
    hour: HostVariableOut<number>,
    minute: HostVariableOut<number>,
    second: HostVariableOut<number>,
    millisecond: HostVariableOut<number>,
    microsecond: HostVariableOut<number>
  ): VoidResult;
  equals(value: System.TimeOnly): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  isBetween(start: System.TimeOnly, end: System.TimeOnly): boolean;
  readonly hour: number;
  readonly microsecond: number;
  readonly millisecond: number;
  readonly minute: number;
  readonly nanosecond: number;
  readonly second: number;
  readonly ticks: number;
  toLongTimeString(): string;
  toShortTimeString(): string;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
  toTimeSpan(): System.TimeSpan;
}

declare global {
  namespace System {
    type TimeOnly = import("./TimeOnly").TimeOnly;
  }
}

export interface TimeOnlyHostType extends HostType<TimeOnly, ValueTypeTrait> {
  new (
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>
  ): TimeOnly;
  new (
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>
  ): TimeOnly;
  new (
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>
  ): TimeOnly;
  new (
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>
  ): TimeOnly;
  new (ticks: number | StrongNumeric<Int64Host>): TimeOnly;
  readonly minValue: System.TimeOnly;
  readonly maxValue: System.TimeOnly;
  fromTimeSpan(timeSpan: System.TimeSpan): System.TimeOnly;
  fromDateTime(dateTime: System.DateTime): System.TimeOnly;
  parse(s: string): System.TimeOnly;
  parse(s: string, provider: System.IFormatProvider | null): System.TimeOnly;
  parse(
    s: string,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.TimeOnly;
  parseExact(s: string, format: string): System.TimeOnly;
  parseExact(s: string, format: string, provider: System.IFormatProvider | null): System.TimeOnly;
  parseExact(
    s: string,
    format: string,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.TimeOnly;
  parseExact(s: string, formats: HostArray<string>): System.TimeOnly;
  parseExact(
    s: string,
    formats: HostArray<string>,
    provider: System.IFormatProvider | null
  ): System.TimeOnly;
  parseExact(
    s: string,
    formats: HostArray<string>,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.TimeOnly;
  tryParse(s: string | null, result: HostVariableOut<System.TimeOnly>): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    format: string | null,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    format: string | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    formats: HostArray<string> | null,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    formats: HostArray<string> | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
  parse(s: string, provider: System.IFormatProvider | null): System.TimeOnly;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.TimeOnly>
  ): boolean;
}

export {};
