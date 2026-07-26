import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./IVec";
import "./Vec2d";
import "./Vec2i";

declare const vec2fBrand: unique symbol;
export interface Vec2f extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2fBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2f): OpenCvSharp.Vec2f;
  subtract(other: OpenCvSharp.Vec2f): OpenCvSharp.Vec2f;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2f;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2f;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<SingleHost>): number;
  };
  toVec2i(): OpenCvSharp.Vec2i;
  toVec2d(): OpenCvSharp.Vec2d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2f = import("./Vec2f").Vec2f;
  }
}

export interface Vec2fHostType extends HostType<Vec2f, ValueTypeTrait> {
  new (item0: number | StrongNumeric<SingleHost>, item1: number | StrongNumeric<SingleHost>): Vec2f;
}

export {};
