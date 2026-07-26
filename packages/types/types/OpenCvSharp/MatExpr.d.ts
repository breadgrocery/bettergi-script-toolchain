import type {
  DoubleHost,
  EnumInput,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "../System/IDisposable";
import "./DecompTypes";
import "./DisposableCvObject";
import "./ICvPtrHolder";
import "./Mat";
import "./MatDiagType";
import "./MatType";
import "./Range";
import "./Rect";
import "./Scalar";
import "./Size";

declare const matExprBrand: unique symbol;
export interface MatExpr
  extends
    Omit<
      OpenCvSharp.DisposableCvObject,
      | "abs"
      | "add"
      | "col"
      | "cross"
      | "diag"
      | "divide"
      | "dot"
      | "inv"
      | "item"
      | "mul"
      | "multiply"
      | "negate"
      | "onesComplement"
      | "plus"
      | "row"
      | "size"
      | "subMat"
      | "subtract"
      | "t"
      | "toMat"
      | "type"
    >,
    System.IDisposableInput,
    OpenCvSharp.ICvPtrHolderInput {
  readonly [matExprBrand]: true;
  abs(): OpenCvSharp.MatExpr;
  toMat(): OpenCvSharp.Mat;
  plus(): OpenCvSharp.MatExpr;
  negate(): OpenCvSharp.MatExpr;
  onesComplement(): OpenCvSharp.MatExpr;
  add(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  add(me: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  add(s: OpenCvSharp.Scalar): OpenCvSharp.MatExpr;
  subtract(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  subtract(me: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  subtract(s: OpenCvSharp.Scalar): OpenCvSharp.MatExpr;
  multiply(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  multiply(me: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  multiply(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  divide(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  divide(me: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  divide(s: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  item: {
    (
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.MatExpr;
    get(
      rowStart: number | StrongNumeric<Int32Host>,
      rowEnd: number | StrongNumeric<Int32Host>,
      colStart: number | StrongNumeric<Int32Host>,
      colEnd: number | StrongNumeric<Int32Host>
    ): OpenCvSharp.MatExpr;
    (rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.MatExpr;
    get(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.MatExpr;
    (roi: OpenCvSharp.Rect): OpenCvSharp.MatExpr;
    get(roi: OpenCvSharp.Rect): OpenCvSharp.MatExpr;
  };
  row(y: number | StrongNumeric<Int32Host>): OpenCvSharp.MatExpr;
  col(x: number | StrongNumeric<Int32Host>): OpenCvSharp.MatExpr;
  diag(): OpenCvSharp.MatExpr;
  diag(d: EnumInput<OpenCvSharp.MatDiagType>): OpenCvSharp.MatExpr;
  subMat(roi: OpenCvSharp.Rect): OpenCvSharp.MatExpr;
  subMat(rowRange: OpenCvSharp.Range, colRange: OpenCvSharp.Range): OpenCvSharp.MatExpr;
  subMat(
    rowStart: number | StrongNumeric<Int32Host>,
    rowEnd: number | StrongNumeric<Int32Host>,
    colStart: number | StrongNumeric<Int32Host>,
    colEnd: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.MatExpr;
  t(): OpenCvSharp.MatExpr;
  inv(): OpenCvSharp.MatExpr;
  inv(method: EnumInput<OpenCvSharp.DecompTypes>): OpenCvSharp.MatExpr;
  mul(e: OpenCvSharp.MatExpr): OpenCvSharp.MatExpr;
  mul(e: OpenCvSharp.MatExpr, scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  mul(m: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
  mul(m: OpenCvSharp.Mat, scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.MatExpr;
  cross(m: OpenCvSharp.Mat): OpenCvSharp.Mat;
  dot(m: OpenCvSharp.Mat): number;
  size(): OpenCvSharp.Size;
  type(): OpenCvSharp.MatType;
}

declare global {
  namespace OpenCvSharp {
    type MatExpr = import("./MatExpr").MatExpr;
  }
}

export interface MatExprHostType extends HostType<MatExpr, ReferenceTypeTrait> {
  fromMat(mat: OpenCvSharp.Mat): OpenCvSharp.MatExpr;
}

export {};
