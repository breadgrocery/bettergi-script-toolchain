import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const uMatUsageFlagsBrand: unique symbol;
export interface UMatUsageFlags extends ClrHostValue {
  readonly [uMatUsageFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type UMatUsageFlags = import("./UMatUsageFlags").UMatUsageFlags;
  }
}

export interface UMatUsageFlagsHostType extends HostType<UMatUsageFlags, EnumTypeTrait> {
  readonly none: UMatUsageFlags;
  readonly hostMemory: UMatUsageFlags;
  readonly deviceMemory: UMatUsageFlags;
  readonly sharedMemory: UMatUsageFlags;
}

export {};
