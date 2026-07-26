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
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./Vec4s";

declare const vec4wBrand: unique symbol;
export interface Vec4w extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4wBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>,
    item3: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec4w): OpenCvSharp.Vec4w;
  subtract(other: OpenCvSharp.Vec4w): OpenCvSharp.Vec4w;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4w;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4w;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<UInt16Host>): number;
  };
  toVec4s(): OpenCvSharp.Vec4s;
  toVec4i(): OpenCvSharp.Vec4i;
  toVec4f(): OpenCvSharp.Vec4f;
  toVec4d(): OpenCvSharp.Vec4d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4w): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4w = import("./Vec4w").Vec4w;
  }
}

export interface Vec4wHostType extends HostType<Vec4w, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<UInt16Host>,
    item1: number | StrongNumeric<UInt16Host>,
    item2: number | StrongNumeric<UInt16Host>,
    item3: number | StrongNumeric<UInt16Host>
  ): Vec4w;
}

export {};
