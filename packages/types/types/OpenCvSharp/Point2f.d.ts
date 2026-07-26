import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point";
import "./Vec2f";

declare const point2fBrand: unique symbol;
export interface Point2f extends ClrHostValue {
  readonly [point2fBrand]: true;
  x: number;
  y: number;
  toPoint(): OpenCvSharp.Point;
  toVec2f(): OpenCvSharp.Vec2f;
  plus(): OpenCvSharp.Point2f;
  negate(): OpenCvSharp.Point2f;
  add(p: OpenCvSharp.Point2f): OpenCvSharp.Point2f;
  subtract(p: OpenCvSharp.Point2f): OpenCvSharp.Point2f;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point2f;
  distanceTo(p: OpenCvSharp.Point2f): number;
  dotProduct(p: OpenCvSharp.Point2f): number;
  crossProduct(p: OpenCvSharp.Point2f): number;
  deconstruct(x: HostVariableOut<number>, y: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point2f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point2f = import("./Point2f").Point2f;
  }
}

export interface Point2fHostType extends HostType<Point2f, ValueTypeTrait> {
  new (x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): Point2f;
  fromPoint(point: OpenCvSharp.Point): OpenCvSharp.Point2f;
  fromVec2f(vec: OpenCvSharp.Vec2f): OpenCvSharp.Point2f;
  distance(p1: OpenCvSharp.Point2f, p2: OpenCvSharp.Point2f): number;
  dotProduct(p1: OpenCvSharp.Point2f, p2: OpenCvSharp.Point2f): number;
  crossProduct(p1: OpenCvSharp.Point2f, p2: OpenCvSharp.Point2f): number;
}

export {};
