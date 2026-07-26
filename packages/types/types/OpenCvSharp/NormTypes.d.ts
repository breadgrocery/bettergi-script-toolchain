import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const normTypesBrand: unique symbol;
export interface NormTypes extends ClrHostValue {
  readonly [normTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type NormTypes = import("./NormTypes").NormTypes;
  }
}

export interface NormTypesHostType extends HostType<NormTypes, EnumTypeTrait> {
  readonly inf: NormTypes;
  readonly l1: NormTypes;
  readonly l2: NormTypes;
  readonly l2SQR: NormTypes;
  readonly hamming: NormTypes;
  readonly hamming2: NormTypes;
  readonly relative: NormTypes;
  readonly minMax: NormTypes;
}

export {};
