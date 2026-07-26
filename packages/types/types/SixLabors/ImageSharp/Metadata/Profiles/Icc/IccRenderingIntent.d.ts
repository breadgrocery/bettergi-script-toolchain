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

declare const iccRenderingIntentBrand: unique symbol;
export interface IccRenderingIntent extends ClrHostValue {
  readonly [iccRenderingIntentBrand]: true;
}

declare global {
  namespace SixLabors.ImageSharp.Metadata.Profiles.Icc {
    type IccRenderingIntent = import("./IccRenderingIntent").IccRenderingIntent;
  }
}

export interface IccRenderingIntentHostType extends HostType<IccRenderingIntent, EnumTypeTrait> {
  readonly perceptual: IccRenderingIntent;
  readonly mediaRelativeColorimetric: IccRenderingIntent;
  readonly saturation: IccRenderingIntent;
  readonly absoluteColorimetric: IccRenderingIntent;
}

export {};
