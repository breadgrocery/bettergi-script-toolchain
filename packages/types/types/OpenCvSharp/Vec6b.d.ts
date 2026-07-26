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
import "./Vec6d";
import "./Vec6f";
import "./Vec6i";
import "./Vec6s";
import "./Vec6w";

declare const vec6bBrand: unique symbol;
export interface Vec6b extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec6bBrand]: true;
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
  add(other: OpenCvSharp.Vec6b): OpenCvSharp.Vec6b;
  subtract(other: OpenCvSharp.Vec6b): OpenCvSharp.Vec6b;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6b;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec6b;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<ByteHost>): number;
  };
  toVec6s(): OpenCvSharp.Vec6s;
  toVec6w(): OpenCvSharp.Vec6w;
  toVec6i(): OpenCvSharp.Vec6i;
  toVec6f(): OpenCvSharp.Vec6f;
  toVec6d(): OpenCvSharp.Vec6d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec6b): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec6b = import("./Vec6b").Vec6b;
  }
}

export interface Vec6bHostType extends HostType<Vec6b, ValueTypeTrait> {
  new (
    item0: number | StrongNumeric<ByteHost>,
    item1: number | StrongNumeric<ByteHost>,
    item2: number | StrongNumeric<ByteHost>,
    item3: number | StrongNumeric<ByteHost>,
    item4: number | StrongNumeric<ByteHost>,
    item5: number | StrongNumeric<ByteHost>
  ): Vec6b;
}

export {};
