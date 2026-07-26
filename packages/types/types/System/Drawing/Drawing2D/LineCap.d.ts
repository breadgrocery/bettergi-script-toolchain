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

declare const lineCapBrand: unique symbol;
export interface LineCap extends ClrHostValue {
  readonly [lineCapBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type LineCap = import("./LineCap").LineCap;
  }
}

export interface LineCapHostType extends HostType<LineCap, EnumTypeTrait> {
  readonly flat: LineCap;
  readonly square: LineCap;
  readonly round: LineCap;
  readonly triangle: LineCap;
  readonly noAnchor: LineCap;
  readonly squareAnchor: LineCap;
  readonly roundAnchor: LineCap;
  readonly diamondAnchor: LineCap;
  readonly arrowAnchor: LineCap;
  readonly custom: LineCap;
  readonly anchorMask: LineCap;
}

export {};
