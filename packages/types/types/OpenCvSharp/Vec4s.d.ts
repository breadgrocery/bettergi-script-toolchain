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
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./Vec4w";

declare const vec4sBrand: unique symbol;
export interface Vec4s extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4sBrand]: true;
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
  add(other: OpenCvSharp.Vec4s): OpenCvSharp.Vec4s;
  subtract(other: OpenCvSharp.Vec4s): OpenCvSharp.Vec4s;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4s;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4s;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int16Host>): number;
  };
  toVec4w(): OpenCvSharp.Vec4w;
  toVec4i(): OpenCvSharp.Vec4i;
  toVec4f(): OpenCvSharp.Vec4f;
  toVec4d(): OpenCvSharp.Vec4d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4s): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4s = import("./Vec4s").Vec4s;
  }
}

export interface Vec4sHostType extends HostType<Vec4s, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int16Host>,
    item1: number | StrongNumeric<Int16Host>,
    item2: number | StrongNumeric<Int16Host>,
    item3: number | StrongNumeric<Int16Host>
  ): Vec4s;
}

export {};
