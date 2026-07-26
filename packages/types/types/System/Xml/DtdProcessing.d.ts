import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const dtdProcessingBrand: unique symbol;
export interface DtdProcessing extends ClrHostValue {
  readonly [dtdProcessingBrand]: true;
}

declare global {
  namespace System.Xml {
    type DtdProcessing = import("./DtdProcessing").DtdProcessing;
  }
}

export interface DtdProcessingHostType extends HostType<DtdProcessing, EnumTypeTrait> {
  readonly prohibit: DtdProcessing;
  readonly ignore: DtdProcessing;
  readonly parse: DtdProcessing;
}

export {};
