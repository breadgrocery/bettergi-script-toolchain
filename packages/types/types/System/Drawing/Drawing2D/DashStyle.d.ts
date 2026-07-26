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

declare const dashStyleBrand: unique symbol;
export interface DashStyle extends ClrHostValue {
  readonly [dashStyleBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type DashStyle = import("./DashStyle").DashStyle;
  }
}

export interface DashStyleHostType extends HostType<DashStyle, EnumTypeTrait> {
  readonly solid: DashStyle;
  readonly dash: DashStyle;
  readonly dot: DashStyle;
  readonly dashDot: DashStyle;
  readonly dashDotDot: DashStyle;
  readonly custom: DashStyle;
}

export {};
