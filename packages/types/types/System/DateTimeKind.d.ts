import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const dateTimeKindBrand: unique symbol;
export interface DateTimeKind extends ClrHostValue {
  readonly [dateTimeKindBrand]: true;
}

declare global {
  namespace System {
    type DateTimeKind = import("./DateTimeKind").DateTimeKind;
  }
}

export interface DateTimeKindHostType extends HostType<DateTimeKind, EnumTypeTrait> {
  readonly unspecified: DateTimeKind;
  readonly utc: DateTimeKind;
  readonly local: DateTimeKind;
}

export {};
