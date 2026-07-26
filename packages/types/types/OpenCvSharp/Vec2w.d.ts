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
import "./Vec2d";
import "./Vec2f";
import "./Vec2i";
import "./Vec2s";

declare const vec2wBrand: unique symbol;
export interface Vec2w extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2wBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2w): OpenCvSharp.Vec2w;
  subtract(other: OpenCvSharp.Vec2w): OpenCvSharp.Vec2w;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2w;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2w;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<UInt16Host>): number;
  };
  toVec2s(): OpenCvSharp.Vec2s;
  toVec2i(): OpenCvSharp.Vec2i;
  toVec2f(): OpenCvSharp.Vec2f;
  toVec2d(): OpenCvSharp.Vec2d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2w): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2w = import("./Vec2w").Vec2w;
  }
}

export interface Vec2wHostType extends HostType<Vec2w, ValueTypeTrait> {
  new (item0: number | StrongNumeric<UInt16Host>, item1: number | StrongNumeric<UInt16Host>): Vec2w;
}

export {};
