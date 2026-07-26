import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const calibrationFlagsBrand: unique symbol;
export interface CalibrationFlags extends ClrHostValue {
  readonly [calibrationFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CalibrationFlags = import("./CalibrationFlags").CalibrationFlags;
  }
}

export interface CalibrationFlagsHostType extends HostType<CalibrationFlags, EnumTypeTrait> {
  readonly none: CalibrationFlags;
  readonly useIntrinsicGuess: CalibrationFlags;
  readonly fixAspectRatio: CalibrationFlags;
  readonly fixPrincipalPoint: CalibrationFlags;
  readonly zeroTangentDist: CalibrationFlags;
  readonly fixFocalLength: CalibrationFlags;
  readonly fixK1: CalibrationFlags;
  readonly fixK2: CalibrationFlags;
  readonly fixK3: CalibrationFlags;
  readonly fixK4: CalibrationFlags;
  readonly fixK5: CalibrationFlags;
  readonly fixK6: CalibrationFlags;
  readonly rationalModel: CalibrationFlags;
  readonly thinPrismModel: CalibrationFlags;
  readonly fixS1S2S3S4: CalibrationFlags;
  readonly fixIntrinsic: CalibrationFlags;
  readonly sameFocalLength: CalibrationFlags;
  readonly zeroDisparity: CalibrationFlags;
}

export {};
