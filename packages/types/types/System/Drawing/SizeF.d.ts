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
import "./PointF";
import "./Size";

declare const sizeFBrand: unique symbol;
export interface SizeF extends ClrHostValue {
  readonly [sizeFBrand]: true;
  width: number;
  height: number;
  readonly isEmpty: boolean;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.SizeF): boolean;
  toPointF(): System.Drawing.PointF;
  toSize(): System.Drawing.Size;
  toVector2(): System.Numerics.Vector2;
}

declare global {
  namespace System.Drawing {
    type SizeF = import("./SizeF").SizeF;
  }
}

export interface SizeFHostType extends HostType<SizeF, ValueTypeTrait> {
  new (size: System.Drawing.SizeF): SizeF;
  new (pt: System.Drawing.PointF): SizeF;
  new (vector: System.Numerics.Vector2): SizeF;
  new (
    width: number | StrongNumeric<SingleHost>,
    height: number | StrongNumeric<SingleHost>
  ): SizeF;
  readonly empty: System.Drawing.SizeF;
  add(sz1: System.Drawing.SizeF, sz2: System.Drawing.SizeF): System.Drawing.SizeF;
  subtract(sz1: System.Drawing.SizeF, sz2: System.Drawing.SizeF): System.Drawing.SizeF;
}

export {};
