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

declare const vector3Brand: unique symbol;
export interface Vector3 extends ClrHostValue, System.IFormattableInput {
  readonly [vector3Brand]: true;
  copyTo(array: HostArray<number | StrongNumeric<SingleHost>>): VoidResult;
  copyTo(
    array: HostArray<number | StrongNumeric<SingleHost>>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Vector3): boolean;
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
  z: number;
}

declare global {
  namespace System.Numerics {
    type Vector3 = import("./Vector3").Vector3;
  }
}

export interface Vector3HostType extends HostType<Vector3, ValueTypeTrait> {
  new (value: number | StrongNumeric<SingleHost>): Vector3;
  new (value: System.Numerics.Vector2, z: number | StrongNumeric<SingleHost>): Vector3;
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>
  ): Vector3;
  readonly zero: System.Numerics.Vector3;
  readonly one: System.Numerics.Vector3;
  readonly unitX: System.Numerics.Vector3;
  readonly unitY: System.Numerics.Vector3;
  readonly unitZ: System.Numerics.Vector3;
  abs(value: System.Numerics.Vector3): System.Numerics.Vector3;
  add(left: System.Numerics.Vector3, right: System.Numerics.Vector3): System.Numerics.Vector3;
  clamp(
    value1: System.Numerics.Vector3,
    min: System.Numerics.Vector3,
    max: System.Numerics.Vector3
  ): System.Numerics.Vector3;
  cross(
    vector1: System.Numerics.Vector3,
    vector2: System.Numerics.Vector3
  ): System.Numerics.Vector3;
  distance(value1: System.Numerics.Vector3, value2: System.Numerics.Vector3): number;
  distanceSquared(value1: System.Numerics.Vector3, value2: System.Numerics.Vector3): number;
  divide(left: System.Numerics.Vector3, right: System.Numerics.Vector3): System.Numerics.Vector3;
  divide(
    left: System.Numerics.Vector3,
    divisor: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector3;
  dot(vector1: System.Numerics.Vector3, vector2: System.Numerics.Vector3): number;
  lerp(
    value1: System.Numerics.Vector3,
    value2: System.Numerics.Vector3,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector3;
  max(value1: System.Numerics.Vector3, value2: System.Numerics.Vector3): System.Numerics.Vector3;
  min(value1: System.Numerics.Vector3, value2: System.Numerics.Vector3): System.Numerics.Vector3;
  multiply(left: System.Numerics.Vector3, right: System.Numerics.Vector3): System.Numerics.Vector3;
  multiply(
    left: System.Numerics.Vector3,
    right: number | StrongNumeric<SingleHost>
  ): System.Numerics.Vector3;
  multiply(
    left: number | StrongNumeric<SingleHost>,
    right: System.Numerics.Vector3
  ): System.Numerics.Vector3;
  negate(value: System.Numerics.Vector3): System.Numerics.Vector3;
  normalize(value: System.Numerics.Vector3): System.Numerics.Vector3;
  reflect(
    vector: System.Numerics.Vector3,
    normal: System.Numerics.Vector3
  ): System.Numerics.Vector3;
  squareRoot(value: System.Numerics.Vector3): System.Numerics.Vector3;
  subtract(left: System.Numerics.Vector3, right: System.Numerics.Vector3): System.Numerics.Vector3;
  transform(
    position: System.Numerics.Vector3,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector3;
  transform(
    value: System.Numerics.Vector3,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Vector3;
  transformNormal(
    normal: System.Numerics.Vector3,
    matrix: System.Numerics.Matrix4x4
  ): System.Numerics.Vector3;
}

export {};
