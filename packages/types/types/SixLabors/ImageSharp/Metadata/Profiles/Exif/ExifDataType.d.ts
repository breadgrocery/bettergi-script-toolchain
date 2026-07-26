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

declare const exifDataTypeBrand: unique symbol;
export interface ExifDataType extends ClrHostValue {
  readonly [exifDataTypeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Exif {
    type ExifDataType = import("./ExifDataType").ExifDataType;
  }
}

export interface ExifDataTypeHostType extends HostType<ExifDataType, EnumTypeTrait> {
  readonly unknown: ExifDataType;
  readonly byte: ExifDataType;
  readonly ascii: ExifDataType;
  readonly short: ExifDataType;
  readonly long: ExifDataType;
  readonly rational: ExifDataType;
  readonly signedByte: ExifDataType;
  readonly undefined: ExifDataType;
  readonly signedShort: ExifDataType;
  readonly signedLong: ExifDataType;
  readonly signedRational: ExifDataType;
  readonly singleFloat: ExifDataType;
  readonly doubleFloat: ExifDataType;
  readonly ifd: ExifDataType;
  readonly long8: ExifDataType;
  readonly signedLong8: ExifDataType;
  readonly ifd8: ExifDataType;
}

export {};
