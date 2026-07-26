import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../../System/IEquatable";
import "../../System/ValueType";
import "./SIZE";

declare const pOINTBrand: unique symbol;
export interface POINT extends ClrHostValue {
  readonly [pOINTBrand]: true;
  equals(obj: unknown | null): boolean;
  equals(other: Vanara.PInvoke.POINT): boolean;
  getHashCode(): number;
  offset(dx: number | StrongNumeric<Int32Host>, dy: number | StrongNumeric<Int32Host>): VoidResult;
  offset(p: Vanara.PInvoke.POINT): VoidResult;
  readonly isEmpty: boolean;
  toString(): string;
  x: number;
  y: number;
}

declare global {
  namespace Vanara.PInvoke {
    type POINT = import("./POINT").POINT;
  }
}

export interface POINTHostType extends HostType<POINT, ValueTypeTrait> {
  new (x: number | StrongNumeric<Int32Host>, y: number | StrongNumeric<Int32Host>): POINT;
  new (sz: Vanara.PInvoke.SIZE): POINT;
  new (dw: number | StrongNumeric<Int32Host>): POINT;
  readonly empty: Vanara.PInvoke.POINT;
  add(pt: Vanara.PInvoke.POINT, sz: Vanara.PInvoke.SIZE): Vanara.PInvoke.POINT;
  subtract(pt: Vanara.PInvoke.POINT, sz: Vanara.PInvoke.SIZE): Vanara.PInvoke.POINT;
}

export {};
