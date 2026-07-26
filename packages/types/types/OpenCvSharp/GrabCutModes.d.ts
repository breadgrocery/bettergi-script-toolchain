import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const grabCutModesBrand: unique symbol;
export interface GrabCutModes extends ClrHostValue {
  readonly [grabCutModesBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type GrabCutModes = import("./GrabCutModes").GrabCutModes;
  }
}

export interface GrabCutModesHostType extends HostType<GrabCutModes, EnumTypeTrait> {
  readonly initWithRect: GrabCutModes;
  readonly initWithMask: GrabCutModes;
  readonly eval: GrabCutModes;
}

export {};
