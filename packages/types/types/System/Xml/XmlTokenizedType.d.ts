import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlTokenizedTypeBrand: unique symbol;
export interface XmlTokenizedType extends ClrHostValue {
  readonly [xmlTokenizedTypeBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlTokenizedType = import("./XmlTokenizedType").XmlTokenizedType;
  }
}

export interface XmlTokenizedTypeHostType extends HostType<XmlTokenizedType, EnumTypeTrait> {
  readonly cdata: XmlTokenizedType;
  readonly id: XmlTokenizedType;
  readonly idref: XmlTokenizedType;
  readonly idrefs: XmlTokenizedType;
  readonly entity: XmlTokenizedType;
  readonly entities: XmlTokenizedType;
  readonly nmtoken: XmlTokenizedType;
  readonly nmtokens: XmlTokenizedType;
  readonly notation: XmlTokenizedType;
  readonly enumeration: XmlTokenizedType;
  readonly qName: XmlTokenizedType;
  readonly ncName: XmlTokenizedType;
  readonly none: XmlTokenizedType;
}

export {};
