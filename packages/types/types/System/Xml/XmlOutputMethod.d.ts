import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlOutputMethodBrand: unique symbol;
export interface XmlOutputMethod extends ClrHostValue {
  readonly [xmlOutputMethodBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlOutputMethod = import("./XmlOutputMethod").XmlOutputMethod;
  }
}

export interface XmlOutputMethodHostType extends HostType<XmlOutputMethod, EnumTypeTrait> {
  readonly xml: XmlOutputMethod;
  readonly html: XmlOutputMethod;
  readonly text: XmlOutputMethod;
  readonly autoDetect: XmlOutputMethod;
}

export {};
