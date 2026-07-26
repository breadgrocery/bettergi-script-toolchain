import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const contourApproximationModesBrand: unique symbol;
export interface ContourApproximationModes extends ClrHostValue {
  readonly [contourApproximationModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ContourApproximationModes =
      import("./ContourApproximationModes").ContourApproximationModes;
  }
}

export interface ContourApproximationModesHostType extends HostType<
  ContourApproximationModes,
  EnumTypeTrait
> {
  readonly approxNone: ContourApproximationModes;
  readonly approxSimple: ContourApproximationModes;
  readonly approxTC89L1: ContourApproximationModes;
  readonly approxTC89KCOS: ContourApproximationModes;
}

export {};
