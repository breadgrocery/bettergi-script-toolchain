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
import "./Matrix4x4";
import "./Quaternion";
import "./Vector2";
import "./Vector3";

declare const vector4Brand: unique symbol;
export interface Vector4 extends ClrHostValue, System.IFormattableInput {
  readonly [vector4Brand]: true;
  copyTo(array: HostArray<number | StrongNumeric<SingleHost>>): VoidResult;
  copyTo(
    array: HostArray<number | StrongNumeric<SingleHost>>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Vector4): boolean;
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
  w: number;
  x: number;
  y: number;
  z: number;
}

declare global {
  namespace System.Numerics {
    type Vector4 = import("./Vector4").Vector4;
  }
}

export interface Vector4HostType extends HostType<Vector4, ValueTypeTrait> {
  new (value: number | StrongNumeric<SingleHost>): Vector4;
  new (
    value: System.Numerics.Vector2,
    z: number | StrongNumeric<SingleHost>,
    w: number | StrongNumeric<SingleHost>
  ): Vector4;
  new (value: System.Numerics.Vector3, w: number | StrongNumeric<SingleHost>): Vector4;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>,
    w: number | StrongNumeric<SingleHost>
  ): Vector4;
  readonly zero: System.Numerics.Vector4;
  readonly one: System.Numerics.Vector4;
  readonly unitX: System.Numerics.Vector4;
  readonly unitY: System.Numerics.Vector4;
  readonly unitZ: System.Numerics.Vector4;
  readonly unitW: System.Numerics.Vector4;
  abs(value: System.Numerics.Vector4): System.Numerics.Vector4;
  add(left: System.Numerics.Vector4, right: System.Numerics.Vector4): System.Numerics.Vector4;
  clamp(
    value1: System.Numerics.Vector4,
    min: System.Numerics.Vector4,
    max: System.Numerics.Vector4
  ): System.Numerics.Vector4;
  distance(value1: System.Numerics.Vector4, value2: System.Numerics.Vector4): number;
  distanceSquared(value1: System.Numerics.Vector4, value2: System.Numerics.Vector4): number;
  divide(left: System.Numerics.Vector4, right: System.Numerics.Vector4): System.Numerics.Vector4;
  divide(
    left: System.Numerics.Vector4,
    divisor: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector4;
  dot(vector1: System.Numerics.Vector4, vector2: System.Numerics.Vector4): number;
  lerp(
    value1: System.Numerics.Vector4,
    value2: System.Numerics.Vector4,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector4;
  max(value1: System.Numerics.Vector4, value2: System.Numerics.Vector4): System.Numerics.Vector4;
  min(value1: System.Numerics.Vector4, value2: System.Numerics.Vector4): System.Numerics.Vector4;
  multiply(left: System.Numerics.Vector4, right: System.Numerics.Vector4): System.Numerics.Vector4;
  multiply(
    left: System.Numerics.Vector4,
    right: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector4;
  multiply(
    left: number | StrongNumeric<SingleHost>,
    right: System.Numerics.Vector4
  ): System.Numerics.Vector4;
  negate(value: System.Numerics.Vector4): System.Numerics.Vector4;
  normalize(vector: System.Numerics.Vector4): System.Numerics.Vector4;
  squareRoot(value: System.Numerics.Vector4): System.Numerics.Vector4;
  subtract(left: System.Numerics.Vector4, right: System.Numerics.Vector4): System.Numerics.Vector4;
  transform(
    position: System.Numerics.Vector2,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector4;
  transform(
    value: System.Numerics.Vector2,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Vector4;
  transform(
    position: System.Numerics.Vector3,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector4;
  transform(
    value: System.Numerics.Vector3,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Vector4;
  transform(
    vector: System.Numerics.Vector4,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector4;
  transform(
    value: System.Numerics.Vector4,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Vector4;
}

export {};
