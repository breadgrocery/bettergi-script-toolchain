import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const flipModeBrand: unique symbol;
export interface FlipMode extends ClrHostValue {
  readonly [flipModeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type FlipMode = import("./FlipMode").FlipMode;
  }
}

export interface FlipModeHostType extends HostType<FlipMode, EnumTypeTrait> {
  readonly x: FlipMode;
  readonly y: FlipMode;
  readonly xy: FlipMode;
}

export {};
