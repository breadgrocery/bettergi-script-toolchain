import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IEquatable";
import "../ValueType";
import "./Point";
import "./RectangleF";
import "./Size";

declare const rectangleBrand: unique symbol;
export interface Rectangle extends ClrHostValue {
  readonly [rectangleBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  location: System.Drawing.Point;
  size: System.Drawing.Size;
  readonly isEmpty: boolean;
  readonly top: number;
  readonly right: number;
  readonly bottom: number;
  readonly left: number;
  intersect(rect: System.Drawing.Rectangle): VoidResult;
  inflate(size: System.Drawing.Size): VoidResult;
  inflate(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  contains(pt: System.Drawing.Point): boolean;
  contains(rect: System.Drawing.Rectangle): boolean;
  contains(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): boolean;
  intersectsWith(rect: System.Drawing.Rectangle): boolean;
  offset(pos: System.Drawing.Point): VoidResult;
  offset(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.Rectangle): boolean;
}

declare global {
  namespace System.Drawing {
    type Rectangle = import("./Rectangle").Rectangle;
  }
}

export interface RectangleHostType extends HostType<Rectangle, ValueTypeTrait> {
  new (
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): Rectangle;
  new (location: System.Drawing.Point, size: System.Drawing.Size): Rectangle;
  readonly empty: System.Drawing.Rectangle;
  fromLTRB(
    left: number | StrongNumeric<Int32Host>,
    top: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>
  ): System.Drawing.Rectangle;
  ceiling(value: System.Drawing.RectangleF): System.Drawing.Rectangle;
  truncate(value: System.Drawing.RectangleF): System.Drawing.Rectangle;
  round(value: System.Drawing.RectangleF): System.Drawing.Rectangle;
  inflate(
    rect: System.Drawing.Rectangle,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>
  ): System.Drawing.Rectangle;
  intersect(a: System.Drawing.Rectangle, b: System.Drawing.Rectangle): System.Drawing.Rectangle;
  union(a: System.Drawing.Rectangle, b: System.Drawing.Rectangle): System.Drawing.Rectangle;
}

export {};
