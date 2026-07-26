import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../Microsoft/ClearScript/HostType";
import "../System/IEquatable";
import "../System/ValueType";
import "./Point2f";

declare const circleSegmentBrand: unique symbol;
export interface CircleSegment extends ClrHostValue {
  readonly [circleSegmentBrand]: true;
  center: OpenCvSharp.Point2f;
  radius: number;
  equals(obj: unknown | null): boolean;
  equals(other: OpenCvSharp.CircleSegment): boolean;
  getHashCode(): number;
  toString(): string;
}

declare global {
  namespace OpenCvSharp {
    type CircleSegment = import("./CircleSegment").CircleSegment;
  }
}

export interface CircleSegmentHostType extends HostType<CircleSegment, ValueTypeTrait> {
  new (center: OpenCvSharp.Point2f, radius: number | StrongNumeric<SingleHost>): CircleSegment;
}

export {};
