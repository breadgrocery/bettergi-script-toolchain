import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const rulesOptionBrand: unique symbol;
export interface RulesOption extends ClrHostValue {
  readonly [rulesOptionBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type RulesOption = import("./RulesOption").RulesOption;
  }
}

export interface RulesOptionHostType extends HostType<RulesOption, EnumTypeTrait> {
  readonly strict: RulesOption;
  readonly ignorE_BORDERS: RulesOption;
}

export {};
