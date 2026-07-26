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

declare const readerOptionsBrand: unique symbol;
export interface ReaderOptions extends ClrHostValue {
  readonly [readerOptionsBrand]: true;
}

declare global {
  namespace System.Xml.Linq {
    type ReaderOptions = import("./ReaderOptions").ReaderOptions;
  }
}

export interface ReaderOptionsHostType extends HostType<ReaderOptions, EnumTypeTrait> {
  readonly none: ReaderOptions;
  readonly omitDuplicateNamespaces: ReaderOptions;
}

export {};
