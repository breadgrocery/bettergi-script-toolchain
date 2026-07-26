import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Size";
import "./Size2d";

declare const size2fBrand: unique symbol;
export interface Size2f extends ClrHostValue {
  readonly [size2fBrand]: true;
  width: number;
  height: number;
  toSize(): OpenCvSharp.Size;
  toSize2d(): OpenCvSharp.Size2d;
  deconstruct(width: HostVariableOut<number>, height: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Size2f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Size2f = import("./Size2f").Size2f;
  }
}

export interface Size2fHostType extends HostType<Size2f, ValueTypeTrait> {
  new (
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): Size2f;
  new (
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): Size2f;
}

export {};
