import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/Collections/Generic/IEnumerable";
import "./IImageDecoder";
import "./IImageEncoder";
import "./IImageFormat";
import "./IImageFormatDetector";

declare const imageFormatManagerBrand: unique symbol;
export interface ImageFormatManager extends ClrHostValue {
  readonly [imageFormatManagerBrand]: true;
  readonly imageFormats: System.Collections.Generic.IEnumerable<SixLabors.ImageSharp.Formats.IImageFormat>;
  addImageFormat(format: SixLabors.ImageSharp.Formats.IImageFormat): VoidResult;
  tryFindFormatByFileExtension(
    extension: string,
    format: HostVariableOut<SixLabors.ImageSharp.Formats.IImageFormat>
  ): boolean;
  tryFindFormatByMimeType(
    mimeType: string,
    format: HostVariableOut<SixLabors.ImageSharp.Formats.IImageFormat>
  ): boolean;
  setEncoder(
    imageFormat: SixLabors.ImageSharp.Formats.IImageFormat,
    encoder: SixLabors.ImageSharp.Formats.IImageEncoder
  ): VoidResult;
  setDecoder(
    imageFormat: SixLabors.ImageSharp.Formats.IImageFormat,
    decoder: SixLabors.ImageSharp.Formats.IImageDecoder
  ): VoidResult;
  clearImageFormatDetectors(): VoidResult;
  addImageFormatDetector(detector: SixLabors.ImageSharp.Formats.IImageFormatDetector): VoidResult;
  getDecoder(
    format: SixLabors.ImageSharp.Formats.IImageFormat
  ): SixLabors.ImageSharp.Formats.IImageDecoder;
  getEncoder(
    format: SixLabors.ImageSharp.Formats.IImageFormat
  ): SixLabors.ImageSharp.Formats.IImageEncoder;
}

declare global {
  namespace SixLabors.ImageSharp.Formats {
    type ImageFormatManager = import("./ImageFormatManager").ImageFormatManager;
  }
}

export interface ImageFormatManagerHostType extends HostType<
  ImageFormatManager,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): ImageFormatManager;
}

export {};
