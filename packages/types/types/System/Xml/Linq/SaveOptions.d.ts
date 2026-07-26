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

declare const saveOptionsBrand: unique symbol;
export interface SaveOptions extends ClrHostValue {
  readonly [saveOptionsBrand]: true;
}

declare global {
  namespace System.Xml.Linq {
    type SaveOptions = import("./SaveOptions").SaveOptions;
  }
}

export interface SaveOptionsHostType extends HostType<SaveOptions, EnumTypeTrait> {
  readonly none: SaveOptions;
  readonly disableFormatting: SaveOptions;
  readonly omitDuplicateNamespaces: SaveOptions;
}

export {};
