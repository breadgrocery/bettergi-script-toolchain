import type {
  ClrHostValue,
  DoubleHost,
  HostArray,
  HostType,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import "./Point3d";
import "./Point3f";

declare const line3DBrand: unique symbol;
export interface Line3D extends ClrHostValue {
  readonly [line3DBrand]: true;
  readonly vx: number;
  readonly vy: number;
  readonly vz: number;
  readonly x1: number;
  readonly y1: number;
  readonly z1: number;
  perpendicularFoot(point: OpenCvSharp.Point3d): OpenCvSharp.Point3d;
  perpendicularFoot(point: OpenCvSharp.Point3f): OpenCvSharp.Point3d;
  perpendicularFoot(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    z: number | StrongNumeric<DoubleHost>
  ): OpenCvSharp.Point3d;
  distance(point: OpenCvSharp.Point3d): number;
  distance(point: OpenCvSharp.Point3f): number;
  distance(
    x: number | StrongNumeric<DoubleHost>,
    y: number | StrongNumeric<DoubleHost>,
    z: number | StrongNumeric<DoubleHost>
  ): number;
}

declare global {
  namespace OpenCvSharp {
    type Line3D = import("./Line3D").Line3D;
  }
}

export interface Line3DHostType extends HostType<Line3D, ReferenceTypeTrait> {
  new (
    vx: number | StrongNumeric<DoubleHost>,
    vy: number | StrongNumeric<DoubleHost>,
    vz: number | StrongNumeric<DoubleHost>,
    x1: number | StrongNumeric<DoubleHost>,
    y1: number | StrongNumeric<DoubleHost>,
    z1: number | StrongNumeric<DoubleHost>
  ): Line3D;
  new (line: HostArray<number | StrongNumeric<SingleHost>>): Line3D;
}

export {};
