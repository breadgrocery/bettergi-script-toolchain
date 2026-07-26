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

declare const textRenderingHintBrand: unique symbol;
export interface TextRenderingHint extends ClrHostValue {
  readonly [textRenderingHintBrand]: true;
}

declare global {
  namespace System.Drawing.Text {
    type TextRenderingHint = import("./TextRenderingHint").TextRenderingHint;
  }
}

export interface TextRenderingHintHostType extends HostType<TextRenderingHint, EnumTypeTrait> {
  readonly systemDefault: TextRenderingHint;
  readonly singleBitPerPixelGridFit: TextRenderingHint;
  readonly singleBitPerPixel: TextRenderingHint;
  readonly antiAliasGridFit: TextRenderingHint;
  readonly antiAlias: TextRenderingHint;
  readonly clearTypeGridFit: TextRenderingHint;
}

export {};
