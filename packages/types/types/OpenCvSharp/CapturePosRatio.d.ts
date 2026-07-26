import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const capturePosAviRatioBrand: unique symbol;
export interface CapturePosAviRatio extends ClrHostValue {
  readonly [capturePosAviRatioBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type CapturePosAviRatio = import("./CapturePosRatio").CapturePosAviRatio;
  }
}

export interface CapturePosAviRatioHostType extends HostType<CapturePosAviRatio, EnumTypeTrait> {
  readonly start: CapturePosAviRatio;
  readonly end: CapturePosAviRatio;
}

export {};
