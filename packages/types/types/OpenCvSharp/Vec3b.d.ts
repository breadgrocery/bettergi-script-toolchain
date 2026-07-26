import type {
  ByteHost,
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
import "./Vec3i";
import "./Vec3s";
import "./Vec3w";

declare const vec3bBrand: unique symbol;
export interface Vec3b extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec3bBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec3b): OpenCvSharp.Vec3b;
  subtract(other: OpenCvSharp.Vec3b): OpenCvSharp.Vec3b;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3b;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec3b;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<ByteHost>): number;
  };
  toVec3s(): OpenCvSharp.Vec3s;
  toVec3w(): OpenCvSharp.Vec3w;
  toVec3i(): OpenCvSharp.Vec3i;
  toVec3f(): OpenCvSharp.Vec3f;
  toVec3d(): OpenCvSharp.Vec3d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec3b): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec3b = import("./Vec3b").Vec3b;
  }
}

export interface Vec3bHostType extends HostType<Vec3b, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<ByteHost>,
    item1: number | StrongNumeric<ByteHost>,
    item2: number | StrongNumeric<ByteHost>
  ): Vec3b;
}

export {};
