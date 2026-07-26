import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const houghOPBrand: unique symbol;
export interface HoughOP extends ClrHostValue {
  readonly [houghOPBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type HoughOP = import("./HoughOP").HoughOP;
  }
}

export interface HoughOPHostType extends HostType<HoughOP, EnumTypeTrait> {
  readonly fhT_MIN: HoughOP;
  readonly fhT_MAX: HoughOP;
  readonly fhT_ADD: HoughOP;
  readonly fhT_AVE: HoughOP;
}

export {};
