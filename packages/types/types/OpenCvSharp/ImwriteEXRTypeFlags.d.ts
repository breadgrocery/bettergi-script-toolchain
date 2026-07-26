import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const imwriteEXRTypeFlagsBrand: unique symbol;
export interface ImwriteEXRTypeFlags extends ClrHostValue {
  readonly [imwriteEXRTypeFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ImwriteEXRTypeFlags = import("./ImwriteEXRTypeFlags").ImwriteEXRTypeFlags;
  }
}

export interface ImwriteEXRTypeFlagsHostType extends HostType<ImwriteEXRTypeFlags, EnumTypeTrait> {
  readonly typeHalf: ImwriteEXRTypeFlags;
  readonly typeFloat: ImwriteEXRTypeFlags;
}

export {};
