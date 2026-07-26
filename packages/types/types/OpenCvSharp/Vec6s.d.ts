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
import "./Vec6d";
import "./Vec6f";
import "./Vec6i";
import "./Vec6w";

declare const vec6sBrand: unique symbol;
export interface Vec6s extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6sBrand]: true;
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
  add(other: OpenCvSharp.Vec6s): OpenCvSharp.Vec6s;
  subtract(other: OpenCvSharp.Vec6s): OpenCvSharp.Vec6s;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6s;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6s;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int16Host>): number;
  };
  toVec6w(): OpenCvSharp.Vec6w;
  toVec6i(): OpenCvSharp.Vec6i;
  toVec6f(): OpenCvSharp.Vec6f;
  toVec6d(): OpenCvSharp.Vec6d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6s): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6s = import("./Vec6s").Vec6s;
  }
}

export interface Vec6sHostType extends HostType<Vec6s, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int16Host>,
    item1: number | StrongNumeric<Int16Host>,
    item2: number | StrongNumeric<Int16Host>,
    item3: number | StrongNumeric<Int16Host>,
    item4: number | StrongNumeric<Int16Host>,
    item5: number | StrongNumeric<Int16Host>
  ): Vec6s;
}

export {};
