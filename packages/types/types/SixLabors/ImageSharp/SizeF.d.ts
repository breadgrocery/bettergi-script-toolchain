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

declare const sizeFBrand: unique symbol;
export interface SizeF extends ClrHostValue {
  readonly [sizeFBrand]: true;
  width: number;
  height: number;
  readonly isEmpty: boolean;
  deconstruct(width: HostVariableOut<number>, height: HostVariableOut<number>): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.SizeF): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
    type SizeF = import("./SizeF").SizeF;
  }
}

export interface SizeFHostType extends HostType<SizeF, ValueTypeTrait> {
  new (
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): SizeF;
  new (size: SixLabors.ImageSharp.SizeF): SizeF;
  new (point: SixLabors.ImageSharp.PointF): SizeF;
  readonly empty: SixLabors.ImageSharp.SizeF;
  add(
    left: SixLabors.ImageSharp.SizeF,
    right: SixLabors.ImageSharp.SizeF
  ): SixLabors.ImageSharp.SizeF;
  subtract(
    left: SixLabors.ImageSharp.SizeF,
    right: SixLabors.ImageSharp.SizeF
  ): SixLabors.ImageSharp.SizeF;
  transform(
    size: SixLabors.ImageSharp.SizeF,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.SizeF;
}

export {};
