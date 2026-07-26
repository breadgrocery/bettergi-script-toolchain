import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const fishEyeCalibrationFlagsBrand: unique symbol;
export interface FishEyeCalibrationFlags extends ClrHostValue {
  readonly [fishEyeCalibrationFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FishEyeCalibrationFlags = import("./FishEyeCalibrationFlags").FishEyeCalibrationFlags;
  }
}

export interface FishEyeCalibrationFlagsHostType extends HostType<
  FishEyeCalibrationFlags,
  EnumTypeTrait
> {
  readonly none: FishEyeCalibrationFlags;
  readonly useIntrinsicGuess: FishEyeCalibrationFlags;
  readonly recomputeExtrinsic: FishEyeCalibrationFlags;
  readonly checkCond: FishEyeCalibrationFlags;
  readonly fixSkew: FishEyeCalibrationFlags;
  readonly fixK1: FishEyeCalibrationFlags;
  readonly fixK2: FishEyeCalibrationFlags;
  readonly fixK3: FishEyeCalibrationFlags;
  readonly fixK4: FishEyeCalibrationFlags;
  readonly fixIntrinsic: FishEyeCalibrationFlags;
  readonly fixPrincipalPoint: FishEyeCalibrationFlags;
}

export {};
