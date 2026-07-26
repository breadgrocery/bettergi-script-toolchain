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
import "./Vector";

declare const pointBrand: unique symbol;
export interface Point extends ClrHostValue, System.IFormattableInput {
  readonly [pointBrand]: true;
  x: number;
  y: number;
  offset(
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  getHashCode(): number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
  equals(o: unknown): boolean;
  equals(value: System.Windows.Point): boolean;
}

declare global {
  namespace System.Windows {
    type Point = import("./Point").Point;
  }
}

export interface PointHostType extends HostType<Point, ValueTypeTrait> {
  new (x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): Point;
  equals(point1: System.Windows.Point, point2: System.Windows.Point): boolean;
  parse(source: string): System.Windows.Point;
  add(point: System.Windows.Point, vector: System.Windows.Vector): System.Windows.Point;
  subtract(point: System.Windows.Point, vector: System.Windows.Vector): System.Windows.Point;
  subtract(point1: System.Windows.Point, point2: System.Windows.Point): System.Windows.Vector;
  multiply(point: System.Windows.Point, matrix: System.Windows.Media.Matrix): System.Windows.Point;
}

export {};
