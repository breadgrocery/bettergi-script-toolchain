import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const conformanceLevelBrand: unique symbol;
export interface ConformanceLevel extends ClrHostValue {
  readonly [conformanceLevelBrand]: true;
}

declare global {
  namespace System.Xml {
    type ConformanceLevel = import("./ConformanceLevel").ConformanceLevel;
  }
}

export interface ConformanceLevelHostType extends HostType<ConformanceLevel, EnumTypeTrait> {
  readonly auto: ConformanceLevel;
  readonly fragment: ConformanceLevel;
  readonly document: ConformanceLevel;
}

export {};
