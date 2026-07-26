import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const penTypeBrand: unique symbol;
export interface PenType extends ClrHostValue {
  readonly [penTypeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type PenType = import("./PenType").PenType;
  }
}

export interface PenTypeHostType extends HostType<PenType, EnumTypeTrait> {
  readonly solidColor: PenType;
  readonly hatchFill: PenType;
  readonly textureFill: PenType;
  readonly pathGradient: PenType;
  readonly linearGradient: PenType;
}

export {};
