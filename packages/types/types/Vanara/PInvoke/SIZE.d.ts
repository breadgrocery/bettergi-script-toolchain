import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Drawing/Size";
import "../../System/IEquatable";
import "../../System/ValueType";

declare const sIZEBrand: unique symbol;
export interface SIZE extends ClrHostValue {
  readonly [sIZEBrand]: true;
  cx: number;
  cy: number;
  equals(obj: unknown | null): boolean;
  equals(other: Vanara.PInvoke.SIZE): boolean;
  getHashCode(): number;
  height: number;
  readonly isEmpty: boolean;
  toSize(): System.Drawing.Size;
  toString(): string;
  width: number;
}

declare global {
  namespace Vanara.PInvoke {
    type SIZE = import("./SIZE").SIZE;
  }
}

export interface SIZEHostType extends HostType<SIZE, ValueTypeTrait> {
  new (width: number | StrongNumeric<Int32Host>, height: number | StrongNumeric<Int32Host>): SIZE;
  readonly empty: Vanara.PInvoke.SIZE;
}

export {};
