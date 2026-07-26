import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const parameterAttributesBrand: unique symbol;
export interface ParameterAttributes extends ClrHostValue {
  readonly [parameterAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type ParameterAttributes = import("./ParameterAttributes").ParameterAttributes;
  }
}

export interface ParameterAttributesHostType extends HostType<ParameterAttributes, EnumTypeTrait> {
  readonly none: ParameterAttributes;
  readonly in: ParameterAttributes;
  readonly out: ParameterAttributes;
  readonly lcid: ParameterAttributes;
  readonly retval: ParameterAttributes;
  readonly optional: ParameterAttributes;
  readonly hasDefault: ParameterAttributes;
  readonly hasFieldMarshal: ParameterAttributes;
  readonly reserved3: ParameterAttributes;
  readonly reserved4: ParameterAttributes;
  readonly reservedMask: ParameterAttributes;
}

export {};
