import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const imageCodecFlagsBrand: unique symbol;
export interface ImageCodecFlags extends ClrHostValue {
  readonly [imageCodecFlagsBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type ImageCodecFlags = import("./ImageCodecFlags").ImageCodecFlags;
  }
}

export interface ImageCodecFlagsHostType extends HostType<ImageCodecFlags, EnumTypeTrait> {
  readonly encoder: ImageCodecFlags;
  readonly decoder: ImageCodecFlags;
  readonly supportBitmap: ImageCodecFlags;
  readonly supportVector: ImageCodecFlags;
  readonly seekableEncode: ImageCodecFlags;
  readonly blockingDecode: ImageCodecFlags;
  readonly builtin: ImageCodecFlags;
  readonly system: ImageCodecFlags;
  readonly user: ImageCodecFlags;
}

export {};
