import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const interpolationModeBrand: unique symbol;
export interface InterpolationMode extends ClrHostValue {
  readonly [interpolationModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type InterpolationMode = import("./InterpolationMode").InterpolationMode;
  }
}

export interface InterpolationModeHostType extends HostType<InterpolationMode, EnumTypeTrait> {
  readonly invalid: InterpolationMode;
  readonly default: InterpolationMode;
  readonly low: InterpolationMode;
  readonly high: InterpolationMode;
  readonly bilinear: InterpolationMode;
  readonly bicubic: InterpolationMode;
  readonly nearestNeighbor: InterpolationMode;
  readonly highQualityBilinear: InterpolationMode;
  readonly highQualityBicubic: InterpolationMode;
}

export {};
