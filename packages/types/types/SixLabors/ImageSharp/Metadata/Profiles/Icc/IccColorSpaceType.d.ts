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

declare const iccColorSpaceTypeBrand: unique symbol;
export interface IccColorSpaceType extends ClrHostValue {
  readonly [iccColorSpaceTypeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccColorSpaceType = import("./IccColorSpaceType").IccColorSpaceType;
  }
}

export interface IccColorSpaceTypeHostType extends HostType<IccColorSpaceType, EnumTypeTrait> {
  readonly cieXyz: IccColorSpaceType;
  readonly cieLab: IccColorSpaceType;
  readonly cieLuv: IccColorSpaceType;
  readonly yCbCr: IccColorSpaceType;
  readonly cieYxy: IccColorSpaceType;
  readonly rgb: IccColorSpaceType;
  readonly gray: IccColorSpaceType;
  readonly hsv: IccColorSpaceType;
  readonly hls: IccColorSpaceType;
  readonly cmyk: IccColorSpaceType;
  readonly cmy: IccColorSpaceType;
  readonly color2: IccColorSpaceType;
  readonly color3: IccColorSpaceType;
  readonly color4: IccColorSpaceType;
  readonly color5: IccColorSpaceType;
  readonly color6: IccColorSpaceType;
  readonly color7: IccColorSpaceType;
  readonly color8: IccColorSpaceType;
  readonly color9: IccColorSpaceType;
  readonly color10: IccColorSpaceType;
  readonly color11: IccColorSpaceType;
  readonly color12: IccColorSpaceType;
  readonly color13: IccColorSpaceType;
  readonly color14: IccColorSpaceType;
  readonly color15: IccColorSpaceType;
}

export {};
