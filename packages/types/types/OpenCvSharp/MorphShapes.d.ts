import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const morphShapesBrand: unique symbol;
export interface MorphShapes extends ClrHostValue {
  readonly [morphShapesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MorphShapes = import("./MorphShapes").MorphShapes;
  }
}

export interface MorphShapesHostType extends HostType<MorphShapes, EnumTypeTrait> {
  readonly rect: MorphShapes;
  readonly cross: MorphShapes;
  readonly ellipse: MorphShapes;
}

export {};
