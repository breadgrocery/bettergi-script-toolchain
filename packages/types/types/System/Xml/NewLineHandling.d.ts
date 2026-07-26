import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const newLineHandlingBrand: unique symbol;
export interface NewLineHandling extends ClrHostValue {
  readonly [newLineHandlingBrand]: true;
}

declare global {
  namespace System.Xml {
    type NewLineHandling = import("./NewLineHandling").NewLineHandling;
  }
}

export interface NewLineHandlingHostType extends HostType<NewLineHandling, EnumTypeTrait> {
  readonly replace: NewLineHandling;
  readonly entitize: NewLineHandling;
  readonly none: NewLineHandling;
}

export {};
