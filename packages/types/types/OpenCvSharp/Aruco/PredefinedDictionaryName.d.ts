import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";

declare const predefinedDictionaryNameBrand: unique symbol;
export interface PredefinedDictionaryName extends ClrHostValue {
  readonly [predefinedDictionaryNameBrand]: true;
}

declare global {
  namespace OpenCvSharp.Aruco {
    type PredefinedDictionaryName = import("./PredefinedDictionaryName").PredefinedDictionaryName;
  }
}

export interface PredefinedDictionaryNameHostType extends HostType<
  PredefinedDictionaryName,
  EnumTypeTrait
> {
  readonly dict4X4_50: PredefinedDictionaryName;
  readonly dict4X4_100: PredefinedDictionaryName;
  readonly dict4X4_250: PredefinedDictionaryName;
  readonly dict4X4_1000: PredefinedDictionaryName;
  readonly dict5X5_50: PredefinedDictionaryName;
  readonly dict5X5_100: PredefinedDictionaryName;
  readonly dict5X5_250: PredefinedDictionaryName;
  readonly dict5X5_1000: PredefinedDictionaryName;
  readonly dict6X6_50: PredefinedDictionaryName;
  readonly dict6X6_100: PredefinedDictionaryName;
  readonly dict6X6_250: PredefinedDictionaryName;
  readonly dict6X6_1000: PredefinedDictionaryName;
  readonly dict7X7_50: PredefinedDictionaryName;
  readonly dict7X7_100: PredefinedDictionaryName;
  readonly dict7X7_250: PredefinedDictionaryName;
  readonly dict7X7_1000: PredefinedDictionaryName;
  readonly dictArucoOriginal: PredefinedDictionaryName;
  readonly dictAprilTag_16h5: PredefinedDictionaryName;
  readonly dictAprilTag_25h9: PredefinedDictionaryName;
  readonly dictAprilTag_36h10: PredefinedDictionaryName;
  readonly dictAprilTag_36h11: PredefinedDictionaryName;
}

export {};
