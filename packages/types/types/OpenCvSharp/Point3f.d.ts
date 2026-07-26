import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point3i";
import "./Vec3f";

declare const point3fBrand: unique symbol;
export interface Point3f extends ClrHostValue {
  readonly [point3fBrand]: true;
  x: number;
  y: number;
  z: number;
  toPoint3i(): OpenCvSharp.Point3i;
  toVec3f(): OpenCvSharp.Vec3f;
  plus(): OpenCvSharp.Point3f;
  negate(): OpenCvSharp.Point3f;
  add(p: OpenCvSharp.Point3f): OpenCvSharp.Point3f;
  subtract(p: OpenCvSharp.Point3f): OpenCvSharp.Point3f;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point3f;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    z: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point3f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point3f = import("./Point3f").Point3f;
  }
}

export interface Point3fHostType extends HostType<Point3f, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    z: number | StrongNumeric<SingleHost>
  ): Point3f;
  fromPoint3i(point: OpenCvSharp.Point3i): OpenCvSharp.Point3f;
  fromVec3f(vec: OpenCvSharp.Vec3f): OpenCvSharp.Point3f;
}

export {};
