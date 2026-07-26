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

declare const xmlCaseOrderBrand: unique symbol;
export interface XmlCaseOrder extends ClrHostValue {
  readonly [xmlCaseOrderBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XmlCaseOrder = import("./XmlCaseOrder").XmlCaseOrder;
  }
}

export interface XmlCaseOrderHostType extends HostType<XmlCaseOrder, EnumTypeTrait> {
  readonly none: XmlCaseOrder;
  readonly upperFirst: XmlCaseOrder;
  readonly lowerFirst: XmlCaseOrder;
}

export {};
