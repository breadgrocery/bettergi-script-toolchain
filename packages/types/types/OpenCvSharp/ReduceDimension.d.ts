import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const reduceDimensionBrand: unique symbol;
export interface ReduceDimension extends ClrHostValue {
  readonly [reduceDimensionBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ReduceDimension = import("./ReduceDimension").ReduceDimension;
  }
}

export interface ReduceDimensionHostType extends HostType<ReduceDimension, EnumTypeTrait> {
  readonly row: ReduceDimension;
  readonly column: ReduceDimension;
  readonly auto: ReduceDimension;
}

export {};
