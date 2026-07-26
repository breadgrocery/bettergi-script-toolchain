import type {
  ClrHostValue,
  DoubleHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../DateTime";
import "../DayOfWeek";
import "../ICloneable";
import "./CalendarAlgorithmType";
import "./CalendarWeekRule";

declare const calendarBrand: unique symbol;
export interface Calendar extends ClrHostValue, System.ICloneableInput {
  readonly [calendarBrand]: true;
  addDays(time: System.DateTime, days: number | StrongNumeric<Int32Host>): System.DateTime;
  addHours(time: System.DateTime, hours: number | StrongNumeric<Int32Host>): System.DateTime;
  addMilliseconds(
    time: System.DateTime,
    milliseconds: number | StrongNumeric<DoubleHost>
  ): System.DateTime;
  addMinutes(time: System.DateTime, minutes: number | StrongNumeric<Int32Host>): System.DateTime;
  addMonths(time: System.DateTime, months: number | StrongNumeric<Int32Host>): System.DateTime;
  addSeconds(time: System.DateTime, seconds: number | StrongNumeric<Int32Host>): System.DateTime;
  addWeeks(time: System.DateTime, weeks: number | StrongNumeric<Int32Host>): System.DateTime;
  addYears(time: System.DateTime, years: number | StrongNumeric<Int32Host>): System.DateTime;
  clone(): unknown;
  getDayOfMonth(time: System.DateTime): number;
  getDayOfWeek(time: System.DateTime): System.DayOfWeek;
  getDayOfYear(time: System.DateTime): number;
  getDaysInMonth(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>
  ): number;
  getDaysInMonth(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): number;
  getDaysInYear(year: number | StrongNumeric<Int32Host>): number;
  getDaysInYear(
    year: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): number;
  getEra(time: System.DateTime): number;
  getHour(time: System.DateTime): number;
  getLeapMonth(year: number | StrongNumeric<Int32Host>): number;
  getLeapMonth(
    year: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): number;
  getMilliseconds(time: System.DateTime): number;
  getMinute(time: System.DateTime): number;
  getMonth(time: System.DateTime): number;
  getMonthsInYear(year: number | StrongNumeric<Int32Host>): number;
  getMonthsInYear(
    year: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): number;
  getSecond(time: System.DateTime): number;
  getWeekOfYear(
    time: System.DateTime,
    rule: EnumInput<System.Globalization.CalendarWeekRule>,
    firstDayOfWeek: EnumInput<System.DayOfWeek>
  ): number;
  getYear(time: System.DateTime): number;
  isLeapDay(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>
  ): boolean;
  isLeapDay(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): boolean;
  isLeapMonth(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>
  ): boolean;
  isLeapMonth(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): boolean;
  isLeapYear(year: number | StrongNumeric<Int32Host>): boolean;
  isLeapYear(
    year: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): boolean;
  readonly algorithmType: System.Globalization.CalendarAlgorithmType;
  readonly eras: HostArray<number>;
  readonly isReadOnly: boolean;
  readonly maxSupportedDateTime: System.DateTime;
  readonly minSupportedDateTime: System.DateTime;
  toDateTime(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>
  ): System.DateTime;
  toDateTime(
    year: number | StrongNumeric<Int32Host>,
    month: number | StrongNumeric<Int32Host>,
    day: number | StrongNumeric<Int32Host>,
    hour: number | StrongNumeric<Int32Host>,
    minute: number | StrongNumeric<Int32Host>,
    second: number | StrongNumeric<Int32Host>,
    millisecond: number | StrongNumeric<Int32Host>,
    era: number | StrongNumeric<Int32Host>
  ): System.DateTime;
  toFourDigitYear(year: number | StrongNumeric<Int32Host>): number;
  twoDigitYearMax: number;
}

declare global {
  namespace System.Globalization {
    type Calendar = import("./Calendar").Calendar;
  }
}

export interface CalendarHostType extends HostType<Calendar, ReferenceTypeTrait> {
  readonly currentEra: number;
  readOnly(calendar: System.Globalization.Calendar): System.Globalization.Calendar;
}

export {};
