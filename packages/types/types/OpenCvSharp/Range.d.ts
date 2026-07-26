import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";

declare const rangeBrand: unique symbol;
export interface Range extends ClrHostValue {
  readonly [rangeBrand]: true;
  readonly start: number;
  readonly end: number;
  deconstruct(start: HostVariableOut<number>, end: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Range): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Range = import("./Range").Range;
  }
}

export interface RangeHostType extends HostType<Range, ValueTypeTrait> {
  new (start: number | StrongNumeric<Int32Host>, end: number | StrongNumeric<Int32Host>): Range;
  readonly all: OpenCvSharp.Range;
}

export {};
