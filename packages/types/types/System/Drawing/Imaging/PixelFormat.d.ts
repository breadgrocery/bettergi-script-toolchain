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

declare const pixelFormatBrand: unique symbol;
export interface PixelFormat extends ClrHostValue {
  readonly [pixelFormatBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type PixelFormat = import("./PixelFormat").PixelFormat;
  }
}

export interface PixelFormatHostType extends HostType<PixelFormat, EnumTypeTrait> {
  readonly indexed: PixelFormat;
  readonly gdi: PixelFormat;
  readonly alpha: PixelFormat;
  readonly pAlpha: PixelFormat;
  readonly extended: PixelFormat;
  readonly canonical: PixelFormat;
  readonly undefined: PixelFormat;
  readonly dontCare: PixelFormat;
  readonly format1bppIndexed: PixelFormat;
  readonly format4bppIndexed: PixelFormat;
  readonly format8bppIndexed: PixelFormat;
  readonly format16bppGrayScale: PixelFormat;
  readonly format16bppRgb555: PixelFormat;
  readonly format16bppRgb565: PixelFormat;
  readonly format16bppArgb1555: PixelFormat;
  readonly format24bppRgb: PixelFormat;
  readonly format32bppRgb: PixelFormat;
  readonly format32bppArgb: PixelFormat;
  readonly format32bppPArgb: PixelFormat;
  readonly format48bppRgb: PixelFormat;
  readonly format64bppArgb: PixelFormat;
  readonly format64bppPArgb: PixelFormat;
  readonly max: PixelFormat;
}

export {};
