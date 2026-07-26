import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const shapeMatchModesBrand: unique symbol;
export interface ShapeMatchModes extends ClrHostValue {
  readonly [shapeMatchModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ShapeMatchModes = import("./ShapeMatchModes").ShapeMatchModes;
  }
}

export interface ShapeMatchModesHostType extends HostType<ShapeMatchModes, EnumTypeTrait> {
  readonly i1: ShapeMatchModes;
  readonly i2: ShapeMatchModes;
  readonly i3: ShapeMatchModes;
}

export {};
