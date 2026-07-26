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
import "./Vec4d";
import "./Vec4i";

declare const vec4fBrand: unique symbol;
export interface Vec4f extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4fBrand]: true;
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
  add(other: OpenCvSharp.Vec4f): OpenCvSharp.Vec4f;
  subtract(other: OpenCvSharp.Vec4f): OpenCvSharp.Vec4f;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4f;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4f;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<SingleHost>): number;
  };
  toVec4i(): OpenCvSharp.Vec4i;
  toVec4d(): OpenCvSharp.Vec4d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4f = import("./Vec4f").Vec4f;
  }
}

export interface Vec4fHostType extends HostType<Vec4f, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<SingleHost>,
    item1: number | StrongNumeric<SingleHost>,
    item2: number | StrongNumeric<SingleHost>,
    item3: number | StrongNumeric<SingleHost>
  ): Vec4f;
}

export {};
