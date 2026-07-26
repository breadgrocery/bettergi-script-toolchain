import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const genericParameterAttributesBrand: unique symbol;
export interface GenericParameterAttributes extends ClrHostValue {
  readonly [genericParameterAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type GenericParameterAttributes =
      import("./GenericParameterAttributes").GenericParameterAttributes;
  }
}

export interface GenericParameterAttributesHostType extends HostType<
  GenericParameterAttributes,
  EnumTypeTrait
> {
  readonly none: GenericParameterAttributes;
  readonly varianceMask: GenericParameterAttributes;
  readonly covariant: GenericParameterAttributes;
  readonly contravariant: GenericParameterAttributes;
  readonly specialConstraintMask: GenericParameterAttributes;
  readonly referenceTypeConstraint: GenericParameterAttributes;
  readonly notNullableValueTypeConstraint: GenericParameterAttributes;
  readonly defaultConstructorConstraint: GenericParameterAttributes;
}

export {};
