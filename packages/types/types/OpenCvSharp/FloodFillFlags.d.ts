import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const floodFillFlagsBrand: unique symbol;
export interface FloodFillFlags extends ClrHostValue {
  readonly [floodFillFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FloodFillFlags = import("./FloodFillFlags").FloodFillFlags;
  }
}

export interface FloodFillFlagsHostType extends HostType<FloodFillFlags, EnumTypeTrait> {
  readonly link4: FloodFillFlags;
  readonly link8: FloodFillFlags;
  readonly fixedRange: FloodFillFlags;
  readonly maskOnly: FloodFillFlags;
}

export {};
