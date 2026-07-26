import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const distanceTransformMasksBrand: unique symbol;
export interface DistanceTransformMasks extends ClrHostValue {
  readonly [distanceTransformMasksBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DistanceTransformMasks = import("./DistanceTransformMasks").DistanceTransformMasks;
  }
}

export interface DistanceTransformMasksHostType extends HostType<
  DistanceTransformMasks,
  EnumTypeTrait
> {
  readonly mask3: DistanceTransformMasks;
  readonly mask5: DistanceTransformMasks;
  readonly precise: DistanceTransformMasks;
}

export {};
