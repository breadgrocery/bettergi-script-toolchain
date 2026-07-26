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
import "./Vec2d";
import "./Vec2f";

declare const vec2iBrand: unique symbol;
export interface Vec2i extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2iBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2i): OpenCvSharp.Vec2i;
  subtract(other: OpenCvSharp.Vec2i): OpenCvSharp.Vec2i;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2i;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2i;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<Int32Host>): number;
  };
  toVec2f(): OpenCvSharp.Vec2f;
  toVec2d(): OpenCvSharp.Vec2d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2i): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2i = import("./Vec2i").Vec2i;
  }
}

export interface Vec2iHostType extends HostType<Vec2i, ValueTypeTrait> {
  new (item0: number | StrongNumeric<Int32Host>, item1: number | StrongNumeric<Int32Host>): Vec2i;
}

export {};
