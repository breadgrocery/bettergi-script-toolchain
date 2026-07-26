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

declare const vectorBrand: unique symbol;
export interface Vector extends ClrHostValue, System.IFormattableInput {
  readonly [vectorBrand]: true;
  equals(o: unknown): boolean;
  equals(value: System.Windows.Vector): boolean;
  getHashCode(): number;
  negate(): VoidResult;
  normalize(): VoidResult;
  readonly length: number;
  readonly lengthSquared: number;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
  x: number;
  y: number;
}

declare global {
  namespace System.Windows {
    type Vector = import("./Vector").Vector;
  }
}

export interface VectorHostType extends HostType<Vector, ValueTypeTrait> {
  new (x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): Vector;
  equals(vector1: System.Windows.Vector, vector2: System.Windows.Vector): boolean;
  parse(source: string): System.Windows.Vector;
  crossProduct(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;
  angleBetween(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;
  add(vector1: System.Windows.Vector, vector2: System.Windows.Vector): System.Windows.Vector;
  subtract(vector1: System.Windows.Vector, vector2: System.Windows.Vector): System.Windows.Vector;
  add(vector: System.Windows.Vector, point: System.Windows.Point): System.Windows.Point;
  multiply(
    vector: System.Windows.Vector,
    scalar: number | StrongNumeric<DoubleHost>
  ): System.Windows.Vector;
  multiply(
    scalar: number | StrongNumeric<DoubleHost>,
    vector: System.Windows.Vector
  ): System.Windows.Vector;
  divide(
    vector: System.Windows.Vector,
    scalar: number | StrongNumeric<DoubleHost>
  ): System.Windows.Vector;
  multiply(
    vector: System.Windows.Vector,
    matrix: System.Windows.Media.Matrix
  ): System.Windows.Vector;
  multiply(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;
  determinant(vector1: System.Windows.Vector, vector2: System.Windows.Vector): number;
}

export {};
