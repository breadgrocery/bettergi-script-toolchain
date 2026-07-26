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

declare const compositingModeBrand: unique symbol;
export interface CompositingMode extends ClrHostValue {
  readonly [compositingModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type CompositingMode = import("./CompositingMode").CompositingMode;
  }
}

export interface CompositingModeHostType extends HostType<CompositingMode, EnumTypeTrait> {
  readonly sourceOver: CompositingMode;
  readonly sourceCopy: CompositingMode;
}

export {};
