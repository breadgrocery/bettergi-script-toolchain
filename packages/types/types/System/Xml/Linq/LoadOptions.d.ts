import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const loadOptionsBrand: unique symbol;
export interface LoadOptions extends ClrHostValue {
  readonly [loadOptionsBrand]: true;
}

declare global {
  namespace System.Xml.Linq {
    type LoadOptions = import("./LoadOptions").LoadOptions;
  }
}

export interface LoadOptionsHostType extends HostType<LoadOptions, EnumTypeTrait> {
  readonly none: LoadOptions;
  readonly preserveWhitespace: LoadOptions;
  readonly setBaseUri: LoadOptions;
  readonly setLineInfo: LoadOptions;
}

export {};
