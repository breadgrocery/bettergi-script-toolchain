import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const warpPolarModeBrand: unique symbol;
export interface WarpPolarMode extends ClrHostValue {
  readonly [warpPolarModeBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type WarpPolarMode = import("./WarpPolarMode").WarpPolarMode;
  }
}

export interface WarpPolarModeHostType extends HostType<WarpPolarMode, EnumTypeTrait> {
  readonly linear: WarpPolarMode;
  readonly log: WarpPolarMode;
}

export {};
