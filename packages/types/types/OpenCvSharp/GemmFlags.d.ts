import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const gemmFlagsBrand: unique symbol;
export interface GemmFlags extends ClrHostValue {
  readonly [gemmFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type GemmFlags = import("./GemmFlags").GemmFlags;
  }
}

export interface GemmFlagsHostType extends HostType<GemmFlags, EnumTypeTrait> {
  readonly none: GemmFlags;
  readonly a_T: GemmFlags;
  readonly b_T: GemmFlags;
  readonly c_T: GemmFlags;
}

export {};
