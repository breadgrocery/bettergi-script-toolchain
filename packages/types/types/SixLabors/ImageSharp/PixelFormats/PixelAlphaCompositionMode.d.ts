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

declare const pixelAlphaCompositionModeBrand: unique symbol;
export interface PixelAlphaCompositionMode extends ClrHostValue {
  readonly [pixelAlphaCompositionModeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type PixelAlphaCompositionMode =
      import("./PixelAlphaCompositionMode").PixelAlphaCompositionMode;
  }
}

export interface PixelAlphaCompositionModeHostType extends HostType<
  PixelAlphaCompositionMode,
  EnumTypeTrait
> {
  readonly srcOver: PixelAlphaCompositionMode;
  readonly src: PixelAlphaCompositionMode;
  readonly srcAtop: PixelAlphaCompositionMode;
  readonly srcIn: PixelAlphaCompositionMode;
  readonly srcOut: PixelAlphaCompositionMode;
  readonly dest: PixelAlphaCompositionMode;
  readonly destAtop: PixelAlphaCompositionMode;
  readonly destOver: PixelAlphaCompositionMode;
  readonly destIn: PixelAlphaCompositionMode;
  readonly destOut: PixelAlphaCompositionMode;
  readonly clear: PixelAlphaCompositionMode;
  readonly xor: PixelAlphaCompositionMode;
}

export {};
