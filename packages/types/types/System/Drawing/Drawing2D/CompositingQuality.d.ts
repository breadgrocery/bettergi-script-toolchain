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

declare const compositingQualityBrand: unique symbol;
export interface CompositingQuality extends ClrHostValue {
  readonly [compositingQualityBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type CompositingQuality = import("./CompositingQuality").CompositingQuality;
  }
}

export interface CompositingQualityHostType extends HostType<CompositingQuality, EnumTypeTrait> {
  readonly invalid: CompositingQuality;
  readonly default: CompositingQuality;
  readonly highSpeed: CompositingQuality;
  readonly highQuality: CompositingQuality;
  readonly gammaCorrected: CompositingQuality;
  readonly assumeLinear: CompositingQuality;
}

export {};
