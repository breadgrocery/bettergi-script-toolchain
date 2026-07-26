import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const haarDetectionTypesBrand: unique symbol;
export interface HaarDetectionTypes extends ClrHostValue {
  readonly [haarDetectionTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HaarDetectionTypes = import("./HaarDetectionTypes").HaarDetectionTypes;
  }
}

export interface HaarDetectionTypesHostType extends HostType<HaarDetectionTypes, EnumTypeTrait> {
  readonly doCannyPruning: HaarDetectionTypes;
  readonly scaleImage: HaarDetectionTypes;
  readonly findBiggestObject: HaarDetectionTypes;
  readonly doRoughSearch: HaarDetectionTypes;
}

export {};
