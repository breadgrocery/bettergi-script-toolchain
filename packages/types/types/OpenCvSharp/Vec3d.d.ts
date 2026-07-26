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

declare const vec3dBrand: unique symbol;
export interface Vec3d extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3dBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3d): OpenCvSharp.Vec3d;
  subtract(other: OpenCvSharp.Vec3d): OpenCvSharp.Vec3d;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3d;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3d;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<DoubleHost>): number;
  };
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3d = import("./Vec3d").Vec3d;
  }
}

export interface Vec3dHostType extends HostType<Vec3d, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<DoubleHost>,
    item1: number | StrongNumeric<DoubleHost>,
    item2: number | StrongNumeric<DoubleHost>
  ): Vec3d;
}

export {};
