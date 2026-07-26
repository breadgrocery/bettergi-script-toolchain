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
import "./PointF";
import "./Size";

declare const pointBrand: unique symbol;
export interface Point extends ClrHostValue {
  readonly [pointBrand]: true;
  x: number;
  y: number;
  readonly isEmpty: boolean;
  offset(dx: number | StrongNumeric<Int32Host>, dy: number | StrongNumeric<Int32Host>): VoidResult;
  offset(p: System.Drawing.Point): VoidResult;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.Point): boolean;
}

declare global {
  namespace System.Drawing {
    type Point = import("./Point").Point;
  }
}

export interface PointHostType extends HostType<Point, ValueTypeTrait> {
  new (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): Point;
  new (sz: System.Drawing.Size): Point;
  new (dw: number | StrongNumeric<Int32Host>): Point;
  readonly empty: System.Drawing.Point;
  add(pt: System.Drawing.Point, sz: System.Drawing.Size): System.Drawing.Point;
  subtract(pt: System.Drawing.Point, sz: System.Drawing.Size): System.Drawing.Point;
  ceiling(value: System.Drawing.PointF): System.Drawing.Point;
  truncate(value: System.Drawing.PointF): System.Drawing.Point;
  round(value: System.Drawing.PointF): System.Drawing.Point;
}

export {};
