import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const typeAttributesBrand: unique symbol;
export interface TypeAttributes extends ClrHostValue {
  readonly [typeAttributesBrand]: true;
}

declare global {
  namespace System.Reflection {
    type TypeAttributes = import("./TypeAttributes").TypeAttributes;
  }
}

export interface TypeAttributesHostType extends HostType<TypeAttributes, EnumTypeTrait> {
  readonly visibilityMask: TypeAttributes;
  readonly notPublic: TypeAttributes;
  readonly public: TypeAttributes;
  readonly nestedPublic: TypeAttributes;
  readonly nestedPrivate: TypeAttributes;
  readonly nestedFamily: TypeAttributes;
  readonly nestedAssembly: TypeAttributes;
  readonly nestedFamANDAssem: TypeAttributes;
  readonly nestedFamORAssem: TypeAttributes;
  readonly layoutMask: TypeAttributes;
  readonly autoLayout: TypeAttributes;
  readonly sequentialLayout: TypeAttributes;
  readonly explicitLayout: TypeAttributes;
  readonly classSemanticsMask: TypeAttributes;
  readonly class: TypeAttributes;
  readonly interface: TypeAttributes;
  readonly abstract: TypeAttributes;
  readonly sealed: TypeAttributes;
  readonly specialName: TypeAttributes;
  readonly import: TypeAttributes;
  readonly serializable: TypeAttributes;
  readonly windowsRuntime: TypeAttributes;
  readonly stringFormatMask: TypeAttributes;
  readonly ansiClass: TypeAttributes;
  readonly unicodeClass: TypeAttributes;
  readonly autoClass: TypeAttributes;
  readonly customFormatClass: TypeAttributes;
  readonly customFormatMask: TypeAttributes;
  readonly beforeFieldInit: TypeAttributes;
  readonly rtSpecialName: TypeAttributes;
  readonly hasSecurity: TypeAttributes;
  readonly reservedMask: TypeAttributes;
}

export {};
