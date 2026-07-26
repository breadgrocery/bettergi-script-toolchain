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

declare const colorMatrixFlagBrand: unique symbol;
export interface ColorMatrixFlag extends ClrHostValue {
  readonly [colorMatrixFlagBrand]: true;
}

declare global {
  namespace System.Drawing.Imaging {
    type ColorMatrixFlag = import("./ColorMatrixFlag").ColorMatrixFlag;
  }
}

export interface ColorMatrixFlagHostType extends HostType<ColorMatrixFlag, EnumTypeTrait> {
  readonly default: ColorMatrixFlag;
  readonly skipGrays: ColorMatrixFlag;
  readonly altGrays: ColorMatrixFlag;
}

export {};
