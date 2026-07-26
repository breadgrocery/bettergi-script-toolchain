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

declare const iccPrimaryPlatformTypeBrand: unique symbol;
export interface IccPrimaryPlatformType extends ClrHostValue {
  readonly [iccPrimaryPlatformTypeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccPrimaryPlatformType = import("./IccPrimaryPlatformType").IccPrimaryPlatformType;
  }
}

export interface IccPrimaryPlatformTypeHostType extends HostType<
  IccPrimaryPlatformType,
  EnumTypeTrait
> {
  readonly notIdentified: IccPrimaryPlatformType;
  readonly appleComputerInc: IccPrimaryPlatformType;
  readonly microsoftCorporation: IccPrimaryPlatformType;
  readonly siliconGraphicsInc: IccPrimaryPlatformType;
  readonly sunMicrosystemsInc: IccPrimaryPlatformType;
}

export {};
