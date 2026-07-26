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
import "./Vec6d";
import "./Vec6f";

declare const vec6iBrand: unique symbol;
export interface Vec6i extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6iBrand]: true;
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
  add(other: OpenCvSharp.Vec6i): OpenCvSharp.Vec6i;
  subtract(other: OpenCvSharp.Vec6i): OpenCvSharp.Vec6i;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6i;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6i;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int32Host>): number;
  };
  toVec6f(): OpenCvSharp.Vec6f;
  toVec6d(): OpenCvSharp.Vec6d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6i): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6i = import("./Vec6i").Vec6i;
  }
}

export interface Vec6iHostType extends HostType<Vec6i, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<Int32Host>,
    item1: number | StrongNumeric<Int32Host>,
    item2: number | StrongNumeric<Int32Host>,
    item3: number | StrongNumeric<Int32Host>,
    item4: number | StrongNumeric<Int32Host>,
    item5: number | StrongNumeric<Int32Host>
  ): Vec6i;
}

export {};
