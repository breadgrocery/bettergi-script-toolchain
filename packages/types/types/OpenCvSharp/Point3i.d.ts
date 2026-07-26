import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Vec3i";

declare const point3iBrand: unique symbol;
export interface Point3i extends ClrHostValue {
  readonly [point3iBrand]: true;
  x: number;
  y: number;
  z: number;
  toVec3i(): OpenCvSharp.Vec3i;
  plus(): OpenCvSharp.Point3i;
  negate(): OpenCvSharp.Point3i;
  add(p: OpenCvSharp.Point3i): OpenCvSharp.Point3i;
  subtract(p: OpenCvSharp.Point3i): OpenCvSharp.Point3i;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point3i;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    z: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point3i): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point3i = import("./Point3i").Point3i;
  }
}

export interface Point3iHostType extends HostType<Point3i, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    z: number | StrongNumeric<Int32Host>
  ): Point3i;
  fromVec3i(vec: OpenCvSharp.Vec3i): OpenCvSharp.Point3i;
}

export {};
