import type {
  ClrHostValue,
  HostType,
  Int32Host,
  StrongNumeric,
  ValueTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Drawing/Rectangle";
import "../../System/IEquatable";
import "../../System/ValueType";
import "./POINT";
import "./PRECT";
import "./SIZE";

declare const rECTBrand: unique symbol;
export interface RECT
  extends
    ClrHostValue,
    System.IEquatableInput<Vanara.PInvoke.PRECT>,
    System.IEquatableInput<System.Drawing.Rectangle> {
  readonly [rECTBrand]: true;
  bottom: number;
  equals(obj: unknown | null): boolean;
  equals(r: System.Drawing.Rectangle): boolean;
  equals(r: Vanara.PInvoke.PRECT | null): boolean;
  equals(r: Vanara.PInvoke.RECT): boolean;
  getHashCode(): number;
  height: number;
  left: number;
  location: Vanara.PInvoke.POINT;
  readonly isEmpty: boolean;
  right: number;
  size: Vanara.PInvoke.SIZE;
  toString(): string;
  top: number;
  width: number;
  x: number;
  y: number;
}

declare global {
  namespace Vanara.PInvoke {
    type RECT = import("./RECT").RECT;
  }
}

export interface RECTHostType extends HostType<RECT, ValueTypeTrait> {
  new (
    left: number | StrongNumeric<Int32Host>,
    top: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>
  ): RECT;
  new (r: System.Drawing.Rectangle): RECT;
  readonly empty: Vanara.PInvoke.RECT;
}

export {};
