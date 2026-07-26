import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  StrongNumeric,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IFormatProvider";
import "../../IFormattable";
import "../../ValueType";
import "../Point";
import "../Vector";

declare const matrixBrand: unique symbol;
export interface Matrix extends ClrHostValue, System.IFormattableInput {
  readonly [matrixBrand]: true;
  append(matrix: System.Windows.Media.Matrix): VoidResult;
  equals(o: unknown): boolean;
  equals(value: System.Windows.Media.Matrix): boolean;
  getHashCode(): number;
  invert(): VoidResult;
  m11: number;
  m12: number;
  m21: number;
  m22: number;
  offsetX: number;
  offsetY: number;
  prepend(matrix: System.Windows.Media.Matrix): VoidResult;
  readonly determinant: number;
  readonly hasInverse: boolean;
  readonly isIdentity: boolean;
  rotate(angle: number | StrongNumeric<DoubleHost>): VoidResult;
  rotateAt(
    angle: number | StrongNumeric<DoubleHost>,
    centerX: number | StrongNumeric<DoubleHost>,
    centerY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rotateAtPrepend(
    angle: number | StrongNumeric<DoubleHost>,
    centerX: number | StrongNumeric<DoubleHost>,
    centerY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  rotatePrepend(angle: number | StrongNumeric<DoubleHost>): VoidResult;
  scale(
    scaleX: number | StrongNumeric<DoubleHost>,
    scaleY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  scaleAt(
    scaleX: number | StrongNumeric<DoubleHost>,
    scaleY: number | StrongNumeric<DoubleHost>,
    centerX: number | StrongNumeric<DoubleHost>,
    centerY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  scaleAtPrepend(
    scaleX: number | StrongNumeric<DoubleHost>,
    scaleY: number | StrongNumeric<DoubleHost>,
    centerX: number | StrongNumeric<DoubleHost>,
    centerY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  scalePrepend(
    scaleX: number | StrongNumeric<DoubleHost>,
    scaleY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  setIdentity(): VoidResult;
  skew(
    skewX: number | StrongNumeric<DoubleHost>,
    skewY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  skewPrepend(
    skewX: number | StrongNumeric<DoubleHost>,
    skewY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  toString(): string;
  toString(provider: System.IFormatProvider): string;
  transform(point: System.Windows.Point): System.Windows.Point;
  transform(points: HostArray<System.Windows.Point>): VoidResult;
  transform(vector: System.Windows.Vector): System.Windows.Vector;
  transform(vectors: HostArray<System.Windows.Vector>): VoidResult;
  translate(
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
  translatePrepend(
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): VoidResult;
}

declare global {
  namespace System.Windows.Media {
    type Matrix = import("./Matrix").Matrix;
  }
}

export interface MatrixHostType extends HostType<Matrix, ValueTypeTrait> {
  new (
    m11: number | StrongNumeric<DoubleHost>,
    m12: number | StrongNumeric<DoubleHost>,
    m21: number | StrongNumeric<DoubleHost>,
    m22: number | StrongNumeric<DoubleHost>,
    offsetX: number | StrongNumeric<DoubleHost>,
    offsetY: number | StrongNumeric<DoubleHost>
  ): Matrix;
  readonly identity: System.Windows.Media.Matrix;
  multiply(
    trans1: System.Windows.Media.Matrix,
    trans2: System.Windows.Media.Matrix
  ): System.Windows.Media.Matrix;
  equals(matrix1: System.Windows.Media.Matrix, matrix2: System.Windows.Media.Matrix): boolean;
  parse(source: string): System.Windows.Media.Matrix;
}

export {};
