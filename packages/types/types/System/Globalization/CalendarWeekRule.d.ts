import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const calendarWeekRuleBrand: unique symbol;
export interface CalendarWeekRule extends ClrHostValue {
  readonly [calendarWeekRuleBrand]: true;
}

declare global {
  namespace System.Globalization {
    type CalendarWeekRule = import("./CalendarWeekRule").CalendarWeekRule;
  }
}

export interface CalendarWeekRuleHostType extends HostType<CalendarWeekRule, EnumTypeTrait> {
  readonly firstDay: CalendarWeekRule;
  readonly firstFullWeek: CalendarWeekRule;
  readonly firstFourDayWeek: CalendarWeekRule;
}

export {};
