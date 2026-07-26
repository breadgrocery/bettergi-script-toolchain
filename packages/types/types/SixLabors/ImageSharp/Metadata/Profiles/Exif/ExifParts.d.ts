import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Enum";
import "../../../../../System/IComparable";
import "../../../../../System/IConvertible";
import "../../../../../System/IFormattable";
import "../../../../../System/ISpanFormattable";

declare const exifPartsBrand: unique symbol;
export interface ExifParts extends ClrHostValue {
  readonly [exifPartsBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type ExifParts = import("./ExifParts").ExifParts;
  }
}

export interface ExifPartsHostType extends HostType<ExifParts, EnumTypeTrait> {
  readonly none: ExifParts;
  readonly ifdTags: ExifParts;
  readonly exifTags: ExifParts;
  readonly gpsTags: ExifParts;
  readonly all: ExifParts;
}

export {};
