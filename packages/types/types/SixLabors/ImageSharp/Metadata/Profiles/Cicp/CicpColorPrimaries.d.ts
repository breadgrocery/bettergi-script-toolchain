import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../../../Microsoft/ClearScript/HostType";
import "../../../../../System/Enum";
import "../../../../../System/IComparable";
import "../../../../../System/IConvertible";
import "../../../../../System/IFormattable";
import "../../../../../System/ISpanFormattable";

declare const cicpColorPrimariesBrand: unique symbol;
export interface CicpColorPrimaries extends ClrHostValue {
  readonly [cicpColorPrimariesBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Cicp {
    type CicpColorPrimaries = import("./CicpColorPrimaries").CicpColorPrimaries;
  }
}

export interface CicpColorPrimariesHostType extends HostType<CicpColorPrimaries, EnumTypeTrait> {
  readonly ituRBt709_6: CicpColorPrimaries;
  readonly unspecified: CicpColorPrimaries;
  readonly ituRBt470_6M: CicpColorPrimaries;
  readonly ituRBt601_7_625: CicpColorPrimaries;
  readonly ituRBt601_7_525: CicpColorPrimaries;
  readonly smpteSt240: CicpColorPrimaries;
  readonly genericFilm: CicpColorPrimaries;
  readonly ituRBt2020_2: CicpColorPrimaries;
  readonly smpteSt428_1: CicpColorPrimaries;
  readonly smpteRp431_2: CicpColorPrimaries;
  readonly smpteEg432_1: CicpColorPrimaries;
  readonly ebuTech3213E: CicpColorPrimaries;
}

export {};
