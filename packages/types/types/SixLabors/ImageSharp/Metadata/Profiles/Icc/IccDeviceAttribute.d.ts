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

declare const iccDeviceAttributeBrand: unique symbol;
export interface IccDeviceAttribute extends ClrHostValue {
  readonly [iccDeviceAttributeBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccDeviceAttribute = import("./IccDeviceAttribute").IccDeviceAttribute;
  }
}

export interface IccDeviceAttributeHostType extends HostType<IccDeviceAttribute, EnumTypeTrait> {
  readonly opacityTransparent: IccDeviceAttribute;
  readonly opacityReflective: IccDeviceAttribute;
  readonly reflectivityMatte: IccDeviceAttribute;
  readonly reflectivityGlossy: IccDeviceAttribute;
  readonly polarityNegative: IccDeviceAttribute;
  readonly polarityPositive: IccDeviceAttribute;
  readonly chromaBlackWhite: IccDeviceAttribute;
  readonly chromaColor: IccDeviceAttribute;
}

export {};
