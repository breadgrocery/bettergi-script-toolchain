import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const dayOfWeekBrand: unique symbol;
export interface DayOfWeek extends ClrHostValue {
  readonly [dayOfWeekBrand]: true;
}

declare global {
  namespace System {
    type DayOfWeek = import("./DayOfWeek").DayOfWeek;
  }
}

export interface DayOfWeekHostType extends HostType<DayOfWeek, EnumTypeTrait> {
  readonly sunday: DayOfWeek;
  readonly monday: DayOfWeek;
  readonly tuesday: DayOfWeek;
  readonly wednesday: DayOfWeek;
  readonly thursday: DayOfWeek;
  readonly friday: DayOfWeek;
  readonly saturday: DayOfWeek;
}

export {};
