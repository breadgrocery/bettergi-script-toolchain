import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/IEquatable";
import "../System/Nullable";
import "../System/ValueType";
import "./Point";

declare const lineSegmentPointBrand: unique symbol;
export interface LineSegmentPoint extends ClrHostValue {
  readonly [lineSegmentPointBrand]: true;
  p1: OpenCvSharp.Point;
  p2: OpenCvSharp.Point;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.LineSegmentPoint): boolean;
  getHashCode(): number;
  toString(): string;
  lineIntersection(line: OpenCvSharp.LineSegmentPoint): OpenCvSharp.Point | null;
  segmentIntersection(seg: OpenCvSharp.LineSegmentPoint): OpenCvSharp.Point | null;
  intersectedSegments(seg: OpenCvSharp.LineSegmentPoint): boolean;
  length(): number;
  offset(p: OpenCvSharp.Point): VoidResult;
  offset(x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type LineSegmentPoint = import("./LineSegmentPoint").LineSegmentPoint;
  }
}

export interface LineSegmentPointHostType extends HostType<LineSegmentPoint, ValueTypeTrait> {
  new (p1: OpenCvSharp.Point, p2: OpenCvSharp.Point): LineSegmentPoint;
  lineIntersection(
    line1: OpenCvSharp.LineSegmentPoint,
    line2: OpenCvSharp.LineSegmentPoint
  ): OpenCvSharp.Point | null;
  segmentIntersection(
    seg1: OpenCvSharp.LineSegmentPoint,
    seg2: OpenCvSharp.LineSegmentPoint
  ): OpenCvSharp.Point | null;
  intersectedSegments(
    seg1: OpenCvSharp.LineSegmentPoint,
    seg2: OpenCvSharp.LineSegmentPoint
  ): boolean;
  intersectedLineAndSegment(
    line: OpenCvSharp.LineSegmentPoint,
    seg: OpenCvSharp.LineSegmentPoint
  ): boolean;
  lineAndSegmentIntersection(
    line: OpenCvSharp.LineSegmentPoint,
    seg: OpenCvSharp.LineSegmentPoint
  ): OpenCvSharp.Point | null;
}

export {};
