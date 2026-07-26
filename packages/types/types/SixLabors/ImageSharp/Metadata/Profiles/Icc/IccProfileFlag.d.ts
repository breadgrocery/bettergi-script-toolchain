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

declare const iccProfileFlagBrand: unique symbol;
export interface IccProfileFlag extends ClrHostValue {
  readonly [iccProfileFlagBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccProfileFlag = import("./IccProfileFlag").IccProfileFlag;
  }
}

export interface IccProfileFlagHostType extends HostType<IccProfileFlag, EnumTypeTrait> {
  readonly none: IccProfileFlag;
  readonly embedded: IccProfileFlag;
  readonly notEmbedded: IccProfileFlag;
  readonly notIndependent: IccProfileFlag;
  readonly independent: IccProfileFlag;
}

export {};
