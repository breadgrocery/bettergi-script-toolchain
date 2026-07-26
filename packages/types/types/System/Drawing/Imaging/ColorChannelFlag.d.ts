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

declare const colorChannelFlagBrand: unique symbol;
export interface ColorChannelFlag extends ClrHostValue {
  readonly [colorChannelFlagBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorChannelFlag = import("./ColorChannelFlag").ColorChannelFlag;
  }
}

export interface ColorChannelFlagHostType extends HostType<ColorChannelFlag, EnumTypeTrait> {
  readonly colorChannelC: ColorChannelFlag;
  readonly colorChannelM: ColorChannelFlag;
  readonly colorChannelY: ColorChannelFlag;
  readonly colorChannelK: ColorChannelFlag;
  readonly colorChannelLast: ColorChannelFlag;
}

export {};
