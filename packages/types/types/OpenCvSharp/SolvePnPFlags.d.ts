import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const solvePnPFlagsBrand: unique symbol;
export interface SolvePnPFlags extends ClrHostValue {
  readonly [solvePnPFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SolvePnPFlags = import("./SolvePnPFlags").SolvePnPFlags;
  }
}

export interface SolvePnPFlagsHostType extends HostType<SolvePnPFlags, EnumTypeTrait> {
  readonly iterative: SolvePnPFlags;
  readonly epnp: SolvePnPFlags;
  readonly p3P: SolvePnPFlags;
  readonly dls: SolvePnPFlags;
  readonly upnp: SolvePnPFlags;
}

export {};
