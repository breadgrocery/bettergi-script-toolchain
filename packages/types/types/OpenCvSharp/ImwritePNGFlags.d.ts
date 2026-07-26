import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const imwritePNGFlagsBrand: unique symbol;
export interface ImwritePNGFlags extends ClrHostValue {
  readonly [imwritePNGFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ImwritePNGFlags = import("./ImwritePNGFlags").ImwritePNGFlags;
  }
}

export interface ImwritePNGFlagsHostType extends HostType<ImwritePNGFlags, EnumTypeTrait> {
  readonly strategyDefault: ImwritePNGFlags;
  readonly strategyFiltered: ImwritePNGFlags;
  readonly strategyHuffmanOnly: ImwritePNGFlags;
  readonly strategyRLE: ImwritePNGFlags;
  readonly strategyFixed: ImwritePNGFlags;
}

export {};
