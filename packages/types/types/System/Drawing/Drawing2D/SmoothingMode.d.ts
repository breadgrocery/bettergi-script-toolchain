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

declare const smoothingModeBrand: unique symbol;
export interface SmoothingMode extends ClrHostValue {
  readonly [smoothingModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type SmoothingMode = import("./SmoothingMode").SmoothingMode;
  }
}

export interface SmoothingModeHostType extends HostType<SmoothingMode, EnumTypeTrait> {
  readonly invalid: SmoothingMode;
  readonly default: SmoothingMode;
  readonly highSpeed: SmoothingMode;
  readonly highQuality: SmoothingMode;
  readonly none: SmoothingMode;
  readonly antiAlias: SmoothingMode;
}

export {};
