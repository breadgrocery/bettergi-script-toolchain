import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const rectanglesIntersectTypesBrand: unique symbol;
export interface RectanglesIntersectTypes extends ClrHostValue {
  readonly [rectanglesIntersectTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type RectanglesIntersectTypes = import("./RectanglesIntersectTypes").RectanglesIntersectTypes;
  }
}

export interface RectanglesIntersectTypesHostType extends HostType<
  RectanglesIntersectTypes,
  EnumTypeTrait
> {
  readonly none: RectanglesIntersectTypes;
  readonly partial: RectanglesIntersectTypes;
  readonly full: RectanglesIntersectTypes;
}

export {};
