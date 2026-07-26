import type {
  ClrHostValue,
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
import "./Point2f";
import "./Rect";
import "./Size2f";

declare const rect2fBrand: unique symbol;
export interface Rect2f extends ClrHostValue {
  readonly [rect2fBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  add(pt: OpenCvSharp.Point2f): OpenCvSharp.Rect2f;
  add(size: OpenCvSharp.Size2f): OpenCvSharp.Rect2f;
  subtract(pt: OpenCvSharp.Point2f): OpenCvSharp.Rect2f;
  subtract(size: OpenCvSharp.Size2f): OpenCvSharp.Rect2f;
  top: number;
  readonly bottom: number;
  left: number;
  readonly right: number;
  location: OpenCvSharp.Point2f;
  size: OpenCvSharp.Size2f;
  readonly topLeft: OpenCvSharp.Point2f;
  readonly bottomRight: OpenCvSharp.Point2f;
  contains(pt: OpenCvSharp.Point2f): boolean;
  contains(rect: OpenCvSharp.Rect2f): boolean;
  contains(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  inflate(size: OpenCvSharp.Size2f): VoidResult;
  inflate(
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  intersect(rect: OpenCvSharp.Rect2f): OpenCvSharp.Rect2f;
  intersectsWith(rect: OpenCvSharp.Rect2f): boolean;
  union(rect: OpenCvSharp.Rect2f): OpenCvSharp.Rect2f;
  deconstruct(
    x: HostVariableOut<number>,
    y: HostVariableOut<number>,
    width: HostVariableOut<number>,
    height: HostVariableOut<number>
  ): VoidResult;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.Rect2f): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type Rect2f = import("./Rect2f").Rect2f;
  }
}

export interface Rect2fHostType extends HostType<Rect2f, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): Rect2f;
  new (location: OpenCvSharp.Point2f, size: OpenCvSharp.Size2f): Rect2f;
  fromLTRB(
    left: number | StrongNumeric<SingleHost>,
    top: number | StrongNumeric<SingleHost>,
    right: number | StrongNumeric<SingleHost>,
    bottom: number | StrongNumeric<SingleHost>
  ): OpenCvSharp.Rect2f;
  inflate(
    rect: OpenCvSharp.Rect,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.Rect;
  intersect(a: OpenCvSharp.Rect2f, b: OpenCvSharp.Rect2f): OpenCvSharp.Rect2f;
  union(a: OpenCvSharp.Rect2f, b: OpenCvSharp.Rect2f): OpenCvSharp.Rect2f;
}

export {};
