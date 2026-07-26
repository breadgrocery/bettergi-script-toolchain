import type {
  CharHost,
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
import "./DateTimeKind";
import "./DayOfWeek";
import "./Globalization/Calendar";
import "./Globalization/DateTimeStyles";
import "./IComparable";
import "./IConvertible";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./Runtime/Serialization/ISerializable";
import "./TimeOnly";
import "./TimeSpan";
import "./TypeCode";
import "./ValueType";

declare const dateTimeBrand: unique symbol;
export interface DateTime
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IConvertibleInput,
    System.Runtime.Serialization.ISerializableInput,
    System.IUtf8SpanFormattableInput {
  readonly [dateTimeBrand]: true;
  add(value: System.TimeSpan): System.DateTime;
  addDays(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addHours(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addMicroseconds(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addMilliseconds(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addMinutes(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addMonths(months: number | StrongNumeric<Int32Host>): System.DateTime;
  addSeconds(value: number | StrongNumeric<DoubleHost>): System.DateTime;
  addTicks(value: number | StrongNumeric<Int64Host>): System.DateTime;
  addYears(value: number | StrongNumeric<Int32Host>): System.DateTime;
  compareTo(value: System.DateTime): number;
  compareTo(value: unknown | null): number;
  deconstruct(
    date: HostVariableOut<System.DateOnly>,
    time: HostVariableOut<System.TimeOnly>
  ): VoidResult;
  deconstruct(
    year: HostVariableOut<number>,
    month: HostVariableOut<number>,
    day: HostVariableOut<number>
  ): VoidResult;
  equals(value: System.DateTime): boolean;
  equals(value: unknown | null): boolean;
  getDateTimeFormats(): HostArray<string>;
  getDateTimeFormats(format: number | StrongNumeric<CharHost>): HostArray<string>;
  getDateTimeFormats(
    format: number | StrongNumeric<CharHost>,
    provider: System.IFormatProvider | null
  ): HostArray<string>;
  getDateTimeFormats(provider: System.IFormatProvider | null): HostArray<string>;
  getHashCode(): number;
  getTypeCode(): System.TypeCode;
  isDaylightSavingTime(): boolean;
  readonly date: System.DateTime;
  readonly day: number;
  readonly dayOfWeek: System.DayOfWeek;
  readonly dayOfYear: number;
  readonly hour: number;
  readonly kind: System.DateTimeKind;
  readonly microsecond: number;
  readonly millisecond: number;
  readonly minute: number;
  readonly month: number;
  readonly nanosecond: number;
  readonly second: number;
  readonly ticks: number;
  readonly timeOfDay: System.TimeSpan;
  readonly year: number;
  subtract(value: System.DateTime): System.TimeSpan;
  subtract(value: System.TimeSpan): System.DateTime;
  toBinary(): number;
  toFileTime(): number;
  toFileTimeUtc(): number;
  toLocalTime(): System.DateTime;
  toLongDateString(): string;
  toLongTimeString(): string;
  toOADate(): number;
  toShortDateString(): string;
  toShortTimeString(): string;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
  toUniversalTime(): System.DateTime;
}

declare global {
  namespace System {
    type DateTime = import("./DateTime").DateTime;
  }
}

export interface DateTimeHostType extends HostType<DateTime, ValueTypeTrait> {
  new (ticks: number | StrongNumeric<Int64Host>): DateTime;
  new (ticks: number | StrongNumeric<Int64Host>, kind: EnumInput<System.DateTimeKind>): DateTime;
  new (date: System.DateOnly, time: System.TimeOnly): DateTime;
  new (
    date: System.DateOnly,
    time: System.TimeOnly,
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar,
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>,
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    microsecond: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar
  ): DateTime;
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
    kind: EnumInput<System.DateTimeKind>
  ): DateTime;
  readonly minValue: System.DateTime;
  readonly maxValue: System.DateTime;
  readonly unixEpoch: System.DateTime;
  readonly now: System.DateTime;
  readonly today: System.DateTime;
  readonly utcNow: System.DateTime;
  compare(t1: System.DateTime, t2: System.DateTime): number;
  daysInMonth(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>
  ): number;
  equals(t1: System.DateTime, t2: System.DateTime): boolean;
  fromBinary(dateData: number | StrongNumeric<Int64Host>): System.DateTime;
  fromFileTime(fileTime: number | StrongNumeric<Int64Host>): System.DateTime;
  fromFileTimeUtc(fileTime: number | StrongNumeric<Int64Host>): System.DateTime;
  fromOADate(d: number | StrongNumeric<DoubleHost>): System.DateTime;
  specifyKind(value: System.DateTime, kind: EnumInput<System.DateTimeKind>): System.DateTime;
  isLeapYear(year: number | StrongNumeric<Int32Host>): boolean;
  parse(s: string): System.DateTime;
  parse(s: string, provider: System.IFormatProvider | null): System.DateTime;
  parse(
    s: string,
    provider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTime;
  parseExact(s: string, format: string, provider: System.IFormatProvider | null): System.DateTime;
  parseExact(
    s: string,
    format: string,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTime;
  parseExact(
    s: string,
    formats: HostArray<string>,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateTime;
  tryParse(s: string | null, result: HostVariableOut<System.DateTime>): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTime>
  ): boolean;
  tryParseExact(
    s: string | null,
    format: string | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTime>
  ): boolean;
  tryParseExact(
    s: string | null,
    formats: HostArray<string> | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateTime>
  ): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.DateTime>
  ): boolean;
}

export {};
