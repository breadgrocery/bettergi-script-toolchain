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
import "./SizeF";

declare const sizeBrand: unique symbol;
export interface Size extends ClrHostValue {
  readonly [sizeBrand]: true;
  width: number;
  height: number;
  readonly isEmpty: boolean;
  deconstruct(width: HostVariableOut<number>, height: HostVariableOut<number>): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: SixLabors.ImageSharp.Size): boolean;
}

declare global {
  namespace SixLabors.ImageSharp {
    type Size = import("./Size").Size;
  }
}

export interface SizeHostType extends HostType<Size, ValueTypeTrait> {
  new (value: number | StrongNumeric<Int32Host>): Size;
  new (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): Size;
  new (size: SixLabors.ImageSharp.Size): Size;
  new (point: SixLabors.ImageSharp.Point): Size;
  readonly empty: SixLabors.ImageSharp.Size;
  add(left: SixLabors.ImageSharp.Size, right: SixLabors.ImageSharp.Size): SixLabors.ImageSharp.Size;
  subtract(
    left: SixLabors.ImageSharp.Size,
    right: SixLabors.ImageSharp.Size
  ): SixLabors.ImageSharp.Size;
  ceiling(size: SixLabors.ImageSharp.SizeF): SixLabors.ImageSharp.Size;
  round(size: SixLabors.ImageSharp.SizeF): SixLabors.ImageSharp.Size;
  transform(
    size: SixLabors.ImageSharp.Size,
    matrix: System.Numerics.Matrix3x2
  ): SixLabors.ImageSharp.SizeF;
  truncate(size: SixLabors.ImageSharp.SizeF): SixLabors.ImageSharp.Size;
}

export {};
