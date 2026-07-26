import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "../System/Enum";
import "../System/IComparable";
import "../System/IConvertible";
import "../System/IFormattable";
import "../System/ISpanFormattable";

declare const sortFlagsBrand: unique symbol;
export interface SortFlags extends ClrHostValue {
  readonly [sortFlagsBrand]: true;
}

declare global {
  namespace OpenCvSharp {
    type SortFlags = import("./SortFlags").SortFlags;
  }
}

export interface SortFlagsHostType extends HostType<SortFlags, EnumTypeTrait> {
  readonly everyRow: SortFlags;
  readonly everyColumn: SortFlags;
  readonly ascending: SortFlags;
  readonly descending: SortFlags;
}

export {};
