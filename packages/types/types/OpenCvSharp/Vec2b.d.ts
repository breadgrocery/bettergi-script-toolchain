import type {
  ByteHost,
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
import "./Vec2i";
import "./Vec2s";
import "./Vec2w";

declare const vec2bBrand: unique symbol;
export interface Vec2b extends ClrHostValue, OpenCvSharp.IVecInput {
  readonly [vec2bBrand]: true;
  item0: number;
  item1: number;
  deconstruct(item0: HostVariableOut<number>, item1: HostVariableOut<number>): VoidResult;
  add(other: OpenCvSharp.Vec2b): OpenCvSharp.Vec2b;
  subtract(other: OpenCvSharp.Vec2b): OpenCvSharp.Vec2b;
  multiply(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2b;
  divide(alpha: number | StrongNumeric<DoubleHost>): OpenCvSharp.Vec2b;
  item: {
    (i: number | StrongNumeric<Int32Host>): number;
    get(i: number | StrongNumeric<Int32Host>): number;
    set(i: number | StrongNumeric<Int32Host>, value: number | StrongNumeric<ByteHost>): number;
  };
  toVec2s(): OpenCvSharp.Vec2s;
  toVec2w(): OpenCvSharp.Vec2w;
  toVec2i(): OpenCvSharp.Vec2i;
  toVec2f(): OpenCvSharp.Vec2f;
  toVec2d(): OpenCvSharp.Vec2d;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.Vec2b): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Vec2b = import("./Vec2b").Vec2b;
  }
}

export interface Vec2bHostType extends HostType<Vec2b, ValueTypeTrait> {
  new (item0: number | StrongNumeric<ByteHost>, item1: number | StrongNumeric<ByteHost>): Vec2b;
  all(v0: number | StrongNumeric<ByteHost>): OpenCvSharp.Vec2b;
}

export {};
