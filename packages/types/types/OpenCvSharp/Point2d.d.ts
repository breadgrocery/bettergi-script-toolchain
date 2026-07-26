import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point";
import "./Vec2d";

declare const point2dBrand: unique symbol;
export interface Point2d extends ClrHostValue {
  readonly [point2dBrand]: true;
  x: number;
  y: number;
  toPoint(): OpenCvSharp.Point;
  toVec2d(): OpenCvSharp.Vec2d;
  plus(): OpenCvSharp.Point2d;
  negate(): OpenCvSharp.Point2d;
  add(p: OpenCvSharp.Point2d): OpenCvSharp.Point2d;
  subtract(p: OpenCvSharp.Point2d): OpenCvSharp.Point2d;
  multiply(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.Point2d;
  distanceTo(p: OpenCvSharp.Point2d): number;
  dotProduct(p: OpenCvSharp.Point2d): number;
  crossProduct(p: OpenCvSharp.Point2d): number;
  deconstruct(x: HostVariableOut<number>, y: HostVariableOut<number>): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Point2d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Point2d = import("./Point2d").Point2d;
  }
}

export interface Point2dHostType extends HostType<Point2d, ValueTypeTrait> {
  new (x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): Point2d;
  fromPoint(point: OpenCvSharp.Point): OpenCvSharp.Point2d;
  fromVec2d(vec: OpenCvSharp.Vec2d): OpenCvSharp.Point2d;
  distance(p1: OpenCvSharp.Point2d, p2: OpenCvSharp.Point2d): number;
  dotProduct(p1: OpenCvSharp.Point2d, p2: OpenCvSharp.Point2d): number;
  crossProduct(p1: OpenCvSharp.Point2d, p2: OpenCvSharp.Point2d): number;
}

export {};
