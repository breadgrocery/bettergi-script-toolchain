import type {
  CharHost,
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../DayOfWeek";
import "../ICloneable";
import "../IFormatProvider";
import "../V8SplitProxyHelpers";
import "./Calendar";
import "./CalendarWeekRule";

declare const dateTimeFormatInfoBrand: unique symbol;
export interface DateTimeFormatInfo
  extends ClrHostValue, System.IFormatProviderInput, System.ICloneableInput {
  readonly [dateTimeFormatInfoBrand]: true;
  abbreviatedDayNames: HostArray<string>;
  abbreviatedMonthGenitiveNames: HostArray<string>;
  abbreviatedMonthNames: HostArray<string>;
  amDesignator: string;
  calendar: System.Globalization.Calendar;
  calendarWeekRule: System.Globalization.CalendarWeekRule;
  clone(): unknown;
  dateSeparator: string;
  dayNames: HostArray<string>;
  firstDayOfWeek: System.DayOfWeek;
  fullDateTimePattern: string;
  getAbbreviatedDayName(dayofweek: EnumInput<System.DayOfWeek>): string;
  getAbbreviatedEraName(era: number | StrongNumeric<Int32Host>): string;
  getAbbreviatedMonthName(month: number | StrongNumeric<Int32Host>): string;
  getAllDateTimePatterns(): HostArray<string>;
  getAllDateTimePatterns(format: number | StrongNumeric<CharHost>): HostArray<string>;
  getDayName(dayofweek: EnumInput<System.DayOfWeek>): string;
  getEra(eraName: string): number;
  getEraName(era: number | StrongNumeric<Int32Host>): string;
  getFormat(formatType: System.Type | null): unknown;
  getMonthName(month: number | StrongNumeric<Int32Host>): string;
  getShortestDayName(dayOfWeek: EnumInput<System.DayOfWeek>): string;
  longDatePattern: string;
  longTimePattern: string;
  monthDayPattern: string;
  monthGenitiveNames: HostArray<string>;
  monthNames: HostArray<string>;
  pmDesignator: string;
  readonly isReadOnly: boolean;
  readonly nativeCalendarName: string;
  readonly rfC1123Pattern: string;
  readonly sortableDateTimePattern: string;
  readonly universalSortableDateTimePattern: string;
  setAllDateTimePatterns(
    patterns: HostArray<string>,
    format: number | StrongNumeric<CharHost>
  ): VoidResult;
  shortDatePattern: string;
  shortTimePattern: string;
  shortestDayNames: HostArray<string>;
  timeSeparator: string;
  yearMonthPattern: string;
}

declare global {
  namespace System.Globalization {
    type DateTimeFormatInfo = import("./DateTimeFormatInfo").DateTimeFormatInfo;
  }
}

export interface DateTimeFormatInfoHostType extends HostType<
  DateTimeFormatInfo,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): DateTimeFormatInfo;
  readonly invariantInfo: System.Globalization.DateTimeFormatInfo;
  readonly currentInfo: System.Globalization.DateTimeFormatInfo;
  getInstance(provider: System.IFormatProvider | null): System.Globalization.DateTimeFormatInfo;
  readOnly(dtfi: System.Globalization.DateTimeFormatInfo): System.Globalization.DateTimeFormatInfo;
}

export {};
