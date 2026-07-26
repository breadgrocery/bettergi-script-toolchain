import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const midpointRoundingBrand: unique symbol;
export interface MidpointRounding extends ClrHostValue {
  readonly [midpointRoundingBrand]: true;
}

declare global {
  namespace System {
    type MidpointRounding = import("./MidpointRounding").MidpointRounding;
  }
}

export interface MidpointRoundingHostType extends HostType<MidpointRounding, EnumTypeTrait> {
  readonly toEven: MidpointRounding;
  readonly awayFromZero: MidpointRounding;
  readonly toZero: MidpointRounding;
  readonly toNegativeInfinity: MidpointRounding;
  readonly toPositiveInfinity: MidpointRounding;
}

export {};
