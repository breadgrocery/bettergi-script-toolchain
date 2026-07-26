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
import "./Vec4d";
import "./Vec4f";

declare const vec4iBrand: unique symbol;
export interface Vec4i extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec4iBrand]: true;
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
  add(other: OpenCvSharp.Vec4i): OpenCvSharp.Vec4i;
  subtract(other: OpenCvSharp.Vec4i): OpenCvSharp.Vec4i;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4i;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec4i;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int32Host>): number;
  };
  toVec4f(): OpenCvSharp.Vec4f;
  toVec4d(): OpenCvSharp.Vec4d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec4i): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec4i = import("./Vec4i").Vec4i;
  }
}

export interface Vec4iHostType extends HostType<Vec4i, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int32Host>,
    item1: number | StrongNumeric<Int32Host>,
    item2: number | StrongNumeric<Int32Host>,
    item3: number | StrongNumeric<Int32Host>
  ): Vec4i;
}

export {};
