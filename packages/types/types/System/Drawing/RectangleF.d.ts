import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IEquatable";
import "../Numerics/Vector4";
import "../ValueType";
import "./PointF";
import "./SizeF";

declare const rectangleFBrand: unique symbol;
export interface RectangleF extends ClrHostValue {
  readonly [rectangleFBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  location: System.Drawing.PointF;
  size: System.Drawing.SizeF;
  readonly isEmpty: boolean;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
  intersect(rect: System.Drawing.RectangleF): VoidResult;
  inflate(size: System.Drawing.SizeF): VoidResult;
  inflate(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): VoidResult;
  contains(pt: System.Drawing.PointF): boolean;
  contains(rect: System.Drawing.RectangleF): boolean;
  contains(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  intersectsWith(rect: System.Drawing.RectangleF): boolean;
  offset(pos: System.Drawing.PointF): VoidResult;
  offset(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.RectangleF): boolean;
  toVector4(): System.Numerics.Vector4;
}

declare global {
  namespace System.Drawing {
    type RectangleF = import("./RectangleF").RectangleF;
  }
}

export interface RectangleFHostType extends HostType<RectangleF, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): RectangleF;
  new (location: System.Drawing.PointF, size: System.Drawing.SizeF): RectangleF;
  new (vector: System.Numerics.Vector4): RectangleF;
  readonly empty: System.Drawing.RectangleF;
  fromLTRB(
    left: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>
  ): System.Drawing.RectangleF;
  inflate(
    rect: System.Drawing.RectangleF,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): System.Drawing.RectangleF;
  intersect(a: System.Drawing.RectangleF, b: System.Drawing.RectangleF): System.Drawing.RectangleF;
  union(a: System.Drawing.RectangleF, b: System.Drawing.RectangleF): System.Drawing.RectangleF;
}

export {};
