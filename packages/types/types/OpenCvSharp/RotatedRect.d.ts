import type {
  ClrHostValue,
  HostArray,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point2f";
import "./Rect";
import "./Size2f";

declare const rotatedRectBrand: unique symbol;
export interface RotatedRect extends ClrHostValue {
  readonly [rotatedRectBrand]: true;
  center: OpenCvSharp.Point2f;
  size: OpenCvSharp.Size2f;
  angle: number;
  points(): HostArray<OpenCvSharp.Point2f>;
  boundingRect(): OpenCvSharp.Rect;
  equals(obj: unknown): boolean;
  equals(other: OpenCvSharp.RotatedRect): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type RotatedRect = import("./RotatedRect").RotatedRect;
  }
}

export interface RotatedRectHostType extends HostType<RotatedRect, ValueTypeTrait> {
  new (
    center: OpenCvSharp.Point2f,
    size: OpenCvSharp.Size2f,
    angle: number | StrongNumeric<SingleHost>
  ): RotatedRect;
  new (
    point1: OpenCvSharp.Point2f,
    point2: OpenCvSharp.Point2f,
    point3: OpenCvSharp.Point2f
  ): RotatedRect;
  fromThreeVertexPoints(
    point1: OpenCvSharp.Point2f,
    point2: OpenCvSharp.Point2f,
    point3: OpenCvSharp.Point2f
  ): OpenCvSharp.RotatedRect;
}

export {};
