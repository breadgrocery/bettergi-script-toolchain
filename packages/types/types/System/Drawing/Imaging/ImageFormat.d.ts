import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Guid";

declare const imageFormatBrand: unique symbol;
export interface ImageFormat extends ClrHostValue {
  readonly [imageFormatBrand]: true;
  equals(o: unknown | null): boolean;
  getHashCode(): number;
  readonly guid: System.Guid;
  toString(): string;
}

declare global {
  namespace System.Drawing.Imaging {
    type ImageFormat = import("./ImageFormat").ImageFormat;
  }
}

export interface ImageFormatHostType extends HostType<ImageFormat, ReferenceTypeTrait> {
  new (guid: System.Guid): ImageFormat;
  readonly memoryBmp: System.Drawing.Imaging.ImageFormat;
  readonly bmp: System.Drawing.Imaging.ImageFormat;
  readonly emf: System.Drawing.Imaging.ImageFormat;
  readonly wmf: System.Drawing.Imaging.ImageFormat;
  readonly gif: System.Drawing.Imaging.ImageFormat;
  readonly jpeg: System.Drawing.Imaging.ImageFormat;
  readonly png: System.Drawing.Imaging.ImageFormat;
  readonly tiff: System.Drawing.Imaging.ImageFormat;
  readonly exif: System.Drawing.Imaging.ImageFormat;
  readonly icon: System.Drawing.Imaging.ImageFormat;
  readonly heif: System.Drawing.Imaging.ImageFormat;
  readonly webp: System.Drawing.Imaging.ImageFormat;
}

export {};
