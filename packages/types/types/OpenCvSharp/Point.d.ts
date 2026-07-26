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
import "./Vec2i";

declare const pointBrand: unique symbol;
export interface Point extends ClrHostValue {
  readonly [pointBrand]: true;
  x: number;
  y: number;
  toVec2i(): OpenCvSharp.Vec2i;
  plus(): OpenCvSharp.Point;
  negate(): OpenCvSharp.Point;
  add(p: OpenCvSharp.Point): OpenCvSharp.Point;
  subtract(p: OpenCvSharp.Point): OpenCvSharp.Point;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point;
  distanceTo(p: OpenCvSharp.Point): number;
  dotProduct(p: OpenCvSharp.Point): number;
  crossProduct(p: OpenCvSharp.Point): number;
  deconstruct(x: HostVariableOut<number>, y: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point = import("./Point").Point;
  }
}

export interface PointHostType extends HostType<Point, ValueTypeTrait> {
  new (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): Point;
  new (x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): Point;
  fromVec2i(vec: OpenCvSharp.Vec2i): OpenCvSharp.Point;
  distance(p1: OpenCvSharp.Point, p2: OpenCvSharp.Point): number;
  dotProduct(p1: OpenCvSharp.Point, p2: OpenCvSharp.Point): number;
  crossProduct(p1: OpenCvSharp.Point, p2: OpenCvSharp.Point): number;
}

export {};
