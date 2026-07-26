import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const processorArchitectureBrand: unique symbol;
export interface ProcessorArchitecture extends ClrHostValue {
  readonly [processorArchitectureBrand]: true;
}

declare global {
  namespace System.Reflection {
    type ProcessorArchitecture = import("./ProcessorArchitecture").ProcessorArchitecture;
  }
}

export interface ProcessorArchitectureHostType extends HostType<
  ProcessorArchitecture,
  EnumTypeTrait
> {
  readonly none: ProcessorArchitecture;
  readonly msil: ProcessorArchitecture;
  readonly x86: ProcessorArchitecture;
  readonly iA64: ProcessorArchitecture;
  readonly amd64: ProcessorArchitecture;
  readonly arm: ProcessorArchitecture;
}

export {};
