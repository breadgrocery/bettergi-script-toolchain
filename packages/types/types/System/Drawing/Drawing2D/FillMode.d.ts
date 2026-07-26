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

declare const fillModeBrand: unique symbol;
export interface FillMode extends ClrHostValue {
  readonly [fillModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type FillMode = import("./FillMode").FillMode;
  }
}

export interface FillModeHostType extends HostType<FillMode, EnumTypeTrait> {
  readonly alternate: FillMode;
  readonly winding: FillMode;
}

export {};
