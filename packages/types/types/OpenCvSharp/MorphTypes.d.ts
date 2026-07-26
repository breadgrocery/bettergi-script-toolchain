import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const morphTypesBrand: unique symbol;
export interface MorphTypes extends ClrHostValue {
  readonly [morphTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MorphTypes = import("./MorphTypes").MorphTypes;
  }
}

export interface MorphTypesHostType extends HostType<MorphTypes, EnumTypeTrait> {
  readonly erode: MorphTypes;
  readonly dilate: MorphTypes;
  readonly open: MorphTypes;
  readonly close: MorphTypes;
  readonly gradient: MorphTypes;
  readonly topHat: MorphTypes;
  readonly blackHat: MorphTypes;
  readonly hitMiss: MorphTypes;
}

export {};
