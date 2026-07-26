import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const histogramNormTypeBrand: unique symbol;
export interface HistogramNormType extends ClrHostValue {
  readonly [histogramNormTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HistogramNormType = import("./HistogramNormType").HistogramNormType;
  }
}

export interface HistogramNormTypeHostType extends HostType<HistogramNormType, EnumTypeTrait> {
  readonly l2Hys: HistogramNormType;
}

export {};
