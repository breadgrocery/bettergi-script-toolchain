import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const eventAttributesBrand: unique symbol;
export interface EventAttributes extends ClrHostValue {
  readonly [eventAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type EventAttributes = import("./EventAttributes").EventAttributes;
  }
}

export interface EventAttributesHostType extends HostType<EventAttributes, EnumTypeTrait> {
  readonly none: EventAttributes;
  readonly specialName: EventAttributes;
  readonly rtSpecialName: EventAttributes;
  readonly reservedMask: EventAttributes;
}

export {};
