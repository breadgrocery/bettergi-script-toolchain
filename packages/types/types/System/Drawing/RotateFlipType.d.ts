import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const rotateFlipTypeBrand: unique symbol;
export interface RotateFlipType extends ClrHostValue {
  readonly [rotateFlipTypeBrand]: true;
}

declare global {
  namespace System.Drawing {
    type RotateFlipType = import("./RotateFlipType").RotateFlipType;
  }
}

export interface RotateFlipTypeHostType extends HostType<RotateFlipType, EnumTypeTrait> {
  readonly rotateNoneFlipNone: RotateFlipType;
  readonly rotate90FlipNone: RotateFlipType;
  readonly rotate180FlipNone: RotateFlipType;
  readonly rotate270FlipNone: RotateFlipType;
  readonly rotateNoneFlipX: RotateFlipType;
  readonly rotate90FlipX: RotateFlipType;
  readonly rotate180FlipX: RotateFlipType;
  readonly rotate270FlipX: RotateFlipType;
  readonly rotateNoneFlipY: RotateFlipType;
  readonly rotate90FlipY: RotateFlipType;
  readonly rotate180FlipY: RotateFlipType;
  readonly rotate270FlipY: RotateFlipType;
  readonly rotateNoneFlipXY: RotateFlipType;
  readonly rotate90FlipXY: RotateFlipType;
  readonly rotate180FlipXY: RotateFlipType;
  readonly rotate270FlipXY: RotateFlipType;
}

export {};
