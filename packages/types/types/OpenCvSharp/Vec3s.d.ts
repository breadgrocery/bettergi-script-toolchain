import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int16Host,
  Int32Host,
  StrongNumeric,
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
import "./Vec3w";

declare const vec3sBrand: unique symbol;
export interface Vec3s extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3sBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3s): OpenCvSharp.Vec3s;
  subtract(other: OpenCvSharp.Vec3s): OpenCvSharp.Vec3s;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3s;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3s;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int16Host>): number;
  };
  toVec3w(): OpenCvSharp.Vec3w;
  toVec3i(): OpenCvSharp.Vec3i;
  toVec3f(): OpenCvSharp.Vec3f;
  toVec3d(): OpenCvSharp.Vec3d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3s): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3s = import("./Vec3s").Vec3s;
  }
}

export interface Vec3sHostType extends HostType<Vec3s, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int16Host>,
    item1: number | StrongNumeric<Int16Host>,
    item2: number | StrongNumeric<Int16Host>
  ): Vec3s;
}

export {};
