import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const fASTTypeBrand: unique symbol;
export interface FASTType extends ClrHostValue {
  readonly [fASTTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FASTType = import("./FASTType").FASTType;
  }
}

export interface FASTTypeHostType extends HostType<FASTType, EnumTypeTrait> {
  readonly typE_5_8: FASTType;
  readonly typE_7_12: FASTType;
  readonly typE_9_16: FASTType;
}

export {};
