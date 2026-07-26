import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";

declare const pixelColorBlendingModeBrand: unique symbol;
export interface PixelColorBlendingMode extends ClrHostValue {
  readonly [pixelColorBlendingModeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type PixelColorBlendingMode = import("./PixelColorBlendingMode").PixelColorBlendingMode;
  }
}

export interface PixelColorBlendingModeHostType extends HostType<
  PixelColorBlendingMode,
  EnumTypeTrait
> {
  readonly normal: PixelColorBlendingMode;
  readonly multiply: PixelColorBlendingMode;
  readonly add: PixelColorBlendingMode;
  readonly subtract: PixelColorBlendingMode;
  readonly screen: PixelColorBlendingMode;
  readonly darken: PixelColorBlendingMode;
  readonly lighten: PixelColorBlendingMode;
  readonly overlay: PixelColorBlendingMode;
  readonly hardLight: PixelColorBlendingMode;
}

export {};
