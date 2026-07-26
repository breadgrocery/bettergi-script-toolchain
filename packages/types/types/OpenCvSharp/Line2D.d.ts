import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { HostVariableOut } from "../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./Point";
import "./Point2d";
import "./Point2f";

declare const line2DBrand: unique symbol;
export interface Line2D extends ClrHostValue {
  readonly [line2DBrand]: true;
  readonly vx: number;
  readonly vy: number;
  readonly x1: number;
  readonly y1: number;
  getVectorRadian(): number;
  getVectorAngle(): number;
  distance(point: OpenCvSharp.Point): number;
  distance(point: OpenCvSharp.Point2d): number;
  distance(point: OpenCvSharp.Point2f): number;
  distance(x: number | StrongNumeric<DoubleHost>, y: number | StrongNumeric<DoubleHost>): number;
  fitSize(
    width: number | StrongNumeric<Int32Host>,
    height: number | StrongNumeric<Int32Host>,
    pt1: HostVariableOut<OpenCvSharp.Point>,
    pt2: HostVariableOut<OpenCvSharp.Point>
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type Line2D = import("./Line2D").Line2D;
  }
}

export interface Line2DHostType extends HostType<Line2D, ReferenceTypeTrait> {
  new (
    vx: number | StrongNumeric<DoubleHost>,
    vy: number | StrongNumeric<DoubleHost>,
    x1: number | StrongNumeric<DoubleHost>,
    y1: number | StrongNumeric<DoubleHost>
  ): Line2D;
  new (line: HostArray<number | StrongNumeric<SingleHost>>): Line2D;
}

export {};
