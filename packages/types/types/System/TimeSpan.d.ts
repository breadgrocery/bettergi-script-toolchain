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
import "./Globalization/TimeSpanStyles";
import "./IComparable";
import "./IEquatable";
import "./IFormatProvider";
import "./IFormattable";
import "./IParsable";
import "./ISpanFormattable";
import "./ISpanParsable";
import "./IUtf8SpanFormattable";
import "./ValueType";

declare const timeSpanBrand: unique symbol;
export interface TimeSpan
  extends
    ClrHostValue,
    System.IComparableInput,
    System.ISpanFormattableInput,
    System.IFormattableInput,
    System.IUtf8SpanFormattableInput {
  readonly [timeSpanBrand]: true;
  add(ts: System.TimeSpan): System.TimeSpan;
  compareTo(value: System.TimeSpan): number;
  compareTo(value: unknown | null): number;
  divide(divisor: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  divide(ts: System.TimeSpan): number;
  duration(): System.TimeSpan;
  equals(obj: System.TimeSpan): boolean;
  equals(value: unknown | null): boolean;
  getHashCode(): number;
  multiply(factor: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  negate(): System.TimeSpan;
  readonly days: number;
  readonly hours: number;
  readonly microseconds: number;
  readonly milliseconds: number;
  readonly minutes: number;
  readonly nanoseconds: number;
  readonly seconds: number;
  readonly ticks: number;
  readonly totalDays: number;
  readonly totalHours: number;
  readonly totalMicroseconds: number;
  readonly totalMilliseconds: number;
  readonly totalMinutes: number;
  readonly totalNanoseconds: number;
  readonly totalSeconds: number;
  subtract(ts: System.TimeSpan): System.TimeSpan;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, formatProvider: System.IFormatProvider | null): string;
}

declare global {
  namespace System {
    type TimeSpan = import("./TimeSpan").TimeSpan;
  }
}

export interface TimeSpanHostType extends HostType<TimeSpan, ValueTypeTrait> {
  new (ticks: number | StrongNumeric<Int64Host>): TimeSpan;
  new (
    hours: number | StrongNumeric<Int32Host>,
    minutes: number | StrongNumeric<Int32Host>,
    seconds: number | StrongNumeric<Int32Host>
  ): TimeSpan;
  new (
    days: number | StrongNumeric<Int32Host>,
    hours: number | StrongNumeric<Int32Host>,
    minutes: number | StrongNumeric<Int32Host>,
    seconds: number | StrongNumeric<Int32Host>
  ): TimeSpan;
  new (
    days: number | StrongNumeric<Int32Host>,
    hours: number | StrongNumeric<Int32Host>,
    minutes: number | StrongNumeric<Int32Host>,
    seconds: number | StrongNumeric<Int32Host>,
    milliseconds: number | StrongNumeric<Int32Host>
  ): TimeSpan;
  new (
    days: number | StrongNumeric<Int32Host>,
    hours: number | StrongNumeric<Int32Host>,
    minutes: number | StrongNumeric<Int32Host>,
    seconds: number | StrongNumeric<Int32Host>,
    milliseconds: number | StrongNumeric<Int32Host>,
    microseconds: number | StrongNumeric<Int32Host>
  ): TimeSpan;
  readonly zero: System.TimeSpan;
  readonly maxValue: System.TimeSpan;
  readonly minValue: System.TimeSpan;
  readonly nanosecondsPerTick: number;
  readonly ticksPerMicrosecond: number;
  readonly ticksPerMillisecond: number;
  readonly ticksPerSecond: number;
  readonly ticksPerMinute: number;
  readonly ticksPerHour: number;
  readonly ticksPerDay: number;
  compare(t1: System.TimeSpan, t2: System.TimeSpan): number;
  fromDays(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  equals(t1: System.TimeSpan, t2: System.TimeSpan): boolean;
  fromHours(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  fromMilliseconds(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  fromMicroseconds(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  fromMinutes(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  fromSeconds(value: number | StrongNumeric<DoubleHost>): System.TimeSpan;
  fromTicks(value: number | StrongNumeric<Int64Host>): System.TimeSpan;
  parse(s: string): System.TimeSpan;
  parse(input: string, formatProvider: System.IFormatProvider | null): System.TimeSpan;
  parseExact(
    input: string,
    format: string,
    formatProvider: System.IFormatProvider | null
  ): System.TimeSpan;
  parseExact(
    input: string,
    formats: HostArray<string>,
    formatProvider: System.IFormatProvider | null
  ): System.TimeSpan;
  parseExact(
    input: string,
    format: string,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.TimeSpanStyles>
  ): System.TimeSpan;
  parseExact(
    input: string,
    formats: HostArray<string>,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.TimeSpanStyles>
  ): System.TimeSpan;
  tryParse(s: string | null, result: HostVariableOut<System.TimeSpan>): boolean;
  tryParse(
    input: string | null,
    formatProvider: System.IFormatProvider | null,
    result: HostVariableOut<System.TimeSpan>
  ): boolean;
  tryParseExact(
    input: string | null,
    format: string | null,
    formatProvider: System.IFormatProvider | null,
    result: HostVariableOut<System.TimeSpan>
  ): boolean;
  tryParseExact(
    input: string | null,
    formats: HostArray<string> | null,
    formatProvider: System.IFormatProvider | null,
    result: HostVariableOut<System.TimeSpan>
  ): boolean;
  tryParseExact(
    input: string | null,
    format: string | null,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.TimeSpanStyles>,
    result: HostVariableOut<System.TimeSpan>
  ): boolean;
  tryParseExact(
    input: string | null,
    formats: HostArray<string> | null,
    formatProvider: System.IFormatProvider | null,
    styles: EnumInput<System.Globalization.TimeSpanStyles>,
    result: HostVariableOut<System.TimeSpan>
  ): boolean;
}

export {};
