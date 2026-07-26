import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const kAZEDiffusivityTypeBrand: unique symbol;
export interface KAZEDiffusivityType extends ClrHostValue {
  readonly [kAZEDiffusivityTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type KAZEDiffusivityType = import("./KAZEDiffusivityType").KAZEDiffusivityType;
  }
}

export interface KAZEDiffusivityTypeHostType extends HostType<KAZEDiffusivityType, EnumTypeTrait> {
  readonly diffPmG1: KAZEDiffusivityType;
  readonly diffPmG2: KAZEDiffusivityType;
  readonly diffWeickert: KAZEDiffusivityType;
  readonly diffCharbonnier: KAZEDiffusivityType;
}

export {};
