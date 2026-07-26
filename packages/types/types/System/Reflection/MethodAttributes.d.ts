import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const methodAttributesBrand: unique symbol;
export interface MethodAttributes extends ClrHostValue {
  readonly [methodAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type MethodAttributes = import("./MethodAttributes").MethodAttributes;
  }
}

export interface MethodAttributesHostType extends HostType<MethodAttributes, EnumTypeTrait> {
  readonly memberAccessMask: MethodAttributes;
  readonly privateScope: MethodAttributes;
  readonly private: MethodAttributes;
  readonly famANDAssem: MethodAttributes;
  readonly assembly: MethodAttributes;
  readonly family: MethodAttributes;
  readonly famORAssem: MethodAttributes;
  readonly public: MethodAttributes;
  readonly static: MethodAttributes;
  readonly final: MethodAttributes;
  readonly virtual: MethodAttributes;
  readonly hideBySig: MethodAttributes;
  readonly checkAccessOnOverride: MethodAttributes;
  readonly vtableLayoutMask: MethodAttributes;
  readonly reuseSlot: MethodAttributes;
  readonly newSlot: MethodAttributes;
  readonly abstract: MethodAttributes;
  readonly specialName: MethodAttributes;
  readonly pinvokeImpl: MethodAttributes;
  readonly unmanagedExport: MethodAttributes;
  readonly rtSpecialName: MethodAttributes;
  readonly hasSecurity: MethodAttributes;
  readonly requireSecObject: MethodAttributes;
  readonly reservedMask: MethodAttributes;
}

export {};
