import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const assemblyVersionCompatibilityBrand: unique symbol;
export interface AssemblyVersionCompatibility extends ClrHostValue {
  readonly [assemblyVersionCompatibilityBrand]: true;
}

declare global {
  namespace System.Configuration.Assemblies {
    type AssemblyVersionCompatibility =
      import("./AssemblyVersionCompatibility").AssemblyVersionCompatibility;
  }
}

export interface AssemblyVersionCompatibilityHostType extends HostType<
  AssemblyVersionCompatibility,
  EnumTypeTrait
> {
  readonly sameMachine: AssemblyVersionCompatibility;
  readonly sameProcess: AssemblyVersionCompatibility;
  readonly sameDomain: AssemblyVersionCompatibility;
}

export {};
