import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const houghDeskewOptionBrand: unique symbol;
export interface HoughDeskewOption extends ClrHostValue {
  readonly [houghDeskewOptionBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type HoughDeskewOption = import("./HoughDeskewOption").HoughDeskewOption;
  }
}

export interface HoughDeskewOptionHostType extends HostType<HoughDeskewOption, EnumTypeTrait> {
  readonly raw: HoughDeskewOption;
  readonly deskew: HoughDeskewOption;
}

export {};
