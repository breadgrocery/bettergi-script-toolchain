import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Collections/Generic/IReadOnlyList";
import "./Formats/PixelTypeInfo";
import "./Metadata/ImageFrameMetadata";
import "./Metadata/ImageMetadata";
import "./Rectangle";
import "./Size";

declare const imageInfoBrand: unique symbol;
export interface ImageInfo extends ClrHostValue {
  readonly [imageInfoBrand]: true;
  readonly pixelType: SixLabors.ImageSharp.Formats.PixelTypeInfo;
  readonly width: number;
  readonly height: number;
  readonly metadata: SixLabors.ImageSharp.Metadata.ImageMetadata;
  readonly frameMetadataCollection: System.Collections.Generic.IReadOnlyList<SixLabors.ImageSharp.Metadata.ImageFrameMetadata>;
  readonly size: SixLabors.ImageSharp.Size;
  readonly bounds: SixLabors.ImageSharp.Rectangle;
}

declare global {
  namespace SixLabors.ImageSharp {
    type ImageInfo = import("./ImageInfo").ImageInfo;
  }
}

export interface ImageInfoHostType extends HostType<ImageInfo, ReferenceTypeTrait> {
  new (
    pixelType: SixLabors.ImageSharp.Formats.PixelTypeInfo,
    size: SixLabors.ImageSharp.Size,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata | null
  ): ImageInfo;
  new (
    pixelType: SixLabors.ImageSharp.Formats.PixelTypeInfo,
    size: SixLabors.ImageSharp.Size,
    metadata: SixLabors.ImageSharp.Metadata.ImageMetadata | null,
    frameMetadataCollection: System.Collections.Generic.IReadOnlyList<SixLabors.ImageSharp.Metadata.ImageFrameMetadata> | null
  ): ImageInfo;
}

export {};
