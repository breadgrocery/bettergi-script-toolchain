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

declare const genericFontFamiliesBrand: unique symbol;
export interface GenericFontFamilies extends ClrHostValue {
  readonly [genericFontFamiliesBrand]: true;
}

declare global {
  namespace System.Drawing.Text {
    type GenericFontFamilies = import("./GenericFontFamilies").GenericFontFamilies;
  }
}

export interface GenericFontFamiliesHostType extends HostType<GenericFontFamilies, EnumTypeTrait> {
  readonly serif: GenericFontFamilies;
  readonly sansSerif: GenericFontFamilies;
  readonly monospace: GenericFontFamilies;
}

export {};
