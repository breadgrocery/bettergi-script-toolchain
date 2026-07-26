import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fieldAttributesBrand: unique symbol;
export interface FieldAttributes extends ClrHostValue {
  readonly [fieldAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type FieldAttributes = import("./FieldAttributes").FieldAttributes;
  }
}

export interface FieldAttributesHostType extends HostType<FieldAttributes, EnumTypeTrait> {
  readonly fieldAccessMask: FieldAttributes;
  readonly privateScope: FieldAttributes;
  readonly private: FieldAttributes;
  readonly famANDAssem: FieldAttributes;
  readonly assembly: FieldAttributes;
  readonly family: FieldAttributes;
  readonly famORAssem: FieldAttributes;
  readonly public: FieldAttributes;
  readonly static: FieldAttributes;
  readonly initOnly: FieldAttributes;
  readonly literal: FieldAttributes;
  readonly notSerialized: FieldAttributes;
  readonly specialName: FieldAttributes;
  readonly pinvokeImpl: FieldAttributes;
  readonly rtSpecialName: FieldAttributes;
  readonly hasFieldMarshal: FieldAttributes;
  readonly hasDefault: FieldAttributes;
  readonly hasFieldRVA: FieldAttributes;
  readonly reservedMask: FieldAttributes;
}

export {};
