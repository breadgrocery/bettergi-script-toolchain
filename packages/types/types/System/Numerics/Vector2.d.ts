import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IEquatable";
import "../IFormatProvider";
import "../IFormattable";
import "../ValueType";
import "./Matrix3x2";
import "./Matrix4x4";
import "./Quaternion";

declare const vector2Brand: unique symbol;
export interface Vector2 extends ClrHostValue, System.IFormattableInput {
  readonly [vector2Brand]: true;
  copyTo(array: HostArray<number | StrongNumeric<SingleHost>>): VoidResult;
  copyTo(
    array: HostArray<number | StrongNumeric<SingleHost>>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Vector2): boolean;
  getHashCode(): number;
  item: {
    (index: number | StrongNumeric<Int32Host>): number;
    get(index: number | StrongNumeric<Int32Host>): number;
    set(
      index: number | StrongNumeric<Int32Host>,
      value: number | StrongNumeric<SingleHost>
    ): number;
  };
  length(): number;
  lengthSquared(): number;
  toString(): string;
  toString(format: string | null): string;
  toString(format: string | null, formatProvider: System.IFormatProvider | null): string;
  x: number;
  y: number;
}

declare global {
  namespace System.Numerics {
    type Vector2 = import("./Vector2").Vector2;
  }
}

export interface Vector2HostType extends HostType<Vector2, ValueTypeTrait> {
  new (value: number | StrongNumeric<SingleHost>): Vector2;
  new (x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): Vector2;
  readonly zero: System.Numerics.Vector2;
  readonly one: System.Numerics.Vector2;
  readonly unitX: System.Numerics.Vector2;
  readonly unitY: System.Numerics.Vector2;
  abs(value: System.Numerics.Vector2): System.Numerics.Vector2;
  add(left: System.Numerics.Vector2, right: System.Numerics.Vector2): System.Numerics.Vector2;
  clamp(
    value1: System.Numerics.Vector2,
    min: System.Numerics.Vector2,
    max: System.Numerics.Vector2
  ): System.Numerics.Vector2;
  distance(value1: System.Numerics.Vector2, value2: System.Numerics.Vector2): number;
  distanceSquared(value1: System.Numerics.Vector2, value2: System.Numerics.Vector2): number;
  divide(left: System.Numerics.Vector2, right: System.Numerics.Vector2): System.Numerics.Vector2;
  divide(
    left: System.Numerics.Vector2,
    divisor: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector2;
  dot(value1: System.Numerics.Vector2, value2: System.Numerics.Vector2): number;
  lerp(
    value1: System.Numerics.Vector2,
    value2: System.Numerics.Vector2,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector2;
  max(value1: System.Numerics.Vector2, value2: System.Numerics.Vector2): System.Numerics.Vector2;
  min(value1: System.Numerics.Vector2, value2: System.Numerics.Vector2): System.Numerics.Vector2;
  multiply(left: System.Numerics.Vector2, right: System.Numerics.Vector2): System.Numerics.Vector2;
  multiply(
    left: System.Numerics.Vector2,
    right: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector2;
  multiply(
    left: number | StrongNumeric<SingleHost>,
    right: System.Numerics.Vector2
  ): System.Numerics.Vector2;
  negate(value: System.Numerics.Vector2): System.Numerics.Vector2;
  normalize(value: System.Numerics.Vector2): System.Numerics.Vector2;
  reflect(
    vector: System.Numerics.Vector2,
    normal: System.Numerics.Vector2
  ): System.Numerics.Vector2;
  squareRoot(value: System.Numerics.Vector2): System.Numerics.Vector2;
  subtract(left: System.Numerics.Vector2, right: System.Numerics.Vector2): System.Numerics.Vector2;
  transform(
    position: System.Numerics.Vector2,
    matrix: System.Numerics.Matrix3x2
  ): System.Numerics.Vector2;
  transform(
    position: System.Numerics.Vector2,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector2;
  transform(
    value: System.Numerics.Vector2,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Vector2;
  transformNormal(
    normal: System.Numerics.Vector2,
    matrix: System.Numerics.Matrix3x2
  ): System.Numerics.Vector2;
  transformNormal(
    normal: System.Numerics.Vector2,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector2;
}

export {};
