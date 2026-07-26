import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlNodeOrderBrand: unique symbol;
export interface XmlNodeOrder extends ClrHostValue {
  readonly [xmlNodeOrderBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlNodeOrder = import("./XmlNodeOrder").XmlNodeOrder;
  }
}

export interface XmlNodeOrderHostType extends HostType<XmlNodeOrder, EnumTypeTrait> {
  readonly before: XmlNodeOrder;
  readonly after: XmlNodeOrder;
  readonly same: XmlNodeOrder;
  readonly unknown: XmlNodeOrder;
}

export {};
