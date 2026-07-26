import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./DateTime";
import "./DateTimeKind";
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
import "./TimeOnly";
import "./ValueType";

declare const dateOnlyBrand: unique symbol;
export interface DateOnly
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IUtf8SpanFormattableInput {
  readonly [dateOnlyBrand]: true;
  addDays(value: number | StrongNumeric<Int32Host>): System.DateOnly;
  addMonths(value: number | StrongNumeric<Int32Host>): System.DateOnly;
  addYears(value: number | StrongNumeric<Int32Host>): System.DateOnly;
  compareTo(value: System.DateOnly): number;
  compareTo(value: unknown | null): number;
  deconstruct(
    year: HostVariableOut<number>,
    month: HostVariableOut<number>,
    day: HostVariableOut<number>
  ): VoidResult;
  equals(value: System.DateOnly): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  readonly day: number;
  readonly dayNumber: number;
  readonly dayOfWeek: System.DayOfWeek;
  readonly dayOfYear: number;
  readonly month: number;
  readonly year: number;
  toDateTime(time: System.TimeOnly): System.DateTime;
  toDateTime(time: System.TimeOnly, kind: EnumInput<System.DateTimeKind>): System.DateTime;
  toLongDateString(): string;
  toShortDateString(): string;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, provider: System.IFormatProvider | null): string;
  toString(provider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type DateOnly = import("./DateOnly").DateOnly;
  }
}

export interface DateOnlyHostType extends HostType<DateOnly, ValueTypeTrait> {
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>
  ): DateOnly;
  new (
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    calendar: System.Globalization.Calendar
  ): DateOnly;
  readonly minValue: System.DateOnly;
  readonly maxValue: System.DateOnly;
  fromDayNumber(dayNumber: number | StrongNumeric<Int32Host>): System.DateOnly;
  fromDateTime(dateTime: System.DateTime): System.DateOnly;
  parse(s: string): System.DateOnly;
  parse(s: string, provider: System.IFormatProvider | null): System.DateOnly;
  parse(
    s: string,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateOnly;
  parseExact(s: string, format: string): System.DateOnly;
  parseExact(s: string, format: string, provider: System.IFormatProvider | null): System.DateOnly;
  parseExact(
    s: string,
    format: string,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateOnly;
  parseExact(s: string, formats: HostArray<string>): System.DateOnly;
  parseExact(
    s: string,
    formats: HostArray<string>,
    provider: System.IFormatProvider | null
  ): System.DateOnly;
  parseExact(
    s: string,
    formats: HostArray<string>,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>
  ): System.DateOnly;
  tryParse(s: string | null, result: HostVariableOut<System.DateOnly>): boolean;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    format: string | null,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    format: string | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    formats: HostArray<string> | null,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
  tryParseExact(
    s: string | null,
    formats: HostArray<string> | null,
    provider: System.IFormatProvider | null,
    style: EnumInput<System.Globalization.DateTimeStyles>,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
  parse(s: string, provider: System.IFormatProvider | null): System.DateOnly;
  tryParse(
    s: string | null,
    provider: System.IFormatProvider | null,
    result: HostVariableOut<System.DateOnly>
  ): boolean;
}

export {};
