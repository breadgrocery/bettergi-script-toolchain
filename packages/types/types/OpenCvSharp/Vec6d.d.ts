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

declare const vec6dBrand: unique symbol;
export interface Vec6d extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6dBrand]: true;
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
  add(other: OpenCvSharp.Vec6d): OpenCvSharp.Vec6d;
  subtract(other: OpenCvSharp.Vec6d): OpenCvSharp.Vec6d;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6d;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6d;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<DoubleHost>): number;
  };
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6d = import("./Vec6d").Vec6d;
  }
}

export interface Vec6dHostType extends HostType<Vec6d, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<DoubleHost>,
    item1: number | StrongNumeric<DoubleHost>,
    item2: number | StrongNumeric<DoubleHost>,
    item3: number | StrongNumeric<DoubleHost>,
    item4: number | StrongNumeric<DoubleHost>,
    item5: number | StrongNumeric<DoubleHost>
  ): Vec6d;
}

export {};
