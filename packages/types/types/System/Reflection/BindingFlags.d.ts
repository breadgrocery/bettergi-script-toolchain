import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const bindingFlagsBrand: unique symbol;
export interface BindingFlags extends ClrHostValue {
  readonly [bindingFlagsBrand]: true;
}

declare global {
  namespace System.Reflection {
    type BindingFlags = import("./BindingFlags").BindingFlags;
  }
}

export interface BindingFlagsHostType extends HostType<BindingFlags, EnumTypeTrait> {
  readonly default: BindingFlags;
  readonly ignoreCase: BindingFlags;
  readonly declaredOnly: BindingFlags;
  readonly instance: BindingFlags;
  readonly static: BindingFlags;
  readonly public: BindingFlags;
  readonly nonPublic: BindingFlags;
  readonly flattenHierarchy: BindingFlags;
  readonly invokeMethod: BindingFlags;
  readonly createInstance: BindingFlags;
  readonly getField: BindingFlags;
  readonly setField: BindingFlags;
  readonly getProperty: BindingFlags;
  readonly setProperty: BindingFlags;
  readonly putDispProperty: BindingFlags;
  readonly putRefDispProperty: BindingFlags;
  readonly exactBinding: BindingFlags;
  readonly suppressChangeType: BindingFlags;
  readonly optionalParamBinding: BindingFlags;
  readonly ignoreReturn: BindingFlags;
  readonly doNotWrapExceptions: BindingFlags;
}

export {};
