import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const adaptiveThresholdTypesBrand: unique symbol;
export interface AdaptiveThresholdTypes extends ClrHostValue {
  readonly [adaptiveThresholdTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type AdaptiveThresholdTypes = import("./AdaptiveThresholdTypes").AdaptiveThresholdTypes;
  }
}

export interface AdaptiveThresholdTypesHostType extends HostType<
  AdaptiveThresholdTypes,
  EnumTypeTrait
> {
  readonly meanC: AdaptiveThresholdTypes;
  readonly gaussianC: AdaptiveThresholdTypes;
}

export {};
