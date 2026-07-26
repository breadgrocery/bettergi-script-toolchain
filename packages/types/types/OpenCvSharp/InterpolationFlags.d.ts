import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const interpolationFlagsBrand: unique symbol;
export interface InterpolationFlags extends ClrHostValue {
  readonly [interpolationFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type InterpolationFlags = import("./InterpolationFlags").InterpolationFlags;
  }
}

export interface InterpolationFlagsHostType extends HostType<InterpolationFlags, EnumTypeTrait> {
  readonly nearest: InterpolationFlags;
  readonly linear: InterpolationFlags;
  readonly cubic: InterpolationFlags;
  readonly area: InterpolationFlags;
  readonly lanczos4: InterpolationFlags;
  readonly linearExact: InterpolationFlags;
  readonly max: InterpolationFlags;
  readonly warpFillOutliers: InterpolationFlags;
  readonly warpInverseMap: InterpolationFlags;
}

export {};
