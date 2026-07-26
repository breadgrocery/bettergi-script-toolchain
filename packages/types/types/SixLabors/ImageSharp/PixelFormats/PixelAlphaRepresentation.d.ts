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

declare const pixelAlphaRepresentationBrand: unique symbol;
export interface PixelAlphaRepresentation extends ClrHostValue {
  readonly [pixelAlphaRepresentationBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type PixelAlphaRepresentation = import("./PixelAlphaRepresentation").PixelAlphaRepresentation;
  }
}

export interface PixelAlphaRepresentationHostType extends HostType<
  PixelAlphaRepresentation,
  EnumTypeTrait
> {
  readonly none: PixelAlphaRepresentation;
  readonly associated: PixelAlphaRepresentation;
  readonly unassociated: PixelAlphaRepresentation;
}

export {};
