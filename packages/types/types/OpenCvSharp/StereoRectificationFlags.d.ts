import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const stereoRectificationFlagsBrand: unique symbol;
export interface StereoRectificationFlags extends ClrHostValue {
  readonly [stereoRectificationFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type StereoRectificationFlags = import("./StereoRectificationFlags").StereoRectificationFlags;
  }
}

export interface StereoRectificationFlagsHostType extends HostType<
  StereoRectificationFlags,
  EnumTypeTrait
> {
  readonly none: StereoRectificationFlags;
  readonly zeroDisparity: StereoRectificationFlags;
}

export {};
