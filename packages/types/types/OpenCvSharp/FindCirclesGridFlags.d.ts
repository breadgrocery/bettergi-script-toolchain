import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const findCirclesGridFlagsBrand: unique symbol;
export interface FindCirclesGridFlags extends ClrHostValue {
  readonly [findCirclesGridFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FindCirclesGridFlags = import("./FindCirclesGridFlags").FindCirclesGridFlags;
  }
}

export interface FindCirclesGridFlagsHostType extends HostType<
  FindCirclesGridFlags,
  EnumTypeTrait
> {
  readonly symmetricGrid: FindCirclesGridFlags;
  readonly asymmetricGrid: FindCirclesGridFlags;
  readonly clustering: FindCirclesGridFlags;
}

export {};
