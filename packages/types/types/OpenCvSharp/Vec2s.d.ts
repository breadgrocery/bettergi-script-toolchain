import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int16Host,
  Int32Host,
  StrongNumeric,
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
import "./Vec2w";

declare const vec2sBrand: unique symbol;
export interface Vec2s extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2sBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2s): OpenCvSharp.Vec2s;
  subtract(other: OpenCvSharp.Vec2s): OpenCvSharp.Vec2s;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2s;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2s;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int16Host>): number;
  };
  toVec2w(): OpenCvSharp.Vec2w;
  toVec2i(): OpenCvSharp.Vec2i;
  toVec2f(): OpenCvSharp.Vec2f;
  toVec2d(): OpenCvSharp.Vec2d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2s): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2s = import("./Vec2s").Vec2s;
  }
}

export interface Vec2sHostType extends HostType<Vec2s, ValueTypeTrait> {
  new (item0: number | StrongNumeric<Int16Host>, item1: number | StrongNumeric<Int16Host>): Vec2s;
}

export {};
