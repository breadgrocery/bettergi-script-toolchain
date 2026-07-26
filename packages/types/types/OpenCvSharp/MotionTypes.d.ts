import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const motionTypesBrand: unique symbol;
export interface MotionTypes extends ClrHostValue {
  readonly [motionTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MotionTypes = import("./MotionTypes").MotionTypes;
  }
}

export interface MotionTypesHostType extends HostType<MotionTypes, EnumTypeTrait> {
  readonly translation: MotionTypes;
  readonly euclidean: MotionTypes;
  readonly affine: MotionTypes;
  readonly homography: MotionTypes;
}

export {};
