import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const convertImageModesBrand: unique symbol;
export interface ConvertImageModes extends ClrHostValue {
  readonly [convertImageModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ConvertImageModes = import("./ConvertImageModes").ConvertImageModes;
  }
}

export interface ConvertImageModesHostType extends HostType<ConvertImageModes, EnumTypeTrait> {
  readonly none: ConvertImageModes;
  readonly flip: ConvertImageModes;
  readonly swapRB: ConvertImageModes;
}

export {};
