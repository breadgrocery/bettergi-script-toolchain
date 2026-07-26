import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const formatTypeBrand: unique symbol;
export interface FormatType extends ClrHostValue {
  readonly [formatTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FormatType = import("./FormatType").FormatType;
  }
}

export interface FormatTypeHostType extends HostType<FormatType, EnumTypeTrait> {
  readonly default: FormatType;
  readonly matlab: FormatType;
  readonly csv: FormatType;
  readonly python: FormatType;
  readonly numPy: FormatType;
  readonly c: FormatType;
}

export {};
