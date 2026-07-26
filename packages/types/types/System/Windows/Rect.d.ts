import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IFormatProvider";
import "../IFormattable";
import "../ValueType";
import "./Media/Matrix";
import "./Point";
import "./Size";
import "./Vector";

declare const rectBrand: unique symbol;
export interface Rect extends ClrHostValue, System.IFormattableInput {
  readonly [rectBrand]: true;
  x: number;
  y: number;
  width: number;
  height: number;
  readonly top: number;
  readonly bottom: number;
  readonly left: number;
  readonly right: number;
  location: System.Windows.Point;
  size: System.Windows.Size;
  readonly topLeft: System.Windows.Point;
  readonly bottomRight: System.Windows.Point;
  contains(point: System.Windows.Point): boolean;
  contains(rect: System.Windows.Rect): boolean;
  contains(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): boolean;
  inflate(size: System.Windows.Size): VoidResult;
  inflate(
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  intersect(rect: System.Windows.Rect): VoidResult;
  intersectsWith(rect: System.Windows.Rect): boolean;
  union(point: System.Windows.Point): VoidResult;
  union(rect: System.Windows.Rect): VoidResult;
  equals(o: unknown): boolean;
  equals(value: System.Windows.Rect): boolean;
  getHashCode(): number;
  offset(offsetVector: System.Windows.Vector): VoidResult;
  offset(
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  readonly bottomLeft: System.Windows.Point;
  readonly isEmpty: boolean;
  readonly topRight: System.Windows.Point;
  scale(
    scaleX: number | StrongNumeric<DoubleHost>,
    scaleY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
  transform(matrix: System.Windows.Media.Matrix): VoidResult;
}

declare global {
  namespace System.Windows {
    type Rect = import("./Rect").Rect;
  }
}

export interface RectHostType extends HostType<Rect, ValueTypeTrait> {
  new (location: System.Windows.Point, size: System.Windows.Size): Rect;
  new (
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): Rect;
  new (point1: System.Windows.Point, point2: System.Windows.Point): Rect;
  new (point: System.Windows.Point, vector: System.Windows.Vector): Rect;
  new (size: System.Windows.Size): Rect;
  readonly empty: System.Windows.Rect;
  equals(rect1: System.Windows.Rect, rect2: System.Windows.Rect): boolean;
  parse(source: string): System.Windows.Rect;
  intersect(rect1: System.Windows.Rect, rect2: System.Windows.Rect): System.Windows.Rect;
  union(rect1: System.Windows.Rect, rect2: System.Windows.Rect): System.Windows.Rect;
  union(rect: System.Windows.Rect, point: System.Windows.Point): System.Windows.Rect;
  offset(rect: System.Windows.Rect, offsetVector: System.Windows.Vector): System.Windows.Rect;
  offset(
    rect: System.Windows.Rect,
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): System.Windows.Rect;
  inflate(rect: System.Windows.Rect, size: System.Windows.Size): System.Windows.Rect;
  inflate(
    rect: System.Windows.Rect,
    width: number | StrongNumeric<DoubleHost>,
    height: number | StrongNumeric<DoubleHost>
  ): System.Windows.Rect;
  transform(rect: System.Windows.Rect, matrix: System.Windows.Media.Matrix): System.Windows.Rect;
}

export {};
