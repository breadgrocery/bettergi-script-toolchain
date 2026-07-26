import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IEquatable";
import "../../System/Numerics/Matrix3x2";
import "../../System/ValueType";
import "./PointF";
import "./SizeF";

declare const rectangleFBrand: unique symbol;
export interface RectangleF extends ClrHostValue {
  readonly [rectangleFBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  location: SixLabors.ImageSharp.PointF;
  size: SixLabors.ImageSharp.SizeF;
  readonly isEmpty: boolean;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    width: HostVariableOut<number>,
    height: HostVariableOut<number>
  ): VoidResult;
  intersect(rectangle: SixLabors.ImageSharp.RectangleF): VoidResult;
  inflate(size: SixLabors.ImageSharp.SizeF): VoidResult;
  inflate(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  contains(point: SixLabors.ImageSharp.PointF): boolean;
  contains(rectangle: SixLabors.ImageSharp.RectangleF): boolean;
  contains(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  intersectsWith(rectangle: SixLabors.ImageSharp.RectangleF): boolean;
  offset(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  offset(point: SixLabors.ImageSharp.PointF): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.RectangleF): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
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
  new (point: SixLabors.ImageSharp.PointF, size: SixLabors.ImageSharp.SizeF): RectangleF;
  readonly empty: SixLabors.ImageSharp.RectangleF;
  fromLTRB(
    left: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>
  ): SixLabors.ImageSharp.RectangleF;
  center(rectangle: SixLabors.ImageSharp.RectangleF): SixLabors.ImageSharp.PointF;
  intersect(
    a: SixLabors.ImageSharp.RectangleF,
    b: SixLabors.ImageSharp.RectangleF
  ): SixLabors.ImageSharp.RectangleF;
  inflate(
    rectangle: SixLabors.ImageSharp.RectangleF,
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>
  ): SixLabors.ImageSharp.RectangleF;
  transform(
    rectangle: SixLabors.ImageSharp.RectangleF,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.RectangleF;
  union(
    a: SixLabors.ImageSharp.RectangleF,
    b: SixLabors.ImageSharp.RectangleF
  ): SixLabors.ImageSharp.RectangleF;
}

export {};
