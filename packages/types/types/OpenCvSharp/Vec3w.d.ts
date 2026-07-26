import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  StrongNumeric,
  UInt16Host,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./IVec";
import "./Vec3d";
import "./Vec3f";
import "./Vec3i";
import "./Vec3s";

declare const vec3wBrand: unique symbol;
export interface Vec3w extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3wBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3w): OpenCvSharp.Vec3w;
  subtract(other: OpenCvSharp.Vec3w): OpenCvSharp.Vec3w;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3w;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3w;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<UInt16Host>): number;
  };
  toVec3s(): OpenCvSharp.Vec3s;
  toVec3i(): OpenCvSharp.Vec3i;
  toVec3f(): OpenCvSharp.Vec3f;
  toVec3d(): OpenCvSharp.Vec3d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3w): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3w = import("./Vec3w").Vec3w;
  }
}

export interface Vec3wHostType extends HostType<Vec3w, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<UInt16Host>,
    item1: number | StrongNumeric<UInt16Host>,
    item2: number | StrongNumeric<UInt16Host>
  ): Vec3w;
}

export {};
