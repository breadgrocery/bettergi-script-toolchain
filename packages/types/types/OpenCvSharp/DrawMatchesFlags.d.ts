import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const drawMatchesFlagsBrand: unique symbol;
export interface DrawMatchesFlags extends ClrHostValue {
  readonly [drawMatchesFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type DrawMatchesFlags = import("./DrawMatchesFlags").DrawMatchesFlags;
  }
}

export interface DrawMatchesFlagsHostType extends HostType<DrawMatchesFlags, EnumTypeTrait> {
  readonly default: DrawMatchesFlags;
  readonly drawOverOutImg: DrawMatchesFlags;
  readonly notDrawSinglePoints: DrawMatchesFlags;
  readonly drawRichKeypoints: DrawMatchesFlags;
}

export {};
