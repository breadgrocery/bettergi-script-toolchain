import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";
import "./Matrix4x4";
import "./Quaternion";
import "./Vector3";
import "./Vector4";

declare const planeBrand: unique symbol;
export interface Plane extends ClrHostValue {
  readonly [planeBrand]: true;
  d: number;
  equals(obj: unknown | null): boolean;
  equals(other: System.Numerics.Plane): boolean;
  getHashCode(): number;
  normal: System.Numerics.Vector3;
  toString(): string;
}

declare global {
  namespace System.Numerics {
    type Plane = import("./Plane").Plane;
  }
}

export interface PlaneHostType extends HostType<Plane, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>,
    d: number | StrongNumeric<SingleHost>
  ): Plane;
  new (normal: System.Numerics.Vector3, d: number | StrongNumeric<SingleHost>): Plane;
  new (value: System.Numerics.Vector4): Plane;
  createFromVertices(
    point1: System.Numerics.Vector3,
    point2: System.Numerics.Vector3,
    point3: System.Numerics.Vector3
  ): System.Numerics.Plane;
  dot(plane: System.Numerics.Plane, value: System.Numerics.Vector4): number;
  dotCoordinate(plane: System.Numerics.Plane, value: System.Numerics.Vector3): number;
  dotNormal(plane: System.Numerics.Plane, value: System.Numerics.Vector3): number;
  normalize(value: System.Numerics.Plane): System.Numerics.Plane;
  transform(plane: System.Numerics.Plane, matrix: System.Numerics.Matrix4x4): System.Numerics.Plane;
  transform(
    plane: System.Numerics.Plane,
    rotation: System.Numerics.Quaternion
  ): System.Numerics.Plane;
}

export {};
