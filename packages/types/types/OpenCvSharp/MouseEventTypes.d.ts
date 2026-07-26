import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const mouseEventTypesBrand: unique symbol;
export interface MouseEventTypes extends ClrHostValue {
  readonly [mouseEventTypesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type MouseEventTypes = import("./MouseEventTypes").MouseEventTypes;
  }
}

export interface MouseEventTypesHostType extends HostType<MouseEventTypes, EnumTypeTrait> {
  readonly mouseMove: MouseEventTypes;
  readonly lButtonDown: MouseEventTypes;
  readonly rButtonDown: MouseEventTypes;
  readonly mButtonDown: MouseEventTypes;
  readonly lButtonUp: MouseEventTypes;
  readonly rButtonUp: MouseEventTypes;
  readonly mButtonUp: MouseEventTypes;
  readonly lButtonDoubleClick: MouseEventTypes;
  readonly rButtonDoubleClick: MouseEventTypes;
  readonly mButtonDoubleClick: MouseEventTypes;
  readonly mouseWheel: MouseEventTypes;
  readonly mouseHWheel: MouseEventTypes;
}

export {};
