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

declare const sizeBrand: unique symbol;
export interface Size extends ClrHostValue {
  readonly [sizeBrand]: true;
  width: number;
  height: number;
  deconstruct(width: HostVariableOut<number>, height: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Size): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Size = import("./Size").Size;
  }
}

export interface SizeHostType extends HostType<Size, ValueTypeTrait> {
  new (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): Size;
  new (width: number | StrongNumeric<DoubleHost>, height: number | StrongNumeric<DoubleHost>): Size;
}

export {};
