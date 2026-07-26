import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import "../Formats/IImageFormat";
import "../IDeepCloneable";
import "./PixelResolutionUnit";
import "./Profiles/Cicp/CicpProfile";
import "./Profiles/Exif/ExifProfile";
import "./Profiles/Icc/IccProfile";
import "./Profiles/Iptc/IptcProfile";
import "./Profiles/Xmp/XmpProfile";

declare const imageMetadataBrand: unique symbol;
export interface ImageMetadata extends ClrHostValue {
  readonly [imageMetadataBrand]: true;
  horizontalResolution: number;
  verticalResolution: number;
  resolutionUnits: SixLabors.ImageSharp.Metadata.PixelResolutionUnit;
  exifProfile: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifProfile;
  xmpProfile: SixLabors.ImageSharp.Metadata.Profiles.Xmp.XmpProfile;
  iccProfile: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfile;
  iptcProfile: SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcProfile;
  cicpProfile: SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpProfile;
  readonly decodedImageFormat: SixLabors.ImageSharp.Formats.IImageFormat;
  getFormatMetadata<TFormatMetadata>(
    type1: HostType<TFormatMetadata>,
    key: SixLabors.ImageSharp.Formats.IImageFormat<TFormatMetadata>
  ): TFormatMetadata;
  tryGetFormatMetadata<TFormatMetadata>(
    type1: HostType<TFormatMetadata>,
    key: SixLabors.ImageSharp.Formats.IImageFormat<TFormatMetadata>,
    metadata: HostVariableOut<TFormatMetadata>
  ): boolean;
  deepClone(): SixLabors.ImageSharp.Metadata.ImageMetadata;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata {
    type ImageMetadata = import("./ImageMetadata").ImageMetadata;
  }
}

export interface ImageMetadataHostType extends HostType<
  ImageMetadata,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ImageMetadata;
  readonly defaultHorizontalResolution: number;
  readonly defaultVerticalResolution: number;
  readonly defaultPixelResolutionUnits: SixLabors.ImageSharp.Metadata.PixelResolutionUnit;
}

export {};
