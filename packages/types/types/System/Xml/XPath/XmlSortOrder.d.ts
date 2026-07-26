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

declare const xmlSortOrderBrand: unique symbol;
export interface XmlSortOrder extends ClrHostValue {
  readonly [xmlSortOrderBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XmlSortOrder = import("./XmlSortOrder").XmlSortOrder;
  }
}

export interface XmlSortOrderHostType extends HostType<XmlSortOrder, EnumTypeTrait> {
  readonly ascending: XmlSortOrder;
  readonly descending: XmlSortOrder;
}

export {};
