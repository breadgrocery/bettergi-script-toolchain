import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const distributionTypeBrand: unique symbol;
export interface DistributionType extends ClrHostValue {
  readonly [distributionTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DistributionType = import("./DistributionType").DistributionType;
  }
}

export interface DistributionTypeHostType extends HostType<DistributionType, EnumTypeTrait> {
  readonly uniform: DistributionType;
  readonly normal: DistributionType;
}

export {};
