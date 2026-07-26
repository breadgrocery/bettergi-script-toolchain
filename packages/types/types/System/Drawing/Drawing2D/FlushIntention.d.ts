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

declare const flushIntentionBrand: unique symbol;
export interface FlushIntention extends ClrHostValue {
  readonly [flushIntentionBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type FlushIntention = import("./FlushIntention").FlushIntention;
  }
}

export interface FlushIntentionHostType extends HostType<FlushIntention, EnumTypeTrait> {
  readonly flush: FlushIntention;
  readonly sync: FlushIntention;
}

export {};
