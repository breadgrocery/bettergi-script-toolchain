import type { ClrHostValue, EnumTypeTrait, HostType } from "../Microsoft/ClearScript/HostType";
import "./Enum";
import "./IComparable";
import "./IConvertible";
import "./IFormattable";
import "./ISpanFormattable";

declare const stringSplitOptionsBrand: unique symbol;
export interface StringSplitOptions extends ClrHostValue {
  readonly [stringSplitOptionsBrand]: true;
}

declare global {
  namespace System {
    type StringSplitOptions = import("./StringSplitOptions").StringSplitOptions;
  }
}

export interface StringSplitOptionsHostType extends HostType<StringSplitOptions, EnumTypeTrait> {
  readonly none: StringSplitOptions;
  readonly removeEmptyEntries: StringSplitOptions;
  readonly trimEntries: StringSplitOptions;
}

export {};
