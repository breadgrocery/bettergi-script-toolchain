import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IEquatable";
import "../../System/Numerics/Matrix3x2";
import "../../System/ValueType";
import "./Point";
import "./RectangleF";
import "./Size";

declare const rectangleBrand: unique symbol;
export interface Rectangle extends ClrHostValue {
  readonly [rectangleBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  location: SixLabors.ImageSharp.Point;
  size: SixLabors.ImageSharp.Size;
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
  intersect(rectangle: SixLabors.ImageSharp.Rectangle): VoidResult;
  inflate(size: SixLabors.ImageSharp.Size): VoidResult;
  inflate(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  contains(point: SixLabors.ImageSharp.Point): boolean;
  contains(rectangle: SixLabors.ImageSharp.Rectangle): boolean;
  contains(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): boolean;
  intersectsWith(rectangle: SixLabors.ImageSharp.Rectangle): boolean;
  offset(dx: number | StrongNumeric<Int32Host>, dy: number | StrongNumeric<Int32Host>): VoidResult;
  offset(point: SixLabors.ImageSharp.Point): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Rectangle): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Rectangle = import("./Rectangle").Rectangle;
  }
}

export interface RectangleHostType extends HostType<Rectangle, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Rectangle;
  new (point: SixLabors.ImageSharp.Point, size: SixLabors.ImageSharp.Size): Rectangle;
  readonly empty: SixLabors.ImageSharp.Rectangle;
  fromLTRB(
    left: number | StrongNumeric<Int32Host>,
    top: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Rectangle;
  center(rectangle: SixLabors.ImageSharp.Rectangle): SixLabors.ImageSharp.Point;
  intersect(
    a: SixLabors.ImageSharp.Rectangle,
    b: SixLabors.ImageSharp.Rectangle
  ): SixLabors.ImageSharp.Rectangle;
  inflate(
    rectangle: SixLabors.ImageSharp.Rectangle,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Rectangle;
  ceiling(rectangle: SixLabors.ImageSharp.RectangleF): SixLabors.ImageSharp.Rectangle;
  transform(
    rectangle: SixLabors.ImageSharp.Rectangle,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.RectangleF;
  truncate(rectangle: SixLabors.ImageSharp.RectangleF): SixLabors.ImageSharp.Rectangle;
  round(rectangle: SixLabors.ImageSharp.RectangleF): SixLabors.ImageSharp.Rectangle;
  union(
    a: SixLabors.ImageSharp.Rectangle,
    b: SixLabors.ImageSharp.Rectangle
  ): SixLabors.ImageSharp.Rectangle;
}

export {};
