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
import "./Vec6d";
import "./Vec6f";
import "./Vec6i";
import "./Vec6s";

declare const vec6wBrand: unique symbol;
export interface Vec6w extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6wBrand]: true;
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
  add(other: OpenCvSharp.Vec6w): OpenCvSharp.Vec6w;
  subtract(other: OpenCvSharp.Vec6w): OpenCvSharp.Vec6w;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6w;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6w;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<UInt16Host>): number;
  };
  toVec6s(): OpenCvSharp.Vec6s;
  toVec6i(): OpenCvSharp.Vec6i;
  toVec6f(): OpenCvSharp.Vec6f;
  toVec6d(): OpenCvSharp.Vec6d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6w): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6w = import("./Vec6w").Vec6w;
  }
}

export interface Vec6wHostType extends HostType<Vec6w, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<UInt16Host>,
    item1: number | StrongNumeric<UInt16Host>,
    item2: number | StrongNumeric<UInt16Host>,
    item3: number | StrongNumeric<UInt16Host>,
    item4: number | StrongNumeric<UInt16Host>,
    item5: number | StrongNumeric<UInt16Host>
  ): Vec6w;
}

export {};
