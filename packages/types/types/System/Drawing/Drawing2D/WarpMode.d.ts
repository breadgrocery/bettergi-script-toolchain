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

declare const warpModeBrand: unique symbol;
export interface WarpMode extends ClrHostValue {
  readonly [warpModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type WarpMode = import("./WarpMode").WarpMode;
  }
}

export interface WarpModeHostType extends HostType<WarpMode, EnumTypeTrait> {
  readonly perspective: WarpMode;
  readonly bilinear: WarpMode;
}

export {};
