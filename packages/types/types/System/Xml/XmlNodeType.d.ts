import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlNodeTypeBrand: unique symbol;
export interface XmlNodeType extends ClrHostValue {
  readonly [xmlNodeTypeBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlNodeType = import("./XmlNodeType").XmlNodeType;
  }
}

export interface XmlNodeTypeHostType extends HostType<XmlNodeType, EnumTypeTrait> {
  readonly none: XmlNodeType;
  readonly element: XmlNodeType;
  readonly attribute: XmlNodeType;
  readonly text: XmlNodeType;
  readonly cdata: XmlNodeType;
  readonly entityReference: XmlNodeType;
  readonly entity: XmlNodeType;
  readonly processingInstruction: XmlNodeType;
  readonly comment: XmlNodeType;
  readonly document: XmlNodeType;
  readonly documentType: XmlNodeType;
  readonly documentFragment: XmlNodeType;
  readonly notation: XmlNodeType;
  readonly whitespace: XmlNodeType;
  readonly significantWhitespace: XmlNodeType;
  readonly endElement: XmlNodeType;
  readonly endEntity: XmlNodeType;
  readonly xmlDeclaration: XmlNodeType;
}

export {};
