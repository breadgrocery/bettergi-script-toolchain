import type {
  ClrHostValue,
  EnumInput,
  FamilyArgumentOmitted,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Numerics/Vector4";
import "../Configuration";
import "../Formats/PixelTypeInfo";
import "../GraphicsOptions";
import "./Abgr32";
import "./Argb32";
import "./Bgr24";
import "./Bgra32";
import "./Bgra5551";
import "./L8";
import "./L16";
import "./La16";
import "./La32";
import "./PixelAlphaCompositionMode";
import "./PixelBlender{TPixel}";
import "./PixelColorBlendingMode";
import "./Rgb24";
import "./Rgb48";
import "./Rgba32";
import "./Rgba64";

declare const pixelOperationsArity1Brand: unique symbol;
export interface _PixelOperationsArity1<TPixel> extends ClrHostValue {
  readonly [pixelOperationsArity1Brand]: true;
  getPixelBlender(
    colorMode: EnumInput<SixLabors.ImageSharp.PixelFormats.PixelColorBlendingMode>,
    alphaMode: EnumInput<SixLabors.ImageSharp.PixelFormats.PixelAlphaCompositionMode>
  ): SixLabors.ImageSharp.PixelFormats.PixelBlender<TPixel>;
  getPixelBlender(
    options: SixLabors.ImageSharp.GraphicsOptions
  ): SixLabors.ImageSharp.PixelFormats.PixelBlender<TPixel>;
  getPixelTypeInfo(): SixLabors.ImageSharp.Formats.PixelTypeInfo;
}

export interface _PixelOperationsArity1HostType<TPixel> extends HostType<
  _PixelOperationsArity1<TPixel>,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): _PixelOperationsArity1<TPixel>;
  readonly instance: SixLabors.ImageSharp.PixelFormats.PixelOperations;
}

export type PixelOperationsFamily<T1 = FamilyArgumentOmitted> = _PixelOperationsArity1<T1>;

declare global {
  namespace SixLabors.ImageSharp.PixelFormats {
    type PixelOperations<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./PixelOperations{TPixel}").PixelOperationsFamily<T1>;
  }
}

export type PixelOperationsHostType<T1> = _PixelOperationsArity1HostType<T1>;

export {};
