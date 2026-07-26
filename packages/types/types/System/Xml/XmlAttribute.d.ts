import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./Schema/IXmlSchemaInfo";
import "./XPath/IXPathNavigable";
import "./XmlDocument";
import "./XmlElement";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlAttributeBrand: unique symbol;
export interface XmlAttribute
  extends
    Omit<
      System.Xml.XmlNode,
      | "appendChild"
      | "baseURI"
      | "cloneNode"
      | "innerText"
      | "innerXml"
      | "insertAfter"
      | "insertBefore"
      | "localName"
      | "name"
      | "namespaceURI"
      | "nodeType"
      | "ownerDocument"
      | "ownerElement"
      | "parentNode"
      | "prefix"
      | "prependChild"
      | "removeChild"
      | "replaceChild"
      | "schemaInfo"
      | "specified"
      | "value"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlAttributeBrand]: true;
  appendChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  get innerText(): never;
  set innerText(value: string);
  get innerXml(): never;
  set innerXml(value: string);
  insertAfter(
    newChild: System.Xml.XmlNode,
    refChild: System.Xml.XmlNode | null
  ): System.Xml.XmlNode;
  insertBefore(
    newChild: System.Xml.XmlNode,
    refChild: System.Xml.XmlNode | null
  ): System.Xml.XmlNode;
  prefix: string;
  prependChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode;
  readonly baseURI: string;
  readonly localName: string;
  readonly name: string;
  readonly namespaceURI: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly ownerDocument: System.Xml.XmlDocument;
  readonly ownerElement: System.Xml.XmlElement;
  readonly parentNode: System.Xml.XmlNode;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  readonly specified: boolean;
  removeChild(oldChild: System.Xml.XmlNode): System.Xml.XmlNode;
  replaceChild(newChild: System.Xml.XmlNode, oldChild: System.Xml.XmlNode): System.Xml.XmlNode;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlAttribute = import("./XmlAttribute").XmlAttribute;
  }
}

export interface XmlAttributeHostType extends HostType<XmlAttribute, ReferenceTypeTrait> {}

export {};
