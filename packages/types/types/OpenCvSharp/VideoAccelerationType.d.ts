import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const videoAccelerationTypeBrand: unique symbol;
export interface VideoAccelerationType extends ClrHostValue {
  readonly [videoAccelerationTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type VideoAccelerationType = import("./VideoAccelerationType").VideoAccelerationType;
  }
}

export interface VideoAccelerationTypeHostType extends HostType<
  VideoAccelerationType,
  EnumTypeTrait
> {
  readonly none: VideoAccelerationType;
  readonly any: VideoAccelerationType;
  readonly d3D11: VideoAccelerationType;
  readonly vaapi: VideoAccelerationType;
  readonly mfx: VideoAccelerationType;
}

export {};
