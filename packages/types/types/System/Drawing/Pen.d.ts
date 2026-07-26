import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../ICloneable";
import "../IDisposable";
import "../MarshalByRefObject";
import "./Brush";
import "./Color";
import "./Drawing2D/CustomLineCap";
import "./Drawing2D/DashCap";
import "./Drawing2D/DashStyle";
import "./Drawing2D/LineCap";
import "./Drawing2D/LineJoin";
import "./Drawing2D/Matrix";
import "./Drawing2D/MatrixOrder";
import "./Drawing2D/PenAlignment";
import "./Drawing2D/PenType";

declare const penBrand: unique symbol;
export interface Pen
  extends
    Omit<
      System.MarshalByRefObject,
      | "alignment"
      | "brush"
      | "clone"
      | "color"
      | "compoundArray"
      | "customEndCap"
      | "customStartCap"
      | "dashCap"
      | "dashOffset"
      | "dashPattern"
      | "dashStyle"
      | "dispose"
      | "endCap"
      | "lineJoin"
      | "miterLimit"
      | "multiplyTransform"
      | "penType"
      | "resetTransform"
      | "rotateTransform"
      | "scaleTransform"
      | "setLineCap"
      | "startCap"
      | "transform"
      | "translateTransform"
      | "width"
    >,
    System.ICloneableInput,
    System.IDisposableInput {
  readonly [penBrand]: true;
  alignment: System.Drawing.Drawing2D.PenAlignment;
  brush: System.Drawing.Brush;
  clone(): unknown;
  color: System.Drawing.Color;
  compoundArray: HostArray<number>;
  customEndCap: System.Drawing.Drawing2D.CustomLineCap;
  customStartCap: System.Drawing.Drawing2D.CustomLineCap;
  dashCap: System.Drawing.Drawing2D.DashCap;
  dashOffset: number;
  dashPattern: HostArray<number>;
  dashStyle: System.Drawing.Drawing2D.DashStyle;
  dispose(): VoidResult;
  endCap: System.Drawing.Drawing2D.LineCap;
  lineJoin: System.Drawing.Drawing2D.LineJoin;
  miterLimit: number;
  multiplyTransform(matrix: System.Drawing.Drawing2D.Matrix): VoidResult;
  multiplyTransform(
    matrix: System.Drawing.Drawing2D.Matrix,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  readonly penType: System.Drawing.Drawing2D.PenType;
  resetTransform(): VoidResult;
  rotateTransform(angle: number | StrongNumeric<SingleHost>): VoidResult;
  rotateTransform(
    angle: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  scaleTransform(
    sx: number | StrongNumeric<SingleHost>,
    sy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  scaleTransform(
    sx: number | StrongNumeric<SingleHost>,
    sy: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  setLineCap(
    startCap: EnumInput<System.Drawing.Drawing2D.LineCap>,
    endCap: EnumInput<System.Drawing.Drawing2D.LineCap>,
    dashCap: EnumInput<System.Drawing.Drawing2D.DashCap>
  ): VoidResult;
  startCap: System.Drawing.Drawing2D.LineCap;
  transform: System.Drawing.Drawing2D.Matrix;
  translateTransform(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>
  ): VoidResult;
  translateTransform(
    dx: number | StrongNumeric<SingleHost>,
    dy: number | StrongNumeric<SingleHost>,
    order: EnumInput<System.Drawing.Drawing2D.MatrixOrder>
  ): VoidResult;
  width: number;
}

declare global {
  namespace System.Drawing {
    type Pen = import("./Pen").Pen;
  }
}

export interface PenHostType extends HostType<Pen, ReferenceTypeTrait> {
  new (color: System.Drawing.Color): Pen;
  new (color: System.Drawing.Color, width: number | StrongNumeric<SingleHost>): Pen;
  new (brush: System.Drawing.Brush): Pen;
  new (brush: System.Drawing.Brush, width: number | StrongNumeric<SingleHost>): Pen;
}

export {};
