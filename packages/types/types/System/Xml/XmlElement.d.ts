import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./Schema/IXmlSchemaInfo";
import "./XPath/IXPathNavigable";
import "./XmlAttribute";
import "./XmlAttributeCollection";
import "./XmlDocument";
import "./XmlLinkedNode";
import "./XmlNode";
import "./XmlNodeList";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlElementBrand: unique symbol;
export interface XmlElement
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "attributes"
      | "cloneNode"
      | "getAttribute"
      | "getAttributeNode"
      | "getElementsByTagName"
      | "hasAttribute"
      | "hasAttributes"
      | "innerText"
      | "innerXml"
      | "isEmpty"
      | "localName"
      | "name"
      | "namespaceURI"
      | "nextSibling"
      | "nodeType"
      | "ownerDocument"
      | "parentNode"
      | "prefix"
      | "removeAll"
      | "removeAllAttributes"
      | "removeAttribute"
      | "removeAttributeAt"
      | "removeAttributeNode"
      | "schemaInfo"
      | "setAttribute"
      | "setAttributeNode"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlElementBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  getAttribute(localName: string, namespaceURI: string | null): string;
  getAttribute(name: string): string;
  getAttributeNode(localName: string, namespaceURI: string | null): System.Xml.XmlAttribute;
  getAttributeNode(name: string): System.Xml.XmlAttribute;
  getElementsByTagName(localName: string, namespaceURI: string): System.Xml.XmlNodeList;
  getElementsByTagName(name: string): System.Xml.XmlNodeList;
  hasAttribute(localName: string, namespaceURI: string | null): boolean;
  hasAttribute(name: string): boolean;
  innerText: string;
  innerXml: string;
  isEmpty: boolean;
  prefix: string;
  readonly attributes: System.Xml.XmlAttributeCollection;
  readonly hasAttributes: boolean;
  readonly localName: string;
  readonly name: string;
  readonly namespaceURI: string;
  readonly nextSibling: System.Xml.XmlNode;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly ownerDocument: System.Xml.XmlDocument;
  readonly parentNode: System.Xml.XmlNode;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  removeAll(): VoidResult;
  removeAllAttributes(): VoidResult;
  removeAttribute(localName: string, namespaceURI: string | null): VoidResult;
  removeAttribute(name: string): VoidResult;
  removeAttributeAt(i: number | StrongNumeric<Int32Host>): System.Xml.XmlNode;
  removeAttributeNode(localName: string, namespaceURI: string | null): System.Xml.XmlAttribute;
  removeAttributeNode(oldAttr: System.Xml.XmlAttribute): System.Xml.XmlAttribute;
  setAttribute(localName: string, namespaceURI: string | null, value: string | null): string;
  setAttribute(name: string, value: string | null): VoidResult;
  setAttributeNode(localName: string, namespaceURI: string | null): System.Xml.XmlAttribute;
  setAttributeNode(newAttr: System.Xml.XmlAttribute): System.Xml.XmlAttribute;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlElement = import("./XmlElement").XmlElement;
  }
}

export interface XmlElementHostType extends HostType<XmlElement, ReferenceTypeTrait> {}

export {};
