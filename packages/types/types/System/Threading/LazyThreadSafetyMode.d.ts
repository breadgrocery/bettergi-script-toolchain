import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const lazyThreadSafetyModeBrand: unique symbol;
export interface LazyThreadSafetyMode extends ClrHostValue {
  readonly [lazyThreadSafetyModeBrand]: true;
}

declare global {
  namespace System.Threading {
    type LazyThreadSafetyMode = import("./LazyThreadSafetyMode").LazyThreadSafetyMode;
  }
}

export interface LazyThreadSafetyModeHostType extends HostType<
  LazyThreadSafetyMode,
  EnumTypeTrait
> {
  readonly none: LazyThreadSafetyMode;
  readonly publicationOnly: LazyThreadSafetyMode;
  readonly executionAndPublication: LazyThreadSafetyMode;
}

export {};
