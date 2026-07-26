import type {
  ClrHostValue,
  HostType,
  SingleHost,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../Numerics/Vector2";
import "../ValueType";
import "./Size";
import "./SizeF";

declare const pointFBrand: unique symbol;
export interface PointF extends ClrHostValue {
  readonly [pointFBrand]: true;
  x: number;
  y: number;
  readonly isEmpty: boolean;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.PointF): boolean;
  toVector2(): System.Numerics.Vector2;
}

declare global {
  namespace System.Drawing {
    type PointF = import("./PointF").PointF;
  }
}

export interface PointFHostType extends HostType<PointF, ValueTypeTrait> {
  new (x: number | StrongNumeric<SingleHost>, y: number | StrongNumeric<SingleHost>): PointF;
  new (vector: System.Numerics.Vector2): PointF;
  readonly empty: System.Drawing.PointF;
  add(pt: System.Drawing.PointF, sz: System.Drawing.Size): System.Drawing.PointF;
  subtract(pt: System.Drawing.PointF, sz: System.Drawing.Size): System.Drawing.PointF;
  add(pt: System.Drawing.PointF, sz: System.Drawing.SizeF): System.Drawing.PointF;
  subtract(pt: System.Drawing.PointF, sz: System.Drawing.SizeF): System.Drawing.PointF;
}

export {};
