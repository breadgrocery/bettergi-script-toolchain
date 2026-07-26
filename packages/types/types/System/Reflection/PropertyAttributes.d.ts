import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const propertyAttributesBrand: unique symbol;
export interface PropertyAttributes extends ClrHostValue {
  readonly [propertyAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type PropertyAttributes = import("./PropertyAttributes").PropertyAttributes;
  }
}

export interface PropertyAttributesHostType extends HostType<PropertyAttributes, EnumTypeTrait> {
  readonly none: PropertyAttributes;
  readonly specialName: PropertyAttributes;
  readonly rtSpecialName: PropertyAttributes;
  readonly hasDefault: PropertyAttributes;
  readonly reserved2: PropertyAttributes;
  readonly reserved3: PropertyAttributes;
  readonly reserved4: PropertyAttributes;
  readonly reservedMask: PropertyAttributes;
}

export {};
