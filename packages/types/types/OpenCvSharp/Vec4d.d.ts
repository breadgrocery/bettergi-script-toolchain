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

declare const vec4dBrand: unique symbol;
export interface Vec4d extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4dBrand]: true;
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
  add(other: OpenCvSharp.Vec4d): OpenCvSharp.Vec4d;
  subtract(other: OpenCvSharp.Vec4d): OpenCvSharp.Vec4d;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4d;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4d;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<DoubleHost>): number;
  };
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4d = import("./Vec4d").Vec4d;
  }
}

export interface Vec4dHostType extends HostType<Vec4d, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<DoubleHost>,
    item1: number | StrongNumeric<DoubleHost>,
    item2: number | StrongNumeric<DoubleHost>,
    item3: number | StrongNumeric<DoubleHost>
  ): Vec4d;
}

export {};
