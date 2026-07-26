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

declare const pixelOffsetModeBrand: unique symbol;
export interface PixelOffsetMode extends ClrHostValue {
  readonly [pixelOffsetModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type PixelOffsetMode = import("./PixelOffsetMode").PixelOffsetMode;
  }
}

export interface PixelOffsetModeHostType extends HostType<PixelOffsetMode, EnumTypeTrait> {
  readonly invalid: PixelOffsetMode;
  readonly default: PixelOffsetMode;
  readonly highSpeed: PixelOffsetMode;
  readonly highQuality: PixelOffsetMode;
  readonly none: PixelOffsetMode;
  readonly half: PixelOffsetMode;
}

export {};
