import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point";
import "./Size";

declare const rectBrand: unique symbol;
export interface Rect extends ClrHostValue {
  readonly [rectBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  add(pt: OpenCvSharp.Point): OpenCvSharp.Rect;
  add(size: OpenCvSharp.Size): OpenCvSharp.Rect;
  subtract(pt: OpenCvSharp.Point): OpenCvSharp.Rect;
  subtract(size: OpenCvSharp.Size): OpenCvSharp.Rect;
  top: number;
  readonly bottom: number;
  left: number;
  readonly right: number;
  location: OpenCvSharp.Point;
  size: OpenCvSharp.Size;
  readonly topLeft: OpenCvSharp.Point;
  readonly bottomRight: OpenCvSharp.Point;
  contains(pt: OpenCvSharp.Point): boolean;
  contains(rect: OpenCvSharp.Rect): boolean;
  contains(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): boolean;
  inflate(size: OpenCvSharp.Size): VoidResult;
  inflate(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  intersect(rect: OpenCvSharp.Rect): OpenCvSharp.Rect;
  intersectsWith(rect: OpenCvSharp.Rect): boolean;
  union(rect: OpenCvSharp.Rect): OpenCvSharp.Rect;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    width: HostVariableOut<number>,
    height: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Rect): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Rect = import("./Rect").Rect;
  }
}

export interface RectHostType extends HostType<Rect, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Rect;
  new (location: OpenCvSharp.Point, size: OpenCvSharp.Size): Rect;
  fromLTRB(
    left: number | StrongNumeric<Int32Host>,
    top: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  inflate(
    rect: OpenCvSharp.Rect,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  intersect(a: OpenCvSharp.Rect, b: OpenCvSharp.Rect): OpenCvSharp.Rect;
  union(a: OpenCvSharp.Rect, b: OpenCvSharp.Rect): OpenCvSharp.Rect;
}

export {};
