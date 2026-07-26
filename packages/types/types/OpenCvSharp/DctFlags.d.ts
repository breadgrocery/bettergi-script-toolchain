import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const dctFlagsBrand: unique symbol;
export interface DctFlags extends ClrHostValue {
  readonly [dctFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DctFlags = import("./DctFlags").DctFlags;
  }
}

export interface DctFlagsHostType extends HostType<DctFlags, EnumTypeTrait> {
  readonly none: DctFlags;
  readonly inverse: DctFlags;
  readonly rows: DctFlags;
}

export {};
