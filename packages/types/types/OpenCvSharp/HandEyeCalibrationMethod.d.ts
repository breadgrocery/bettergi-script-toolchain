import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const handEyeCalibrationMethodBrand: unique symbol;
export interface HandEyeCalibrationMethod extends ClrHostValue {
  readonly [handEyeCalibrationMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HandEyeCalibrationMethod = import("./HandEyeCalibrationMethod").HandEyeCalibrationMethod;
  }
}

export interface HandEyeCalibrationMethodHostType extends HostType<
  HandEyeCalibrationMethod,
  EnumTypeTrait
> {
  readonly tsai: HandEyeCalibrationMethod;
  readonly park: HandEyeCalibrationMethod;
  readonly horaud: HandEyeCalibrationMethod;
  readonly andreff: HandEyeCalibrationMethod;
  readonly daniilidis: HandEyeCalibrationMethod;
}

export {};
