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

declare const assemblyHashAlgorithmBrand: unique symbol;
export interface AssemblyHashAlgorithm extends ClrHostValue {
  readonly [assemblyHashAlgorithmBrand]: true;
}

declare global {
  namespace System.Configuration.Assemblies {
    type AssemblyHashAlgorithm = import("./AssemblyHashAlgorithm").AssemblyHashAlgorithm;
  }
}

export interface AssemblyHashAlgorithmHostType extends HostType<
  AssemblyHashAlgorithm,
  EnumTypeTrait
> {
  readonly none: AssemblyHashAlgorithm;
  readonly mD5: AssemblyHashAlgorithm;
  readonly shA1: AssemblyHashAlgorithm;
  readonly shA256: AssemblyHashAlgorithm;
  readonly shA384: AssemblyHashAlgorithm;
  readonly shA512: AssemblyHashAlgorithm;
}

export {};
