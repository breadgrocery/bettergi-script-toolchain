import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const robotWorldHandEyeCalibrationMethodBrand: unique symbol;
export interface RobotWorldHandEyeCalibrationMethod extends ClrHostValue {
  readonly [robotWorldHandEyeCalibrationMethodBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type RobotWorldHandEyeCalibrationMethod =
      import("./RobotWorldHandEyeCalibrationMethod").RobotWorldHandEyeCalibrationMethod;
  }
}

export interface RobotWorldHandEyeCalibrationMethodHostType extends HostType<
  RobotWorldHandEyeCalibrationMethod,
  EnumTypeTrait
> {
  readonly shah: RobotWorldHandEyeCalibrationMethod;
  readonly li: RobotWorldHandEyeCalibrationMethod;
}

export {};
