import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const mouseEventFlagsBrand: unique symbol;
export interface MouseEventFlags extends ClrHostValue {
  readonly [mouseEventFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MouseEventFlags = import("./MouseEventFlags").MouseEventFlags;
  }
}

export interface MouseEventFlagsHostType extends HostType<MouseEventFlags, EnumTypeTrait> {
  readonly lButton: MouseEventFlags;
  readonly rButton: MouseEventFlags;
  readonly mButton: MouseEventFlags;
  readonly ctrlKey: MouseEventFlags;
  readonly shiftKey: MouseEventFlags;
  readonly altKey: MouseEventFlags;
}

export {};
