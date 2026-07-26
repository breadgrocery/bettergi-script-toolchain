import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const thresholdTypesBrand: unique symbol;
export interface ThresholdTypes extends ClrHostValue {
  readonly [thresholdTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ThresholdTypes = import("./ThresholdTypes").ThresholdTypes;
  }
}

export interface ThresholdTypesHostType extends HostType<ThresholdTypes, EnumTypeTrait> {
  readonly binary: ThresholdTypes;
  readonly binaryInv: ThresholdTypes;
  readonly trunc: ThresholdTypes;
  readonly tozero: ThresholdTypes;
  readonly tozeroInv: ThresholdTypes;
  readonly mask: ThresholdTypes;
  readonly otsu: ThresholdTypes;
  readonly triangle: ThresholdTypes;
}

export {};
