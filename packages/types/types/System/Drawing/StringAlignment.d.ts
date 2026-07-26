import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const stringAlignmentBrand: unique symbol;
export interface StringAlignment extends ClrHostValue {
  readonly [stringAlignmentBrand]: true;
}

declare global {
  namespace System.Drawing {
    type StringAlignment = import("./StringAlignment").StringAlignment;
  }
}

export interface StringAlignmentHostType extends HostType<StringAlignment, EnumTypeTrait> {
  readonly near: StringAlignment;
  readonly center: StringAlignment;
  readonly far: StringAlignment;
}

export {};
