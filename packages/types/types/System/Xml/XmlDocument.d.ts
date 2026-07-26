import type { EventSource } from "../../Microsoft/ClearScript/HostEvent";
import type {
  EnumInput,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "../IO/Stream";
import "../IO/TextReader";
import "../IO/TextWriter";
import "./Schema/IXmlSchemaInfo";
import "./Schema/ValidationEventHandler";
import "./Schema/XmlSchemaSet";
import "./XPath/IXPathNavigable";
import "./XPath/XPathNavigator";
import "./XmlAttribute";
import "./XmlCDataSection";
import "./XmlComment";
import "./XmlDeclaration";
import "./XmlDocumentFragment";
import "./XmlDocumentType";
import "./XmlElement";
import "./XmlEntityReference";
import "./XmlImplementation";
import "./XmlNameTable";
import "./XmlNode";
import "./XmlNodeChangedEventHandler";
import "./XmlNodeList";
import "./XmlNodeType";
import "./XmlProcessingInstruction";
import "./XmlReader";
import "./XmlResolver";
import "./XmlSignificantWhitespace";
import "./XmlText";
import "./XmlWhitespace";
import "./XmlWriter";

declare const xmlDocumentBrand: unique symbol;
export interface XmlDocument
  extends
    Omit<
      System.Xml.XmlNode,
      | "baseURI"
      | "cloneNode"
      | "createAttribute"
      | "createCDataSection"
      | "createComment"
      | "createDocumentFragment"
      | "createDocumentType"
      | "createElement"
      | "createEntityReference"
      | "createNavigator"
      | "createNode"
      | "createProcessingInstruction"
      | "createSignificantWhitespace"
      | "createTextNode"
      | "createWhitespace"
      | "createXmlDeclaration"
      | "documentElement"
      | "documentType"
      | "getElementById"
      | "getElementsByTagName"
      | "implementation"
      | "importNode"
      | "innerText"
      | "innerXml"
      | "isReadOnly"
      | "load"
      | "loadXml"
      | "localName"
      | "name"
      | "nameTable"
      | "nodeType"
      | "ownerDocument"
      | "parentNode"
      | "preserveWhitespace"
      | "readNode"
      | "save"
      | "schemaInfo"
      | "schemas"
      | "validate"
      | "writeContentTo"
      | "writeTo"
      | "xmlResolver"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlDocumentBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  createAttribute(name: string): System.Xml.XmlAttribute;
  createAttribute(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null
  ): System.Xml.XmlAttribute;
  createAttribute(qualifiedName: string, namespaceURI: string | null): System.Xml.XmlAttribute;
  createCDataSection(data: string | null): System.Xml.XmlCDataSection;
  createComment(data: string | null): System.Xml.XmlComment;
  createDocumentFragment(): System.Xml.XmlDocumentFragment;
  createDocumentType(
    name: string,
    publicId: string | null,
    systemId: string | null,
    internalSubset: string | null
  ): System.Xml.XmlDocumentType;
  createElement(name: string): System.Xml.XmlElement;
  createElement(
    prefix: string | null,
    localName: string,
    namespaceURI: string | null
  ): System.Xml.XmlElement;
  createElement(qualifiedName: string, namespaceURI: string | null): System.Xml.XmlElement;
  createEntityReference(name: string): System.Xml.XmlEntityReference;
  createNavigator(): System.Xml.XPath.XPathNavigator;
  createNode(nodeTypeString: string, name: string, namespaceURI: string | null): System.Xml.XmlNode;
  createNode(
    type: EnumInput<System.Xml.XmlNodeType>,
    name: string,
    namespaceURI: string | null
  ): System.Xml.XmlNode;
  createNode(
    type: EnumInput<System.Xml.XmlNodeType>,
    prefix: string | null,
    name: string,
    namespaceURI: string | null
  ): System.Xml.XmlNode;
  createProcessingInstruction(
    target: string,
    data: string | null
  ): System.Xml.XmlProcessingInstruction;
  createSignificantWhitespace(text: string | null): System.Xml.XmlSignificantWhitespace;
  createTextNode(text: string | null): System.Xml.XmlText;
  createWhitespace(text: string | null): System.Xml.XmlWhitespace;
  createXmlDeclaration(
    version: string,
    encoding: string | null,
    standalone: string | null
  ): System.Xml.XmlDeclaration;
  get innerText(): never;
  set innerText(value: string);
  get xmlResolver(): never;
  set xmlResolver(value: System.Xml.XmlResolver);
  getElementById(elementId: string): System.Xml.XmlElement;
  getElementsByTagName(localName: string, namespaceURI: string): System.Xml.XmlNodeList;
  getElementsByTagName(name: string): System.Xml.XmlNodeList;
  importNode(node: System.Xml.XmlNode, deep: boolean): System.Xml.XmlNode;
  innerXml: string;
  load(filename: string): VoidResult;
  load(inStream: System.IO.Stream): VoidResult;
  load(reader: System.Xml.XmlReader): VoidResult;
  load(txtReader: System.IO.TextReader): VoidResult;
  loadXml(xml: string): VoidResult;
  preserveWhitespace: boolean;
  readNode(reader: System.Xml.XmlReader): System.Xml.XmlNode;
  readonly baseURI: string;
  readonly documentElement: System.Xml.XmlElement;
  readonly documentType: System.Xml.XmlDocumentType;
  readonly implementation: System.Xml.XmlImplementation;
  readonly isReadOnly: boolean;
  readonly localName: string;
  readonly name: string;
  readonly nameTable: System.Xml.XmlNameTable;
  readonly nodeChanged: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeChanging: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeInserted: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeInserting: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeRemoved: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeRemoving: EventSource<
    (sender: unknown, e: System.Xml.XmlNodeChangedEventArgs) => void
  >;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly ownerDocument: System.Xml.XmlDocument;
  readonly parentNode: System.Xml.XmlNode;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  save(filename: string): VoidResult;
  save(outStream: System.IO.Stream): VoidResult;
  save(w: System.Xml.XmlWriter): VoidResult;
  save(writer: System.IO.TextWriter): VoidResult;
  schemas: System.Xml.Schema.XmlSchemaSet;
  validate(validationEventHandler: System.Xml.Schema.ValidationEventHandler | null): VoidResult;
  validate(
    validationEventHandler: System.Xml.Schema.ValidationEventHandler | null,
    nodeToValidate: System.Xml.XmlNode
  ): VoidResult;
  writeContentTo(xw: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlDocument = import("./XmlDocument").XmlDocument;
  }
}

export interface XmlDocumentHostType extends HostType<
  XmlDocument,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlDocument;
  new (nt: System.Xml.XmlNameTable): XmlDocument;
}

export {};
