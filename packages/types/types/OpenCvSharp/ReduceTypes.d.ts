import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const reduceTypesBrand: unique symbol;
export interface ReduceTypes extends ClrHostValue {
  readonly [reduceTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type ReduceTypes = import("./ReduceTypes").ReduceTypes;
  }
}

export interface ReduceTypesHostType extends HostType<ReduceTypes, EnumTypeTrait> {
  readonly sum: ReduceTypes;
  readonly avg: ReduceTypes;
  readonly max: ReduceTypes;
  readonly min: ReduceTypes;
}

export {};
