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

declare const penAlignmentBrand: unique symbol;
export interface PenAlignment extends ClrHostValue {
  readonly [penAlignmentBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type PenAlignment = import("./PenAlignment").PenAlignment;
  }
}

export interface PenAlignmentHostType extends HostType<PenAlignment, EnumTypeTrait> {
  readonly center: PenAlignment;
  readonly inset: PenAlignment;
  readonly outset: PenAlignment;
  readonly left: PenAlignment;
  readonly right: PenAlignment;
}

export {};
