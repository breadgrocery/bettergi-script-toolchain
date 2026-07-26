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

declare const pixelResolutionUnitBrand: unique symbol;
export interface PixelResolutionUnit extends ClrHostValue {
  readonly [pixelResolutionUnitBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata {
    type PixelResolutionUnit = import("./PixelResolutionUnit").PixelResolutionUnit;
  }
}

export interface PixelResolutionUnitHostType extends HostType<PixelResolutionUnit, EnumTypeTrait> {
  readonly aspectRatio: PixelResolutionUnit;
  readonly pixelsPerInch: PixelResolutionUnit;
  readonly pixelsPerCentimeter: PixelResolutionUnit;
  readonly pixelsPerMeter: PixelResolutionUnit;
}

export {};
