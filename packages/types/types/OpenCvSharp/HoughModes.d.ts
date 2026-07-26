import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const houghModesBrand: unique symbol;
export interface HoughModes extends ClrHostValue {
  readonly [houghModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type HoughModes = import("./HoughModes").HoughModes;
  }
}

export interface HoughModesHostType extends HostType<HoughModes, EnumTypeTrait> {
  readonly standard: HoughModes;
  readonly probabilistic: HoughModes;
  readonly multiScale: HoughModes;
  readonly gradient: HoughModes;
  readonly gradientAlt: HoughModes;
}

export {};
