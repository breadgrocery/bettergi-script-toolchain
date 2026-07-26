import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const assemblyNameFlagsBrand: unique symbol;
export interface AssemblyNameFlags extends ClrHostValue {
  readonly [assemblyNameFlagsBrand]: true;
}

declare global {
  namespace System.Reflection {
    type AssemblyNameFlags = import("./AssemblyNameFlags").AssemblyNameFlags;
  }
}

export interface AssemblyNameFlagsHostType extends HostType<AssemblyNameFlags, EnumTypeTrait> {
  readonly none: AssemblyNameFlags;
  readonly publicKey: AssemblyNameFlags;
  readonly enableJITcompileOptimizer: AssemblyNameFlags;
  readonly enableJITcompileTracking: AssemblyNameFlags;
  readonly retargetable: AssemblyNameFlags;
}

export {};
