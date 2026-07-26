import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const kMeansFlagsBrand: unique symbol;
export interface KMeansFlags extends ClrHostValue {
  readonly [kMeansFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type KMeansFlags = import("./KMeansFlags").KMeansFlags;
  }
}

export interface KMeansFlagsHostType extends HostType<KMeansFlags, EnumTypeTrait> {
  readonly randomCenters: KMeansFlags;
  readonly ppCenters: KMeansFlags;
  readonly useInitialLabels: KMeansFlags;
}

export {};
