import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../IEquatable";
import "../ValueType";
import "./Point";
import "./SizeF";

declare const sizeBrand: unique symbol;
export interface Size extends ClrHostValue {
  readonly [sizeBrand]: true;
  width: number;
  height: number;
  readonly isEmpty: boolean;
  getHashCode(): number;
  toString(): string;
  equals(obj: unknown | null): boolean;
  equals(other: System.Drawing.Size): boolean;
}

declare global {
  namespace System.Drawing {
    type Size = import("./Size").Size;
  }
}

export interface SizeHostType extends HostType<Size, ValueTypeTrait> {
  new (pt: System.Drawing.Point): Size;
  new (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): Size;
  readonly empty: System.Drawing.Size;
  add(sz1: System.Drawing.Size, sz2: System.Drawing.Size): System.Drawing.Size;
  ceiling(value: System.Drawing.SizeF): System.Drawing.Size;
  subtract(sz1: System.Drawing.Size, sz2: System.Drawing.Size): System.Drawing.Size;
  truncate(value: System.Drawing.SizeF): System.Drawing.Size;
  round(value: System.Drawing.SizeF): System.Drawing.Size;
}

export {};
