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
import "./Point2d";
import "./Rect";
import "./Size2d";

declare const rect2dBrand: unique symbol;
export interface Rect2d extends ClrHostValue {
  readonly [rect2dBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  add(pt: OpenCvSharp.Point2d): OpenCvSharp.Rect2d;
  add(size: OpenCvSharp.Size2d): OpenCvSharp.Rect2d;
  subtract(pt: OpenCvSharp.Point2d): OpenCvSharp.Rect2d;
  subtract(size: OpenCvSharp.Size2d): OpenCvSharp.Rect2d;
  top: number;
  readonly bottom: number;
  left: number;
  readonly right: number;
  location: OpenCvSharp.Point2d;
  size: OpenCvSharp.Size2d;
  readonly topLeft: OpenCvSharp.Point2d;
  readonly bottomRight: OpenCvSharp.Point2d;
  toRect(): OpenCvSharp.Rect;
  contains(pt: OpenCvSharp.Point2d): boolean;
  contains(rect: OpenCvSharp.Rect2d): boolean;
  contains(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): boolean;
  inflate(size: OpenCvSharp.Size2d): VoidResult;
  inflate(
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  intersect(rect: OpenCvSharp.Rect2d): OpenCvSharp.Rect2d;
  intersectsWith(rect: OpenCvSharp.Rect2d): boolean;
  union(rect: OpenCvSharp.Rect2d): OpenCvSharp.Rect2d;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    width: HostVariableOut<number>,
    height: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Rect2d): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Rect2d = import("./Rect2d").Rect2d;
  }
}

export interface Rect2dHostType extends HostType<Rect2d, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): Rect2d;
  new (location: OpenCvSharp.Point2d, size: OpenCvSharp.Size2d): Rect2d;
  fromLTRB(
    left: number | StrongNumeric<DoubleHost>,
    top: number | StrongNumeric<DoubleHost>,
    right: number | StrongNumeric<DoubleHost>,
    bottom: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Rect2d;
  inflate(
    rect: OpenCvSharp.Rect,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  intersect(a: OpenCvSharp.Rect2d, b: OpenCvSharp.Rect2d): OpenCvSharp.Rect2d;
  union(a: OpenCvSharp.Rect2d, b: OpenCvSharp.Rect2d): OpenCvSharp.Rect2d;
}

export {};
