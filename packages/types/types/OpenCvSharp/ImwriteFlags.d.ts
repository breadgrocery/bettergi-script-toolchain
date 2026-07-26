import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const imwriteFlagsBrand: unique symbol;
export interface ImwriteFlags extends ClrHostValue {
  readonly [imwriteFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ImwriteFlags = import("./ImwriteFlags").ImwriteFlags;
  }
}

export interface ImwriteFlagsHostType extends HostType<ImwriteFlags, EnumTypeTrait> {
  readonly jpegQuality: ImwriteFlags;
  readonly jpegProgressive: ImwriteFlags;
  readonly jpegOptimize: ImwriteFlags;
  readonly jpegRstInterval: ImwriteFlags;
  readonly jpegLumaQuality: ImwriteFlags;
  readonly jpegChromaQuality: ImwriteFlags;
  readonly pngCompression: ImwriteFlags;
  readonly pngStrategy: ImwriteFlags;
  readonly pngBilevel: ImwriteFlags;
  readonly pxmBinary: ImwriteFlags;
  readonly exrType: ImwriteFlags;
  readonly webPQuality: ImwriteFlags;
  readonly pamTupleType: ImwriteFlags;
  readonly tiffResUnit: ImwriteFlags;
  readonly tiffXDpi: ImwriteFlags;
  readonly tiffYDpi: ImwriteFlags;
  readonly tiffCompression: ImwriteFlags;
  readonly jpeg2000CompressionX1000: ImwriteFlags;
}

export {};
