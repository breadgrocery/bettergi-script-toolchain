import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const windowFlagsBrand: unique symbol;
export interface WindowFlags extends ClrHostValue {
  readonly [windowFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type WindowFlags = import("./WindowFlags").WindowFlags;
  }
}

export interface WindowFlagsHostType extends HostType<WindowFlags, EnumTypeTrait> {
  readonly normal: WindowFlags;
  readonly autoSize: WindowFlags;
  readonly openGL: WindowFlags;
  readonly fullScreen: WindowFlags;
  readonly freeRatio: WindowFlags;
  readonly keepRatio: WindowFlags;
  readonly guiExpanded: WindowFlags;
  readonly guiNormal: WindowFlags;
}

export {};
