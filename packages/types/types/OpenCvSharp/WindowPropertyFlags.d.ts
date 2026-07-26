import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const windowPropertyFlagsBrand: unique symbol;
export interface WindowPropertyFlags extends ClrHostValue {
  readonly [windowPropertyFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type WindowPropertyFlags = import("./WindowPropertyFlags").WindowPropertyFlags;
  }
}

export interface WindowPropertyFlagsHostType extends HostType<WindowPropertyFlags, EnumTypeTrait> {
  readonly fullscreen: WindowPropertyFlags;
  readonly autoSize: WindowPropertyFlags;
  readonly aspectRatio: WindowPropertyFlags;
  readonly openGL: WindowPropertyFlags;
  readonly visible: WindowPropertyFlags;
  readonly topmost: WindowPropertyFlags;
}

export {};
