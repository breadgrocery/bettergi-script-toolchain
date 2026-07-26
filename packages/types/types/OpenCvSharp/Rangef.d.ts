import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Range";

declare const rangefBrand: unique symbol;
export interface Rangef extends ClrHostValue {
  readonly [rangefBrand]: true;
  readonly start: number;
  readonly end: number;
  toRange(): OpenCvSharp.Range;
  deconstruct(start: HostVariableOut<number>, end: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Rangef): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Rangef = import("./Rangef").Rangef;
  }
}

export interface RangefHostType extends HostType<Rangef, ValueTypeTrait> {
  new (start: number | StrongNumeric<SingleHost>, end: number | StrongNumeric<SingleHost>): Rangef;
  readonly all: OpenCvSharp.Range;
}

export {};
