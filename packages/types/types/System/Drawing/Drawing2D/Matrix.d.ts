import type {
  EnumInput,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../../MarshalByRefObject";
import "../../Numerics/Matrix3x2";
import "../Point";
import "../PointF";
import "../Rectangle";
import "../RectangleF";
import "./MatrixOrder";

declare const matrixBrand: unique symbol;
export interface Matrix
  extends
    Omit<
      System.MarshalByRefObject,
      | "clone"
      | "dispose"
      | "elements"
      | "equals"
      | "getHashCode"
      | "invert"
      | "isIdentity"
      | "isInvertible"
      | "matrixElements"
      | "multiply"
      | "offsetX"
      | "offsetY"
      | "reset"
      | "rotate"
      | "rotateAt"
      | "scale"
      | "shear"
      | "transformPoints"
      | "transformVectors"
      | "translate"
      | "vectorTransformPoints"
    >,
    System.IDisposableInput {
  readonly [matrixBrand]: true;
  clone(): System.Drawing.Drawing2D.Matrix;
  dispose(): VoidResult;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  invert(): VoidResult;
  matrixElements: System.Numerics.Matrix3x2;
  multiply(matrix: System.Drawing.Drawing2D.Matrix): VoidResult;
  multiply(
    matrix: System.Drawing.Drawing2D.Matrix,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  readonly elements: HostArray<number>;
  readonly isIdentity: boolean;
  readonly isInvertible: boolean;
  readonly offsetX: number;
  readonly offsetY: number;
  reset(): VoidResult;
  rotate(angle: number | StrongNumeric<SingleHost>): VoidResult;
  rotate(
    angle: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  rotateAt(angle: number | StrongNumeric<SingleHost>, point: System.Drawing.PointF): VoidResult;
  rotateAt(
    angle: number | StrongNumeric<SingleHost>,
    point: System.Drawing.PointF,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  scale(
    scaleX: number | StrongNumeric<SingleHost>,
    scaleY: number | StrongNumeric<SingleHost>
  ): VoidResult;
  scale(
    scaleX: number | StrongNumeric<SingleHost>,
    scaleY: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  shear(
    shearX: number | StrongNumeric<SingleHost>,
    shearY: number | StrongNumeric<SingleHost>
  ): VoidResult;
  shear(
    shearX: number | StrongNumeric<SingleHost>,
    shearY: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  transformPoints(...pts: System.Drawing.PointF[]): VoidResult;
  transformPoints(...pts: System.Drawing.Point[]): VoidResult;
  transformPoints(pts: HostArray<System.Drawing.Point>): VoidResult;
  transformPoints(pts: HostArray<System.Drawing.PointF>): VoidResult;
  transformVectors(...pts: System.Drawing.PointF[]): VoidResult;
  transformVectors(...pts: System.Drawing.Point[]): VoidResult;
  transformVectors(pts: HostArray<System.Drawing.Point>): VoidResult;
  transformVectors(pts: HostArray<System.Drawing.PointF>): VoidResult;
  translate(
    offsetX: number | StrongNumeric<SingleHost>,
    offsetY: number | StrongNumeric<SingleHost>
  ): VoidResult;
  translate(
    offsetX: number | StrongNumeric<SingleHost>,
    offsetY: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  vectorTransformPoints(...pts: System.Drawing.Point[]): VoidResult;
  vectorTransformPoints(pts: HostArray<System.Drawing.Point>): VoidResult;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type Matrix = import("./Matrix").Matrix;
  }
}

export interface MatrixHostType extends HostType<
  Matrix,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): Matrix;
  new (
    m11: number | StrongNumeric<SingleHost>,
    m12: number | StrongNumeric<SingleHost>,
    m21: number | StrongNumeric<SingleHost>,
    m22: number | StrongNumeric<SingleHost>,
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): Matrix;
  new (matrix: System.Numerics.Matrix3x2): Matrix;
  new (rect: System.Drawing.RectangleF, plgpts: HostArray<System.Drawing.PointF>): Matrix;
  new (rect: System.Drawing.RectangleF, ...plgpts: System.Drawing.PointF[]): Matrix;
  new (rect: System.Drawing.Rectangle, plgpts: HostArray<System.Drawing.Point>): Matrix;
  new (rect: System.Drawing.Rectangle, ...plgpts: System.Drawing.Point[]): Matrix;
}

export {};
