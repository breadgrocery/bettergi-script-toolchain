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
import "./Vec4d";
import "./Vec4f";
import "./Vec4i";
import "./Vec4s";
import "./Vec4w";

declare const vec4bBrand: unique symbol;
export interface Vec4b extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4bBrand]: true;
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
  add(other: OpenCvSharp.Vec4b): OpenCvSharp.Vec4b;
  subtract(other: OpenCvSharp.Vec4b): OpenCvSharp.Vec4b;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4b;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4b;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<ByteHost>): number;
  };
  toVec4s(): OpenCvSharp.Vec4s;
  toVec4w(): OpenCvSharp.Vec4w;
  toVec4i(): OpenCvSharp.Vec4i;
  toVec4f(): OpenCvSharp.Vec4f;
  toVec4d(): OpenCvSharp.Vec4d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4b): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4b = import("./Vec4b").Vec4b;
  }
}

export interface Vec4bHostType extends HostType<Vec4b, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<ByteHost>,
    item1: number | StrongNumeric<ByteHost>,
    item2: number | StrongNumeric<ByteHost>,
    item3: number | StrongNumeric<ByteHost>
  ): Vec4b;
}

export {};
