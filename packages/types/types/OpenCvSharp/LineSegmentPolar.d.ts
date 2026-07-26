import type {
  ClrHostValue,
  DoubleHost,
  HostType,
  Int32Host,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "../System/Nullable";
import "../System/ValueType";
import "./LineSegmentPoint";
import "./Point";

declare const lineSegmentPolarBrand: unique symbol;
export interface LineSegmentPolar extends ClrHostValue {
  readonly [lineSegmentPolarBrand]: true;
  rho: number;
  theta: number;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.LineSegmentPolar): boolean;
  getHashCode(): number;
  toString(): string;
  lineIntersection(line: OpenCvSharp.LineSegmentPolar): OpenCvSharp.Point | null;
  toSegmentPoint(scale: number | StrongNumeric<DoubleHost>): OpenCvSharp.LineSegmentPoint;
  toSegmentPointX(
    x1: number | StrongNumeric<Int32Host>,
    x2: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.LineSegmentPoint;
  toSegmentPointY(
    y1: number | StrongNumeric<Int32Host>,
    y2: number | StrongNumeric<Int32Host>
  ): OpenCvSharp.LineSegmentPoint;
  xPosOfLine(y: number | StrongNumeric<Int32Host>): number | null;
  yPosOfLine(x: number | StrongNumeric<Int32Host>): number | null;
}

declare global {
  namespace OpenCvSharp {
    type LineSegmentPolar = import("./LineSegmentPolar").LineSegmentPolar;
  }
}

export interface LineSegmentPolarHostType extends HostType<LineSegmentPolar, ValueTypeTrait> {
  new (
    rho: number | StrongNumeric<SingleHost>,
    theta: number | StrongNumeric<SingleHost>
  ): LineSegmentPolar;
  lineIntersection(
    line1: OpenCvSharp.LineSegmentPolar,
    line2: OpenCvSharp.LineSegmentPolar
  ): OpenCvSharp.Point | null;
}

export {};
