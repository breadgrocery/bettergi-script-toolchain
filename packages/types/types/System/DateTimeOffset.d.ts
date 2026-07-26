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
import "./DateOnly";
import "./DateTime";
import "./DayOfWeek";
import "./Globalization/Calendar";
import "./Globalization/DateTimeStyles";
import "./IComparable";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./Runtime/Serialization/IDeserializationCallback";
import "./Runtime/Serialization/ISerializable";
import "./TimeOnly";
import "./TimeSpan";
import "./ValueType";

declare const dateTimeOffsetBrand: unique symbol;
export interface DateTimeOffset
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.Runtime.Serialization.ISerializableInput,
    System.Runtime.Serialization.IDeserializationCallbackInput,
    System.IUtf8SpanFormattableInput {
  readonly [dateTimeOffsetBrand]: true;
  add(timeSpan: System.TimeSpan): System.DateTimeOffset;
  addDays(days: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addHours(hours: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addMicroseconds(microseconds: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addMilliseconds(milliseconds: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addMinutes(minutes: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addMonths(months: number | StrongNumeric<Int32Host>): System.DateTimeOffset;
  addSeconds(seconds: number | StrongNumeric<DoubleHost>): System.DateTimeOffset;
  addTicks(ticks: number | StrongNumeric<Int64Host>): System.DateTimeOffset;
  addYears(years: number | StrongNumeric<Int32Host>): System.DateTimeOffset;
  compareTo(other: System.DateTimeOffset): number;
  deconstruct(
    date: HostVariableOut<System.DateOnly>,
    time: HostVariableOut<System.TimeOnly>,
    offset: HostVariableOut<System.TimeSpan>
  ): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.DateTimeOffset): boolean;
  equalsExact(other: System.DateTimeOffset): boolean;
  getHashCode(): number;
  readonly date: System.DateTime;
  readonly dateTime: System.DateTime;
  readonly day: number;
  readonly dayOfWeek: System.DayOfWeek;
  readonly dayOfYear: number;
  readonly hour: number;
  readonly localDateTime: System.DateTime;
  readonly microsecond: number;
  readonly millisecond: number;
  readonly minute: number;
  readonly month: number;
  readonly nanosecond: number;
  readonly offset: System.TimeSpan;
  readonly second: number;
  readonly ticks: number;
  readonly timeOfDay: System.TimeSpan;
  readonly totalOffsetMinutes: number;
  readonly utcDateTime: System.DateTime;
  readonly utcTicks: number;
  readonly year: number;
  subtract(value: System.DateTimeOffset): System.TimeSpan;
  subtract(value: System.TimeSpan): System.DateTimeOffset;
  toFileTime(): number;
  toLocalTime(): System.DateTimeOffset;
  toOffset(offset: System.TimeSpan): System.DateTimeOffset;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, formatProvider: System.IFormatProvider | null): string;
  toString(formatProvider: System.IFormatProvider | null): string;
  toUniversalTime(): System.DateTimeOffset;
  toUnixTimeMilliseconds(): number;
  toUnixTimeSeconds(): number;
}

declare global {
  namespace System {
    type DateTimeOffset = import("./DateTimeOffset").DateTimeOffset;
  }
}

export interface DateTimeOffsetHostType extends HostType<DateTimeOffset, ValueTypeTrait> {
  new (ticks: number | StrongNumeric<Int64Host>, offset: System.TimeSpan): DateTimeOffset;
  new (dateTime: System.DateTime): DateTimeOffset;
  new (dateTime: System.DateTime, offset: System.TimeSpan): DateTimeOffset;
  new (date: System.DateOnly, time: System.TimeOnly, offset: System.TimeSpan): DateTimeOffset;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    offset: System.TimeSpan
  ): DateTimeOffset;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    offset: System.TimeSpan
  ): DateTimeOffset;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar,
    offset: System.TimeSpan
  ): DateTimeOffset;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>,
    offset: System.TimeSpan
  ): DateTimeOffset;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar,
    offset: System.TimeSpan
  ): DateTimeOffset;
  readonly minValue: System.DateTimeOffset;
  readonly maxValue: System.DateTimeOffset;
  readonly unixEpoch: System.DateTimeOffset;
  readonly utcNow: System.DateTimeOffset;
  readonly now: System.DateTimeOffset;
  compare(first: System.DateTimeOffset, second: System.DateTimeOffset): number;
  equals(first: System.DateTimeOffset, second: System.DateTimeOffset): boolean;
  fromFileTime(fileTime: number | StrongNumeric<Int64Host>): System.DateTimeOffset;
  fromUnixTimeSeconds(seconds: number | StrongNumeric<Int64Host>): System.DateTimeOffset;
  fromUnixTimeMilliseconds(milliseconds: number | StrongNumeric<Int64Host>): System.DateTimeOffset;
  parse(input: string): System.DateTimeOffset;
  parse(input: string, formatProvider: System.IFormatProvider | null): System.DateTimeOffset;
  parse(
    input: string,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTimeOffset;
  parseExact(
    input: string,
    format: string,
    formatProvider: System.IFormatProvider | null
  ): System.DateTimeOffset;
  parseExact(
    input: string,
    format: string,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTimeOffset;
  parseExact(
    input: string,
    formats: HostArray<string>,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTimeOffset;
  tryParse(input: string | null, result: HostVariableOut<System.DateTimeOffset>): boolean;
  tryParse(
    input: string | null,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTimeOffset>
  ): boolean;
  tryParseExact(
    input: string | null,
    format: string | null,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTimeOffset>
  ): boolean;
  tryParseExact(
    input: string | null,
    formats: HostArray<string> | null,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTimeOffset>
  ): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.DateTimeOffset>
  ): boolean;
}

export {};
