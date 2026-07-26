import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const processWindowStyleBrand: unique symbol;
export interface ProcessWindowStyle extends ClrHostValue {
  readonly [processWindowStyleBrand]: true;
}

declare global {
  namespace System.Diagnostics {
    type ProcessWindowStyle = import("./ProcessWindowStyle").ProcessWindowStyle;
  }
}

export interface ProcessWindowStyleHostType extends HostType<ProcessWindowStyle, EnumTypeTrait> {
  readonly normal: ProcessWindowStyle;
  readonly hidden: ProcessWindowStyle;
  readonly minimized: ProcessWindowStyle;
  readonly maximized: ProcessWindowStyle;
}

export {};
