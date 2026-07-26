import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const cmpTypeBrand: unique symbol;
export interface CmpType extends ClrHostValue {
  readonly [cmpTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CmpType = import("./CmpType").CmpType;
  }
}

export interface CmpTypeHostType extends HostType<CmpType, EnumTypeTrait> {
  readonly eq: CmpType;
  readonly gt: CmpType;
  readonly ge: CmpType;
  readonly lt: CmpType;
  readonly le: CmpType;
  readonly ne: CmpType;
}

export {};
