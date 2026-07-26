import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Size";
import "./Size2f";

declare const size2dBrand: unique symbol;
export interface Size2d extends ClrHostValue {
  readonly [size2dBrand]: true;
  width: number;
  height: number;
  toSize(): OpenCvSharp.Size;
  toSize2f(): OpenCvSharp.Size2f;
  deconstruct(width: HostVariableOut<number>, height: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Size2d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Size2d = import("./Size2d").Size2d;
  }
}

export interface Size2dHostType extends HostType<Size2d, ValueTypeTrait> {
  new (
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): Size2d;
}

export {};
