import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const angleRangeOptionBrand: unique symbol;
export interface AngleRangeOption extends ClrHostValue {
  readonly [angleRangeOptionBrand]: true;
}

declare global {
  namespace OpenCvSharp.XImgProc {
    type AngleRangeOption = import("./AngleRangeOption").AngleRangeOption;
  }
}

export interface AngleRangeOptionHostType extends HostType<AngleRangeOption, EnumTypeTrait> {
  readonly arO_0_45: AngleRangeOption;
  readonly arO_45_90: AngleRangeOption;
  readonly arO_90_135: AngleRangeOption;
  readonly arO_315_0: AngleRangeOption;
  readonly arO_315_45: AngleRangeOption;
  readonly arO_45_135: AngleRangeOption;
  readonly arO_315_135: AngleRangeOption;
  readonly arO_CTR_HOR: AngleRangeOption;
  readonly arO_CTR_VER: AngleRangeOption;
}

export {};
