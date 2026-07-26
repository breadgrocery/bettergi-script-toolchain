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
import "./SizeF";

declare const pointFBrand: unique symbol;
export interface PointF extends ClrHostValue {
  readonly [pointFBrand]: true;
  x: number;
  y: number;
  readonly isEmpty: boolean;
  deconstruct(x: HostVariableOut<number>, y: HostVariableOut<number>): VoidResult;
  offset(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  offset(point: SixLabors.ImageSharp.PointF): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.PointF): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
    type PointF = import("./PointF").PointF;
  }
}

export interface PointFHostType extends HostType<PointF, ValueTypeTrait> {
  new (x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): PointF;
  new (size: SixLabors.ImageSharp.SizeF): PointF;
  readonly empty: SixLabors.ImageSharp.PointF;
  add(
    point: SixLabors.ImageSharp.PointF,
    size: SixLabors.ImageSharp.SizeF
  ): SixLabors.ImageSharp.PointF;
  add(
    point: SixLabors.ImageSharp.PointF,
    pointb: SixLabors.ImageSharp.PointF
  ): SixLabors.ImageSharp.PointF;
  subtract(
    point: SixLabors.ImageSharp.PointF,
    size: SixLabors.ImageSharp.SizeF
  ): SixLabors.ImageSharp.PointF;
  subtract(
    point: SixLabors.ImageSharp.PointF,
    pointb: SixLabors.ImageSharp.PointF
  ): SixLabors.ImageSharp.PointF;
  multiply(
    point: SixLabors.ImageSharp.PointF,
    right: number | StrongNumeric<SingleHost>
  ): SixLabors.ImageSharp.PointF;
  transform(
    point: SixLabors.ImageSharp.PointF,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.PointF;
}

export {};
