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
import "./IVec";
import "./Vec3d";
import "./Vec3f";

declare const vec3iBrand: unique symbol;
export interface Vec3i extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3iBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3i): OpenCvSharp.Vec3i;
  subtract(other: OpenCvSharp.Vec3i): OpenCvSharp.Vec3i;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3i;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3i;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int32Host>): number;
  };
  toVec3f(): OpenCvSharp.Vec3f;
  toVec3d(): OpenCvSharp.Vec3d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3i): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3i = import("./Vec3i").Vec3i;
  }
}

export interface Vec3iHostType extends HostType<Vec3i, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int32Host>,
    item1: number | StrongNumeric<Int32Host>,
    item2: number | StrongNumeric<Int32Host>
  ): Vec3i;
}

export {};
