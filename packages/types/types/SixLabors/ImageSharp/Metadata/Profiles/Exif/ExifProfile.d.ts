import type {
  ByteHost,
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../../../Microsoft/ClearScript/VoidResult";
import "../../../../../System/Collections/Generic/IReadOnlyList";
import "../../../IDeepCloneable";
import "../../../Image";
import "./ExifParts";
import "./ExifTag";
import "./IExifValue";

declare const exifProfileBrand: unique symbol;
export interface ExifProfile extends ClrHostValue {
  readonly [exifProfileBrand]: true;
  parts: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifParts;
  readonly invalidTags: System.Collections.Generic.IReadOnlyList<SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag>;
  readonly values: System.Collections.Generic.IReadOnlyList<SixLabors.ImageSharp.Metadata.Profiles.Exif.IExifValue>;
  tryCreateThumbnail(image: HostVariableOut<SixLabors.ImageSharp.Image>): boolean;
  tryCreateThumbnail<TPixel>(
    type1: HostType<TPixel>,
    image: HostVariableOut<SixLabors.ImageSharp.Image<TPixel>>
  ): boolean;
  tryGetValue<TValueType>(
    type1: HostType<TValueType>,
    tag: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<TValueType>,
    exifValue: HostVariableOut<SixLabors.ImageSharp.Metadata.Profiles.Exif.IExifValue<TValueType>>
  ): boolean;
  removeValue(tag: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag): boolean;
  setValue<TValueType>(
    type1: HostType<TValueType>,
    tag: SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifTag<TValueType>,
    value: TValueType | null
  ): VoidResult;
  toByteArray(): HostArray<number>;
  deepClone(): SixLabors.ImageSharp.Metadata.Profiles.Exif.ExifProfile;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type ExifProfile = import("./ExifProfile").ExifProfile;
  }
}

export interface ExifProfileHostType extends HostType<
  ExifProfile,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ExifProfile;
  new (data: HostArray<number | StrongNumeric<ByteHost>> | null): ExifProfile;
}

export {};
