import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const calendarAlgorithmTypeBrand: unique symbol;
export interface CalendarAlgorithmType extends ClrHostValue {
  readonly [calendarAlgorithmTypeBrand]: true;
}

declare global {
  namespace System.Globalization {
    type CalendarAlgorithmType = import("./CalendarAlgorithmType").CalendarAlgorithmType;
  }
}

export interface CalendarAlgorithmTypeHostType extends HostType<
  CalendarAlgorithmType,
  EnumTypeTrait
> {
  readonly unknown: CalendarAlgorithmType;
  readonly solarCalendar: CalendarAlgorithmType;
  readonly lunarCalendar: CalendarAlgorithmType;
  readonly lunisolarCalendar: CalendarAlgorithmType;
}

export {};
