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

declare const vec2dBrand: unique symbol;
export interface Vec2d extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2dBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2d): OpenCvSharp.Vec2d;
  subtract(other: OpenCvSharp.Vec2d): OpenCvSharp.Vec2d;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2d;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2d;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<DoubleHost>): number;
  };
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2d = import("./Vec2d").Vec2d;
  }
}

export interface Vec2dHostType extends HostType<Vec2d, ValueTypeTrait> {
  new (item0: number | StrongNumeric<DoubleHost>, item1: number | StrongNumeric<DoubleHost>): Vec2d;
}

export {};
