import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point3i";
import "./Vec3d";

declare const point3dBrand: unique symbol;
export interface Point3d extends ClrHostValue {
  readonly [point3dBrand]: true;
  x: number;
  y: number;
  z: number;
  toPoint3i(): OpenCvSharp.Point3i;
  toVec3d(): OpenCvSharp.Vec3d;
  plus(): OpenCvSharp.Point3d;
  negate(): OpenCvSharp.Point3d;
  add(p: OpenCvSharp.Point3d): OpenCvSharp.Point3d;
  subtract(p: OpenCvSharp.Point3d): OpenCvSharp.Point3d;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point3d;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    z: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point3d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point3d = import("./Point3d").Point3d;
  }
}

export interface Point3dHostType extends HostType<Point3d, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    z: number | StrongNumeric<DoubleHost>
  ): Point3d;
  fromPoint3i(point: OpenCvSharp.Point3i): OpenCvSharp.Point3d;
  fromVec3d(vec: OpenCvSharp.Vec3d): OpenCvSharp.Point3d;
}

export {};
