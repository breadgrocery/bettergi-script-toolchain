import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../Collections/IEnumerator";
import "../ICloneable";
import "./Schema/IXmlSchemaInfo";
import "./XPath/IXPathNavigable";
import "./XPath/XPathNavigator";
import "./XmlAttributeCollection";
import "./XmlDocument";
import "./XmlElement";
import "./XmlNamespaceManager";
import "./XmlNodeList";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlNodeBrand: unique symbol;
export interface XmlNode
  extends
    ClrHostValue,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlNodeBrand]: true;
  appendChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode;
  clone(): System.Xml.XmlNode;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  createNavigator(): System.Xml.XPath.XPathNavigator;
  getEnumerator(): System.Collections.IEnumerator;
  getNamespaceOfPrefix(prefix: string): string;
  getPrefixOfNamespace(namespaceURI: string): string;
  innerText: string;
  innerXml: string;
  insertAfter(
    newChild: System.Xml.XmlNode,
    refChild: System.Xml.XmlNode | null
  ): System.Xml.XmlNode;
  insertBefore(
    newChild: System.Xml.XmlNode,
    refChild: System.Xml.XmlNode | null
  ): System.Xml.XmlNode;
  item: {
    (name: string): System.Xml.XmlElement;
    get(name: string): System.Xml.XmlElement;
    (localname: string, ns: string): System.Xml.XmlElement;
    get(localname: string, ns: string): System.Xml.XmlElement;
  };
  normalize(): VoidResult;
  prefix: string;
  prependChild(newChild: System.Xml.XmlNode): System.Xml.XmlNode;
  readonly attributes: System.Xml.XmlAttributeCollection;
  readonly baseURI: string;
  readonly childNodes: System.Xml.XmlNodeList;
  readonly firstChild: System.Xml.XmlNode;
  readonly hasChildNodes: boolean;
  readonly isReadOnly: boolean;
  readonly lastChild: System.Xml.XmlNode;
  readonly localName: string;
  readonly name: string;
  readonly namespaceURI: string;
  readonly nextSibling: System.Xml.XmlNode;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly outerXml: string;
  readonly ownerDocument: System.Xml.XmlDocument;
  readonly parentNode: System.Xml.XmlNode;
  readonly previousSibling: System.Xml.XmlNode;
  readonly previousText: System.Xml.XmlNode;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  removeAll(): VoidResult;
  removeChild(oldChild: System.Xml.XmlNode): System.Xml.XmlNode;
  replaceChild(newChild: System.Xml.XmlNode, oldChild: System.Xml.XmlNode): System.Xml.XmlNode;
  selectNodes(xpath: string): System.Xml.XmlNodeList;
  selectNodes(xpath: string, nsmgr: System.Xml.XmlNamespaceManager): System.Xml.XmlNodeList;
  selectSingleNode(xpath: string): System.Xml.XmlNode;
  selectSingleNode(xpath: string, nsmgr: System.Xml.XmlNamespaceManager): System.Xml.XmlNode;
  supports(feature: string, version: string): boolean;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlNode = import("./XmlNode").XmlNode;
  }
}

export interface XmlNodeHostType extends HostType<XmlNode, ReferenceTypeTrait> {}

export {};
