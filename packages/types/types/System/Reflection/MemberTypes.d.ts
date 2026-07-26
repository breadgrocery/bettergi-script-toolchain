import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const memberTypesBrand: unique symbol;
export interface MemberTypes extends ClrHostValue {
  readonly [memberTypesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type MemberTypes = import("./MemberTypes").MemberTypes;
  }
}

export interface MemberTypesHostType extends HostType<MemberTypes, EnumTypeTrait> {
  readonly constructor: MemberTypes;
  readonly event: MemberTypes;
  readonly field: MemberTypes;
  readonly method: MemberTypes;
  readonly property: MemberTypes;
  readonly typeInfo: MemberTypes;
  readonly custom: MemberTypes;
  readonly nestedType: MemberTypes;
  readonly all: MemberTypes;
}

export {};
