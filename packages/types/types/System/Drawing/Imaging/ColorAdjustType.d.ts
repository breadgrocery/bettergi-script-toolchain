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

declare const colorAdjustTypeBrand: unique symbol;
export interface ColorAdjustType extends ClrHostValue {
  readonly [colorAdjustTypeBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorAdjustType = import("./ColorAdjustType").ColorAdjustType;
  }
}

export interface ColorAdjustTypeHostType extends HostType<ColorAdjustType, EnumTypeTrait> {
  readonly default: ColorAdjustType;
  readonly bitmap: ColorAdjustType;
  readonly brush: ColorAdjustType;
  readonly pen: ColorAdjustType;
  readonly text: ColorAdjustType;
  readonly count: ColorAdjustType;
  readonly any: ColorAdjustType;
}

export {};
