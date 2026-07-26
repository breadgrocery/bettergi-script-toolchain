import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const distanceTransformLabelTypesBrand: unique symbol;
export interface DistanceTransformLabelTypes extends ClrHostValue {
  readonly [distanceTransformLabelTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DistanceTransformLabelTypes =
      import("./DistanceTransformLabelTypes").DistanceTransformLabelTypes;
  }
}

export interface DistanceTransformLabelTypesHostType extends HostType<
  DistanceTransformLabelTypes,
  EnumTypeTrait
> {
  readonly cComp: DistanceTransformLabelTypes;
  readonly pixel: DistanceTransformLabelTypes;
}

export {};
