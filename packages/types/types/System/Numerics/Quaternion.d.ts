import type {
  ClrHostValue,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";
import "./Matrix4x4";
import "./Vector3";

declare const quaternionBrand: unique symbol;
export interface Quaternion extends ClrHostValue {
  readonly [quaternionBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Quaternion): boolean;
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
  readonly isIdentity: boolean;
  toString(): string;
  w: number;
  x: number;
  y: number;
  z: number;
}

declare global {
  namespace System.Numerics {
    type Quaternion = import("./Quaternion").Quaternion;
  }
}

export interface QuaternionHostType extends HostType<Quaternion, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>,
    w: number | StrongNumeric<SingleHost>
  ): Quaternion;
  new (
    vectorPart: System.Numerics.Vector3,
    scalarPart: number | StrongNumeric<SingleHost>
  ): Quaternion;
  readonly zero: System.Numerics.Quaternion;
  readonly identity: System.Numerics.Quaternion;
  add(
    value1: System.Numerics.Quaternion,
    value2: System.Numerics.Quaternion
  ): System.Numerics.Quaternion;
  concatenate(
    value1: System.Numerics.Quaternion,
    value2: System.Numerics.Quaternion
  ): System.Numerics.Quaternion;
  conjugate(value: System.Numerics.Quaternion): System.Numerics.Quaternion;
  createFromAxisAngle(
    axis: System.Numerics.Vector3,
    angle: number | StrongNumeric<SingleHost>
  ): System.Numerics.Quaternion;
  createFromRotationMatrix(matrix: System.Numerics.Matrix4x4): System.Numerics.Quaternion;
  createFromYawPitchRoll(
    yaw: number | StrongNumeric<SingleHost>,
    pitch: number | StrongNumeric<SingleHost>,
    roll: number | StrongNumeric<SingleHost>
  ): System.Numerics.Quaternion;
  divide(
    value1: System.Numerics.Quaternion,
    value2: System.Numerics.Quaternion
  ): System.Numerics.Quaternion;
  dot(quaternion1: System.Numerics.Quaternion, quaternion2: System.Numerics.Quaternion): number;
  inverse(value: System.Numerics.Quaternion): System.Numerics.Quaternion;
  lerp(
    quaternion1: System.Numerics.Quaternion,
    quaternion2: System.Numerics.Quaternion,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Quaternion;
  multiply(
    value1: System.Numerics.Quaternion,
    value2: System.Numerics.Quaternion
  ): System.Numerics.Quaternion;
  multiply(
    value1: System.Numerics.Quaternion,
    value2: number | StrongNumeric<SingleHost>
  ): System.Numerics.Quaternion;
  negate(value: System.Numerics.Quaternion): System.Numerics.Quaternion;
  normalize(value: System.Numerics.Quaternion): System.Numerics.Quaternion;
  slerp(
    quaternion1: System.Numerics.Quaternion,
    quaternion2: System.Numerics.Quaternion,
    amount: number | StrongNumeric<SingleHost>
  ): System.Numerics.Quaternion;
  subtract(
    value1: System.Numerics.Quaternion,
    value2: System.Numerics.Quaternion
  ): System.Numerics.Quaternion;
}

export {};
