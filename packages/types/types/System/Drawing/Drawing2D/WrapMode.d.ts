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

declare const wrapModeBrand: unique symbol;
export interface WrapMode extends ClrHostValue {
  readonly [wrapModeBrand]: true;
}

declare global {
  namespace System.Drawing.Drawing2D {
    type WrapMode = import("./WrapMode").WrapMode;
  }
}

export interface WrapModeHostType extends HostType<WrapMode, EnumTypeTrait> {
  readonly tile: WrapMode;
  readonly tileFlipX: WrapMode;
  readonly tileFlipY: WrapMode;
  readonly tileFlipXY: WrapMode;
  readonly clamp: WrapMode;
}

export {};
