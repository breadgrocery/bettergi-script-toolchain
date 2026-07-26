import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const seamlessCloneMethodsBrand: unique symbol;
export interface SeamlessCloneMethods extends ClrHostValue {
  readonly [seamlessCloneMethodsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SeamlessCloneMethods = import("./SeamlessCloneMethods").SeamlessCloneMethods;
  }
}

export interface SeamlessCloneMethodsHostType extends HostType<
  SeamlessCloneMethods,
  EnumTypeTrait
> {
  readonly normalClone: SeamlessCloneMethods;
  readonly mixedClone: SeamlessCloneMethods;
  readonly monochromeTransfer: SeamlessCloneMethods;
}

export {};
