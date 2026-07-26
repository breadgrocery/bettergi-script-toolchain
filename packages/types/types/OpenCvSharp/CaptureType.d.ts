import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const captureTypeBrand: unique symbol;
export interface CaptureType extends ClrHostValue {
  readonly [captureTypeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CaptureType = import("./CaptureType").CaptureType;
  }
}

export interface CaptureTypeHostType extends HostType<CaptureType, EnumTypeTrait> {
  readonly file: CaptureType;
  readonly camera: CaptureType;
  readonly notSpecified: CaptureType;
}

export {};
