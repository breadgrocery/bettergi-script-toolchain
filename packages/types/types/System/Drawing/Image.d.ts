import type {
  EnumInput,
  HostArray,
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../Guid";
import "../IAsyncResult";
import "../ICloneable";
import "../IDisposable";
import "../IO/Stream";
import "../IntPtr";
import "../MarshalByRefObject";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";
import "./Bitmap";
import "./GraphicsUnit";
import "./Imaging/ColorPalette";
import "./Imaging/EncoderParameters";
import "./Imaging/FrameDimension";
import "./Imaging/ImageCodecInfo";
import "./Imaging/ImageFormat";
import "./Imaging/PixelFormat";
import "./Imaging/PropertyItem";
import "./RectangleF";
import "./RotateFlipType";
import "./Size";
import "./SizeF";

declare const imageBrand: unique symbol;
export interface Image
  extends
    Omit<
      System.MarshalByRefObject,
      | "clone"
      | "dispose"
      | "flags"
      | "frameDimensionsList"
      | "getBounds"
      | "getEncoderParameterList"
      | "getFrameCount"
      | "getPropertyItem"
      | "getThumbnailImage"
      | "height"
      | "horizontalResolution"
      | "palette"
      | "physicalDimension"
      | "pixelFormat"
      | "propertyIdList"
      | "propertyItems"
      | "rawFormat"
      | "removePropertyItem"
      | "rotateFlip"
      | "save"
      | "saveAdd"
      | "selectActiveFrame"
      | "setPropertyItem"
      | "size"
      | "tag"
      | "verticalResolution"
      | "width"
    >,
    System.IDisposableInput,
    System.ICloneableInput,
    System.Runtime.Serialization.ISerializableInput {
  readonly [imageBrand]: true;
  readonly width: number;
  readonly height: number;
  readonly size: System.Drawing.Size;
  save(filename: string): VoidResult;
  save(
    filename: string,
    encoder: System.Drawing.Imaging.ImageCodecInfo,
    encoderParams: System.Drawing.Imaging.EncoderParameters | null
  ): VoidResult;
  save(filename: string, format: System.Drawing.Imaging.ImageFormat): VoidResult;
  save(
    stream: System.IO.Stream,
    encoder: System.Drawing.Imaging.ImageCodecInfo,
    encoderParams: System.Drawing.Imaging.EncoderParameters | null
  ): VoidResult;
  save(stream: System.IO.Stream, format: System.Drawing.Imaging.ImageFormat): VoidResult;
  dispose(): VoidResult;
  clone(): unknown;
  getBounds(pageUnit: HostVariableRef<System.Drawing.GraphicsUnit>): System.Drawing.RectangleF;
  getEncoderParameterList(encoder: System.Guid): System.Drawing.Imaging.EncoderParameters;
  getFrameCount(dimension: System.Drawing.Imaging.FrameDimension): number;
  getPropertyItem(propid: number | StrongNumeric<Int32Host>): System.Drawing.Imaging.PropertyItem;
  getThumbnailImage(
    thumbWidth: number | StrongNumeric<Int32Host>,
    thumbHeight: number | StrongNumeric<Int32Host>,
    callback: Image_GetThumbnailImageAbort | null,
    callbackData: System.IntPtr
  ): System.Drawing.Image;
  palette: System.Drawing.Imaging.ColorPalette;
  readonly flags: number;
  readonly frameDimensionsList: HostArray<System.Guid>;
  readonly horizontalResolution: number;
  readonly physicalDimension: System.Drawing.SizeF;
  readonly pixelFormat: System.Drawing.Imaging.PixelFormat;
  readonly propertyIdList: HostArray<number>;
  readonly propertyItems: HostArray<System.Drawing.Imaging.PropertyItem>;
  readonly rawFormat: System.Drawing.Imaging.ImageFormat;
  readonly verticalResolution: number;
  removePropertyItem(propid: number | StrongNumeric<Int32Host>): VoidResult;
  rotateFlip(rotateFlipType: EnumInput<System.Drawing.RotateFlipType>): VoidResult;
  saveAdd(encoderParams: System.Drawing.Imaging.EncoderParameters | null): VoidResult;
  saveAdd(
    image: System.Drawing.Image,
    encoderParams: System.Drawing.Imaging.EncoderParameters | null
  ): VoidResult;
  selectActiveFrame(
    dimension: System.Drawing.Imaging.FrameDimension,
    frameIndex: number | StrongNumeric<Int32Host>
  ): number;
  setPropertyItem(propitem: System.Drawing.Imaging.PropertyItem): VoidResult;
  tag: unknown;
}

declare const delegateImage_GetThumbnailImageAbortBrand: unique symbol;
export interface Image_GetThumbnailImageAbort extends HostDelegate {
  readonly [delegateImage_GetThumbnailImageAbortBrand]: true;
  (): boolean;
  invoke(): boolean;
}

export interface Image_GetThumbnailImageAbortHostType extends HostType<
  Image_GetThumbnailImageAbort,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): Image_GetThumbnailImageAbort;
}

declare global {
  namespace System.Drawing.Image {
    type GetThumbnailImageAbort = import("./Image").Image_GetThumbnailImageAbort;
  }
}

declare global {
  namespace System.Drawing {
    type Image = import("./Image").Image;
  }
}

export interface ImageHostType extends HostType<Image, ReferenceTypeTrait> {
  fromFile(filename: string): System.Drawing.Image;
  fromFile(filename: string, useEmbeddedColorManagement: boolean): System.Drawing.Image;
  fromStream(stream: System.IO.Stream): System.Drawing.Image;
  fromStream(stream: System.IO.Stream, useEmbeddedColorManagement: boolean): System.Drawing.Image;
  fromStream(
    stream: System.IO.Stream,
    useEmbeddedColorManagement: boolean,
    validateImageData: boolean
  ): System.Drawing.Image;
  fromHbitmap(hbitmap: System.IntPtr): System.Drawing.Bitmap;
  fromHbitmap(hbitmap: System.IntPtr, hpalette: System.IntPtr): System.Drawing.Bitmap;
  isExtendedPixelFormat(pixfmt: EnumInput<System.Drawing.Imaging.PixelFormat>): boolean;
  isCanonicalPixelFormat(pixfmt: EnumInput<System.Drawing.Imaging.PixelFormat>): boolean;
  getPixelFormatSize(pixfmt: EnumInput<System.Drawing.Imaging.PixelFormat>): number;
  isAlphaPixelFormat(pixfmt: EnumInput<System.Drawing.Imaging.PixelFormat>): boolean;
  readonly GetThumbnailImageAbort: Image_GetThumbnailImageAbortHostType;
}

export {};
