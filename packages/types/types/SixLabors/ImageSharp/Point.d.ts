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
import "../../System/Numerics/Vector2";
import "../../System/ValueType";
import "./PointF";
import "./Size";

declare const pointBrand: unique symbol;
export interface Point extends ClrHostValue {
  readonly [pointBrand]: true;
  x: number;
  y: number;
  readonly isEmpty: boolean;
  deconstruct(x: HostVariableOut<number>, y: HostVariableOut<number>): VoidResult;
  offset(dx: number | StrongNumeric<Int32Host>, dy: number | StrongNumeric<Int32Host>): VoidResult;
  offset(point: SixLabors.ImageSharp.Point): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Point): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Point = import("./Point").Point;
  }
}

export interface PointHostType extends HostType<Point, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): Point;
  new (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): Point;
  new (size: SixLabors.ImageSharp.Size): Point;
  readonly empty: SixLabors.ImageSharp.Point;
  add(
    point: SixLabors.ImageSharp.Point,
    size: SixLabors.ImageSharp.Size
  ): SixLabors.ImageSharp.Point;
  multiply(
    point: SixLabors.ImageSharp.Point,
    value: number | StrongNumeric<Int32Host>
  ): SixLabors.ImageSharp.Point;
  subtract(
    point: SixLabors.ImageSharp.Point,
    size: SixLabors.ImageSharp.Size
  ): SixLabors.ImageSharp.Point;
  ceiling(point: SixLabors.ImageSharp.PointF): SixLabors.ImageSharp.Point;
  round(point: SixLabors.ImageSharp.PointF): SixLabors.ImageSharp.Point;
  round(vector: System.Numerics.Vector2): SixLabors.ImageSharp.Point;
  truncate(point: SixLabors.ImageSharp.PointF): SixLabors.ImageSharp.Point;
  transform(
    point: SixLabors.ImageSharp.Point,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.Point;
}

export {};
