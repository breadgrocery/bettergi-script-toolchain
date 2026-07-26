import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const rotateFlagsBrand: unique symbol;
export interface RotateFlags extends ClrHostValue {
  readonly [rotateFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type RotateFlags = import("./RotateFlags").RotateFlags;
  }
}

export interface RotateFlagsHostType extends HostType<RotateFlags, EnumTypeTrait> {
  readonly rotate90Clockwise: RotateFlags;
  readonly rotate180: RotateFlags;
  readonly rotate90Counterclockwise: RotateFlags;
}

export {};
