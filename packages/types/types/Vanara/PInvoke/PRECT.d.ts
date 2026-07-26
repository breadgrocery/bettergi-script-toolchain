import type {
  ClrHostValue,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../../System/Drawing/Rectangle";
import "../../System/IEquatable";
import "./POINT";
import "./RECT";
import "./SIZE";

declare const pRECTBrand: unique symbol;
export interface PRECT
  extends
    ClrHostValue,
    System.IEquatableInput<Vanara.PInvoke.RECT>,
    System.IEquatableInput<System.Drawing.Rectangle> {
  readonly [pRECTBrand]: true;
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
    type PRECT = import("./PRECT").PRECT;
  }
}

export interface PRECTHostType extends HostType<
  PRECT,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): PRECT;
  new (
    left: number | StrongNumeric<Int32Host>,
    top: number | StrongNumeric<Int32Host>,
    right: number | StrongNumeric<Int32Host>,
    bottom: number | StrongNumeric<Int32Host>
  ): PRECT;
  new (r: System.Drawing.Rectangle): PRECT;
}

export {};
