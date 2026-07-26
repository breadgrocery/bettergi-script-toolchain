import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./IVec";
import "./Vec3d";
import "./Vec3i";

declare const vec3fBrand: unique symbol;
export interface Vec3f extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3fBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3f): OpenCvSharp.Vec3f;
  subtract(other: OpenCvSharp.Vec3f): OpenCvSharp.Vec3f;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3f;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3f;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<SingleHost>): number;
  };
  toVec3i(): OpenCvSharp.Vec3i;
  toVec3d(): OpenCvSharp.Vec3d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3f = import("./Vec3f").Vec3f;
  }
}

export interface Vec3fHostType extends HostType<Vec3f, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<SingleHost>,
    item1: number | StrongNumeric<SingleHost>,
    item2: number | StrongNumeric<SingleHost>
  ): Vec3f;
}

export {};
