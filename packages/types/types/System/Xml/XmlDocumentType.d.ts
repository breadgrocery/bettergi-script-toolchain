import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlLinkedNode";
import "./XmlNamedNodeMap";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlDocumentTypeBrand: unique symbol;
export interface XmlDocumentType
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "cloneNode"
      | "entities"
      | "internalSubset"
      | "isReadOnly"
      | "localName"
      | "name"
      | "nodeType"
      | "notations"
      | "publicId"
      | "systemId"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlDocumentTypeBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly entities: System.Xml.XmlNamedNodeMap;
  readonly internalSubset: string;
  readonly isReadOnly: boolean;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly notations: System.Xml.XmlNamedNodeMap;
  readonly publicId: string;
  readonly systemId: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlDocumentType = import("./XmlDocumentType").XmlDocumentType;
  }
}

export interface XmlDocumentTypeHostType extends HostType<XmlDocumentType, ReferenceTypeTrait> {}

export {};
