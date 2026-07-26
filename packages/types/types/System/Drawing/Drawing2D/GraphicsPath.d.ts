import type {
  ByteHost,
  EnumInput,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../ICloneable";
import "../../IDisposable";
import "../../MarshalByRefObject";
import "../FontFamily";
import "../Graphics";
import "../Pen";
import "../Point";
import "../PointF";
import "../Rectangle";
import "../RectangleF";
import "../StringFormat";
import "./FillMode";
import "./Matrix";
import "./PathData";
import "./WarpMode";

declare const graphicsPathBrand: unique symbol;
export interface GraphicsPath
  extends
    Omit<
      System.MarshalByRefObject,
      | "addArc"
      | "addBezier"
      | "addBeziers"
      | "addClosedCurve"
      | "addCurve"
      | "addEllipse"
      | "addLine"
      | "addLines"
      | "addPath"
      | "addPie"
      | "addPolygon"
      | "addRectangle"
      | "addRectangles"
      | "addString"
      | "clearMarkers"
      | "clone"
      | "closeAllFigures"
      | "closeFigure"
      | "dispose"
      | "fillMode"
      | "flatten"
      | "getBounds"
      | "getLastPoint"
      | "isOutlineVisible"
      | "isVisible"
      | "pathData"
      | "pathPoints"
      | "pathTypes"
      | "pointCount"
      | "reset"
      | "reverse"
      | "setMarkers"
      | "startFigure"
      | "transform"
      | "warp"
      | "widen"
    >,
    System.ICloneableInput,
    System.IDisposableInput {
  readonly [graphicsPathBrand]: true;
  addArc(
    rect: System.Drawing.Rectangle,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addArc(
    rect: System.Drawing.RectangleF,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addArc(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addArc(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addBezier(
    pt1: System.Drawing.Point,
    pt2: System.Drawing.Point,
    pt3: System.Drawing.Point,
    pt4: System.Drawing.Point
  ): VoidResult;
  addBezier(
    pt1: System.Drawing.PointF,
    pt2: System.Drawing.PointF,
    pt3: System.Drawing.PointF,
    pt4: System.Drawing.PointF
  ): VoidResult;
  addBezier(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>,
    x3: number | StrongNumeric<Int32Host>,
    y3: number | StrongNumeric<Int32Host>,
    x4: number | StrongNumeric<Int32Host>,
    y4: number | StrongNumeric<Int32Host>
  ): VoidResult;
  addBezier(
    x1: number | StrongNumeric<SingleHost>,
    y1: number | StrongNumeric<SingleHost>,
    x2: number | StrongNumeric<SingleHost>,
    y2: number | StrongNumeric<SingleHost>,
    x3: number | StrongNumeric<SingleHost>,
    y3: number | StrongNumeric<SingleHost>,
    x4: number | StrongNumeric<SingleHost>,
    y4: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addBeziers(...points: System.Drawing.PointF[]): VoidResult;
  addBeziers(...points: System.Drawing.Point[]): VoidResult;
  addBeziers(points: HostArray<System.Drawing.Point>): VoidResult;
  addBeziers(points: HostArray<System.Drawing.PointF>): VoidResult;
  addClosedCurve(...points: System.Drawing.PointF[]): VoidResult;
  addClosedCurve(...points: System.Drawing.Point[]): VoidResult;
  addClosedCurve(points: HostArray<System.Drawing.Point>): VoidResult;
  addClosedCurve(
    points: HostArray<System.Drawing.Point>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addClosedCurve(points: HostArray<System.Drawing.PointF>): VoidResult;
  addClosedCurve(
    points: HostArray<System.Drawing.PointF>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addCurve(...points: System.Drawing.PointF[]): VoidResult;
  addCurve(...points: System.Drawing.Point[]): VoidResult;
  addCurve(points: HostArray<System.Drawing.Point>): VoidResult;
  addCurve(
    points: HostArray<System.Drawing.Point>,
    offset: number | StrongNumeric<Int32Host>,
    numberOfSegments: number | StrongNumeric<Int32Host>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addCurve(
    points: HostArray<System.Drawing.Point>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addCurve(points: HostArray<System.Drawing.PointF>): VoidResult;
  addCurve(
    points: HostArray<System.Drawing.PointF>,
    offset: number | StrongNumeric<Int32Host>,
    numberOfSegments: number | StrongNumeric<Int32Host>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addCurve(
    points: HostArray<System.Drawing.PointF>,
    tension: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addEllipse(rect: System.Drawing.Rectangle): VoidResult;
  addEllipse(rect: System.Drawing.RectangleF): VoidResult;
  addEllipse(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>
  ): VoidResult;
  addEllipse(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addLine(pt1: System.Drawing.Point, pt2: System.Drawing.Point): VoidResult;
  addLine(pt1: System.Drawing.PointF, pt2: System.Drawing.PointF): VoidResult;
  addLine(
    x1: number | StrongNumeric<Int32Host>,
    y1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>
  ): VoidResult;
  addLine(
    x1: number | StrongNumeric<SingleHost>,
    y1: number | StrongNumeric<SingleHost>,
    x2: number | StrongNumeric<SingleHost>,
    y2: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addLines(...points: System.Drawing.PointF[]): VoidResult;
  addLines(...points: System.Drawing.Point[]): VoidResult;
  addLines(points: HostArray<System.Drawing.Point>): VoidResult;
  addLines(points: HostArray<System.Drawing.PointF>): VoidResult;
  addPath(addingPath: System.Drawing.Drawing2D.GraphicsPath, connect: boolean): VoidResult;
  addPie(
    rect: System.Drawing.Rectangle,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addPie(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addPie(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>,
    startAngle: number | StrongNumeric<SingleHost>,
    sweepAngle: number | StrongNumeric<SingleHost>
  ): VoidResult;
  addPolygon(...points: System.Drawing.PointF[]): VoidResult;
  addPolygon(...points: System.Drawing.Point[]): VoidResult;
  addPolygon(points: HostArray<System.Drawing.Point>): VoidResult;
  addPolygon(points: HostArray<System.Drawing.PointF>): VoidResult;
  addRectangle(rect: System.Drawing.Rectangle): VoidResult;
  addRectangle(rect: System.Drawing.RectangleF): VoidResult;
  addRectangles(...rects: System.Drawing.RectangleF[]): VoidResult;
  addRectangles(...rects: System.Drawing.Rectangle[]): VoidResult;
  addRectangles(rects: HostArray<System.Drawing.Rectangle>): VoidResult;
  addRectangles(rects: HostArray<System.Drawing.RectangleF>): VoidResult;
  addString(
    s: string,
    family: System.Drawing.FontFamily,
    style: number | StrongNumeric<Int32Host>,
    emSize: number | StrongNumeric<SingleHost>,
    layoutRect: System.Drawing.Rectangle,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  addString(
    s: string,
    family: System.Drawing.FontFamily,
    style: number | StrongNumeric<Int32Host>,
    emSize: number | StrongNumeric<SingleHost>,
    layoutRect: System.Drawing.RectangleF,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  addString(
    s: string,
    family: System.Drawing.FontFamily,
    style: number | StrongNumeric<Int32Host>,
    emSize: number | StrongNumeric<SingleHost>,
    origin: System.Drawing.Point,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  addString(
    s: string,
    family: System.Drawing.FontFamily,
    style: number | StrongNumeric<Int32Host>,
    emSize: number | StrongNumeric<SingleHost>,
    origin: System.Drawing.PointF,
    format: System.Drawing.StringFormat | null
  ): VoidResult;
  clearMarkers(): VoidResult;
  clone(): unknown;
  closeAllFigures(): VoidResult;
  closeFigure(): VoidResult;
  dispose(): VoidResult;
  fillMode: System.Drawing.Drawing2D.FillMode;
  flatten(): VoidResult;
  flatten(matrix: System.Drawing.Drawing2D.Matrix | null): VoidResult;
  flatten(
    matrix: System.Drawing.Drawing2D.Matrix | null,
    flatness: number | StrongNumeric<SingleHost>
  ): VoidResult;
  getBounds(): System.Drawing.RectangleF;
  getBounds(matrix: System.Drawing.Drawing2D.Matrix | null): System.Drawing.RectangleF;
  getBounds(
    matrix: System.Drawing.Drawing2D.Matrix | null,
    pen: System.Drawing.Pen | null
  ): System.Drawing.RectangleF;
  getLastPoint(): System.Drawing.PointF;
  isOutlineVisible(point: System.Drawing.Point, pen: System.Drawing.Pen): boolean;
  isOutlineVisible(point: System.Drawing.PointF, pen: System.Drawing.Pen): boolean;
  isOutlineVisible(
    pt: System.Drawing.Point,
    pen: System.Drawing.Pen,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  isOutlineVisible(
    pt: System.Drawing.PointF,
    pen: System.Drawing.Pen,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  isOutlineVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen
  ): boolean;
  isOutlineVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    pen: System.Drawing.Pen,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  isOutlineVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    pen: System.Drawing.Pen
  ): boolean;
  isOutlineVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    pen: System.Drawing.Pen,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  isVisible(point: System.Drawing.Point): boolean;
  isVisible(point: System.Drawing.PointF): boolean;
  isVisible(pt: System.Drawing.Point, graphics: System.Drawing.Graphics | null): boolean;
  isVisible(pt: System.Drawing.PointF, graphics: System.Drawing.Graphics | null): boolean;
  isVisible(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): boolean;
  isVisible(
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  isVisible(x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): boolean;
  isVisible(
    x: number | StrongNumeric<SingleHost>,
    y: number | StrongNumeric<SingleHost>,
    graphics: System.Drawing.Graphics | null
  ): boolean;
  readonly pathData: System.Drawing.Drawing2D.PathData;
  readonly pathPoints: HostArray<System.Drawing.PointF>;
  readonly pathTypes: HostArray<number>;
  readonly pointCount: number;
  reset(): VoidResult;
  reverse(): VoidResult;
  setMarkers(): VoidResult;
  startFigure(): VoidResult;
  transform(matrix: System.Drawing.Drawing2D.Matrix): VoidResult;
  warp(
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF
  ): VoidResult;
  warp(
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    matrix: System.Drawing.Drawing2D.Matrix | null
  ): VoidResult;
  warp(
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    matrix: System.Drawing.Drawing2D.Matrix | null,
    warpMode: EnumInput<System.Drawing.Drawing2D.WarpMode>
  ): VoidResult;
  warp(
    destPoints: HostArray<System.Drawing.PointF>,
    srcRect: System.Drawing.RectangleF,
    matrix: System.Drawing.Drawing2D.Matrix | null,
    warpMode: EnumInput<System.Drawing.Drawing2D.WarpMode>,
    flatness: number | StrongNumeric<SingleHost>
  ): VoidResult;
  widen(pen: System.Drawing.Pen): VoidResult;
  widen(pen: System.Drawing.Pen, matrix: System.Drawing.Drawing2D.Matrix | null): VoidResult;
  widen(
    pen: System.Drawing.Pen,
    matrix: System.Drawing.Drawing2D.Matrix | null,
    flatness: number | StrongNumeric<SingleHost>
  ): VoidResult;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type GraphicsPath = import("./GraphicsPath").GraphicsPath;
  }
}

export interface GraphicsPathHostType extends HostType<
  GraphicsPath,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): GraphicsPath;
  new (fillMode: EnumInput<System.Drawing.Drawing2D.FillMode>): GraphicsPath;
  new (
    pts: HostArray<System.Drawing.PointF>,
    types: HostArray<number | StrongNumeric<ByteHost>>
  ): GraphicsPath;
  new (
    pts: HostArray<System.Drawing.PointF>,
    types: HostArray<number | StrongNumeric<ByteHost>>,
    fillMode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): GraphicsPath;
  new (
    pts: HostArray<System.Drawing.Point>,
    types: HostArray<number | StrongNumeric<ByteHost>>
  ): GraphicsPath;
  new (
    pts: HostArray<System.Drawing.Point>,
    types: HostArray<number | StrongNumeric<ByteHost>>,
    fillMode: EnumInput<System.Drawing.Drawing2D.FillMode>
  ): GraphicsPath;
}

export {};
