import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import "../Formats/IImageFormat";
import "../IDeepCloneable";
import "./Profiles/Cicp/CicpProfile";
import "./Profiles/Exif/ExifProfile";
import "./Profiles/Icc/IccProfile";
import "./Profiles/Iptc/IptcProfile";
import "./Profiles/Xmp/XmpProfile";

declare const imageFrameMetadataBrand: unique symbol;
export interface ImageFrameMetadata extends ClrHostValue {
  readonly [imageFrameMetadataBrand]: true;
  exifProfile: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifProfile;
  xmpProfile: SixLabors.ImageSharp.Metadata.Profiles.Xmp.XmpProfile;
  iccProfile: SixLabors.ImageSharp.Metadata.Profiles.Icc.IccProfile;
  iptcProfile: SixLabors.ImageSharp.Metadata.Profiles.Iptc.IptcProfile;
  cicpProfile: SixLabors.ImageSharp.Metadata.Profiles.Cicp.CicpProfile;
  deepClone(): SixLabors.ImageSharp.Metadata.ImageFrameMetadata;
  getFormatMetadata<TFormatMetadata, TFormatFrameMetadata>(
    type1: HostType<TFormatMetadata>,
    type2: HostType<TFormatFrameMetadata>,
    key: SixLabors.ImageSharp.Formats.IImageFormat<TFormatMetadata, TFormatFrameMetadata>
  ): TFormatFrameMetadata;
  tryGetFormatMetadata<TFormatMetadata, TFormatFrameMetadata>(
    type1: HostType<TFormatMetadata>,
    type2: HostType<TFormatFrameMetadata>,
    key: SixLabors.ImageSharp.Formats.IImageFormat<TFormatMetadata, TFormatFrameMetadata>,
    metadata: HostVariableOut<TFormatFrameMetadata>
  ): boolean;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata {
    type ImageFrameMetadata = import("./ImageFrameMetadata").ImageFrameMetadata;
  }
}

export interface ImageFrameMetadataHostType extends HostType<
  ImageFrameMetadata,
  ReferenceTypeTrait
> {}

export {};
