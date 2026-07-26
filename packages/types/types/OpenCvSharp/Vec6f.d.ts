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
import "./Vec6d";
import "./Vec6i";

declare const vec6fBrand: unique symbol;
export interface Vec6f extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6fBrand]: true;
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  deconstruct(
    item0: HostVariableOut<number>,
    item1: HostVariableOut<number>,
    item2: HostVariableOut<number>,
    item3: HostVariableOut<number>,
    item4: HostVariableOut<number>,
    item5: HostVariableOut<number>
  ): VoidResult;
  add(other: OpenCvSharp.Vec6f): OpenCvSharp.Vec6f;
  subtract(other: OpenCvSharp.Vec6f): OpenCvSharp.Vec6f;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6f;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6f;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<SingleHost>): number;
  };
  toVec6i(): OpenCvSharp.Vec6i;
  toVec6d(): OpenCvSharp.Vec6d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6f = import("./Vec6f").Vec6f;
  }
}

export interface Vec6fHostType extends HostType<Vec6f, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<SingleHost>,
    item1: number | StrongNumeric<SingleHost>,
    item2: number | StrongNumeric<SingleHost>,
    item3: number | StrongNumeric<SingleHost>,
    item4: number | StrongNumeric<SingleHost>,
    item5: number | StrongNumeric<SingleHost>
  ): Vec6f;
}

export {};
