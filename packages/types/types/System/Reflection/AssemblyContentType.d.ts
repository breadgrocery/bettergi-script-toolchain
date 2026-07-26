import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const assemblyContentTypeBrand: unique symbol;
export interface AssemblyContentType extends ClrHostValue {
  readonly [assemblyContentTypeBrand]: true;
}

declare global {
  namespace System.Reflection {
    type AssemblyContentType = import("./AssemblyContentType").AssemblyContentType;
  }
}

export interface AssemblyContentTypeHostType extends HostType<AssemblyContentType, EnumTypeTrait> {
  readonly default: AssemblyContentType;
  readonly windowsRuntime: AssemblyContentType;
}

export {};
