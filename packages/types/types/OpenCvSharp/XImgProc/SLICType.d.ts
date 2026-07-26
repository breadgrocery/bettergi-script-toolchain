import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const sLICTypeBrand: unique symbol;
export interface SLICType extends ClrHostValue {
  readonly [sLICTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type SLICType = import("./SLICType").SLICType;
  }
}

export interface SLICTypeHostType extends HostType<SLICType, EnumTypeTrait> {
  readonly slic: SLICType;
  readonly slico: SLICType;
  readonly mslic: SLICType;
}

export {};
