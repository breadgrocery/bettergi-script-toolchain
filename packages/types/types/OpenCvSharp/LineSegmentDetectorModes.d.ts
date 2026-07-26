import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const lineSegmentDetectorModesBrand: unique symbol;
export interface LineSegmentDetectorModes extends ClrHostValue {
  readonly [lineSegmentDetectorModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type LineSegmentDetectorModes = import("./LineSegmentDetectorModes").LineSegmentDetectorModes;
  }
}

export interface LineSegmentDetectorModesHostType extends HostType<
  LineSegmentDetectorModes,
  EnumTypeTrait
> {
  readonly refineNone: LineSegmentDetectorModes;
  readonly refineStd: LineSegmentDetectorModes;
  readonly refineAdv: LineSegmentDetectorModes;
}

export {};
