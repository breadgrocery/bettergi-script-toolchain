import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const accessFlagBrand: unique symbol;
export interface AccessFlag extends ClrHostValue {
  readonly [accessFlagBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type AccessFlag = import("./AccessFlag").AccessFlag;
  }
}

export interface AccessFlagHostType extends HostType<AccessFlag, EnumTypeTrait> {
  readonly read: AccessFlag;
  readonly write: AccessFlag;
  readonly rw: AccessFlag;
  readonly mask: AccessFlag;
  readonly fast: AccessFlag;
}

export {};
