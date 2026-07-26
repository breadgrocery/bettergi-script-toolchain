import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const imwritePAMFlagsBrand: unique symbol;
export interface ImwritePAMFlags extends ClrHostValue {
  readonly [imwritePAMFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ImwritePAMFlags = import("./ImwritePAMFlags").ImwritePAMFlags;
  }
}

export interface ImwritePAMFlagsHostType extends HostType<ImwritePAMFlags, EnumTypeTrait> {
  readonly formatNull: ImwritePAMFlags;
  readonly formatBlackAndWhite: ImwritePAMFlags;
  readonly formatGrayscale: ImwritePAMFlags;
  readonly formatGrayscaleAlpha: ImwritePAMFlags;
  readonly formatRgb: ImwritePAMFlags;
  readonly formatRgbAlpha: ImwritePAMFlags;
}

export {};
