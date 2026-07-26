import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const fontStyleBrand: unique symbol;
export interface FontStyle extends ClrHostValue {
  readonly [fontStyleBrand]: true;
}

declare global {
  namespace System.Drawing {
    type FontStyle = import("./FontStyle").FontStyle;
  }
}

export interface FontStyleHostType extends HostType<FontStyle, EnumTypeTrait> {
  readonly regular: FontStyle;
  readonly bold: FontStyle;
  readonly italic: FontStyle;
  readonly underline: FontStyle;
  readonly strikeout: FontStyle;
}

export {};
