import type {
  ClrHostValue,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import "../../../System/Nullable";
import "../PixelFormats/PixelAlphaRepresentation";

declare const pixelTypeInfoBrand: unique symbol;
export interface PixelTypeInfo extends ClrHostValue {
  readonly [pixelTypeInfoBrand]: true;
  readonly bitsPerPixel: number;
  readonly alphaRepresentation: SixLabors.ImageSharp.PixelFormats.PixelAlphaRepresentation | null;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type PixelTypeInfo = import("./PixelTypeInfo").PixelTypeInfo;
  }
}

export interface PixelTypeInfoHostType extends HostType<PixelTypeInfo, ReferenceTypeTrait> {
  new (bitsPerPixel: number | StrongNumeric<Int32Host>): PixelTypeInfo;
  new (
    bitsPerPixel: number | StrongNumeric<Int32Host>,
    alpha: EnumInput<SixLabors.ImageSharp.PixelFormats.PixelAlphaRepresentation>
  ): PixelTypeInfo;
}

export {};
