import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../DateTime";
import "../DateTimeOffset";
import "../IDisposable";
import "../IO/Stream";
import "../IO/TextReader";
import "../V8SplitProxyHelpers";
import "./IXmlNamespaceResolver";
import "./ReadState";
import "./Schema/IXmlSchemaInfo";
import "./XmlNameTable";
import "./XmlNodeType";
import "./XmlParserContext";
import "./XmlReaderSettings";
import "./XmlSpace";

declare const xmlReaderBrand: unique symbol;
export interface XmlReader extends ClrHostValue, System.IDisposableInput {
  readonly [xmlReaderBrand]: true;
  close(): VoidResult;
  dispose(): VoidResult;
  getAttribute(i: number | StrongNumeric<Int32Host>): string;
  getAttribute(name: string): string;
  getAttribute(name: string, namespaceURI: string | null): string;
  getValueAsync(): Promise<string>;
  isStartElement(): boolean;
  isStartElement(localname: string, ns: string): boolean;
  isStartElement(name: string): boolean;
  item: {
    (i: number | StrongNumeric<Int32Host>): string;
    get(i: number | StrongNumeric<Int32Host>): string;
    (name: string): string;
    get(name: string): string;
    (name: string, namespaceURI: string): string;
    get(name: string, namespaceURI: string): string;
  };
  lookupNamespace(prefix: string): string;
  moveToAttribute(i: number | StrongNumeric<Int32Host>): VoidResult;
  moveToAttribute(name: string): boolean;
  moveToAttribute(name: string, ns: string | null): boolean;
  moveToContent(): System.Xml.XmlNodeType;
  moveToContentAsync(): Promise<System.Xml.XmlNodeType>;
  moveToElement(): boolean;
  moveToFirstAttribute(): boolean;
  moveToNextAttribute(): boolean;
  read(): boolean;
  readAsync(): Promise<boolean>;
  readAttributeValue(): boolean;
  readContentAs(
    returnType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver | null
  ): unknown;
  readContentAsAsync(
    returnType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver | null
  ): Promise<unknown>;
  readContentAsBase64(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readContentAsBase64Async(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readContentAsBinHex(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readContentAsBinHexAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readContentAsBoolean(): boolean;
  readContentAsDateTime(): System.DateTime;
  readContentAsDateTimeOffset(): System.DateTimeOffset;
  readContentAsDecimal(): number;
  readContentAsDouble(): number;
  readContentAsFloat(): number;
  readContentAsInt(): number;
  readContentAsLong(): number;
  readContentAsObject(): unknown;
  readContentAsObjectAsync(): Promise<unknown>;
  readContentAsString(): string;
  readContentAsStringAsync(): Promise<string>;
  readElementContentAs(
    returnType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver
  ): unknown;
  readElementContentAs(
    returnType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver,
    localName: string,
    namespaceURI: string
  ): unknown;
  readElementContentAsAsync(
    returnType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver
  ): Promise<unknown>;
  readElementContentAsBase64(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readElementContentAsBase64Async(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readElementContentAsBinHex(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readElementContentAsBinHexAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readElementContentAsBoolean(): boolean;
  readElementContentAsBoolean(localName: string, namespaceURI: string): boolean;
  readElementContentAsDateTime(): System.DateTime;
  readElementContentAsDateTime(localName: string, namespaceURI: string): System.DateTime;
  readElementContentAsDecimal(): number;
  readElementContentAsDecimal(localName: string, namespaceURI: string): number;
  readElementContentAsDouble(): number;
  readElementContentAsDouble(localName: string, namespaceURI: string): number;
  readElementContentAsFloat(): number;
  readElementContentAsFloat(localName: string, namespaceURI: string): number;
  readElementContentAsInt(): number;
  readElementContentAsInt(localName: string, namespaceURI: string): number;
  readElementContentAsLong(): number;
  readElementContentAsLong(localName: string, namespaceURI: string): number;
  readElementContentAsObject(): unknown;
  readElementContentAsObject(localName: string, namespaceURI: string): unknown;
  readElementContentAsObjectAsync(): Promise<unknown>;
  readElementContentAsString(): string;
  readElementContentAsString(localName: string, namespaceURI: string): string;
  readElementContentAsStringAsync(): Promise<string>;
  readElementString(): string;
  readElementString(localname: string, ns: string): string;
  readElementString(name: string): string;
  readEndElement(): VoidResult;
  readInnerXml(): string;
  readInnerXmlAsync(): Promise<string>;
  readOuterXml(): string;
  readOuterXmlAsync(): Promise<string>;
  readStartElement(): VoidResult;
  readStartElement(localname: string, ns: string): VoidResult;
  readStartElement(name: string): VoidResult;
  readString(): string;
  readSubtree(): System.Xml.XmlReader;
  readToDescendant(localName: string, namespaceURI: string): boolean;
  readToDescendant(name: string): boolean;
  readToFollowing(localName: string, namespaceURI: string): boolean;
  readToFollowing(name: string): boolean;
  readToNextSibling(localName: string, namespaceURI: string): boolean;
  readToNextSibling(name: string): boolean;
  readValueChunk(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): number;
  readValueChunkAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<number>;
  readonly attributeCount: number;
  readonly baseURI: string;
  readonly canReadBinaryContent: boolean;
  readonly canReadValueChunk: boolean;
  readonly canResolveEntity: boolean;
  readonly depth: number;
  readonly eof: boolean;
  readonly hasAttributes: boolean;
  readonly hasValue: boolean;
  readonly isDefault: boolean;
  readonly isEmptyElement: boolean;
  readonly localName: string;
  readonly name: string;
  readonly nameTable: System.Xml.XmlNameTable;
  readonly namespaceURI: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly prefix: string;
  readonly quoteChar: number;
  readonly readState: System.Xml.ReadState;
  readonly schemaInfo: System.Xml.Schema.IXmlSchemaInfo;
  readonly settings: System.Xml.XmlReaderSettings;
  readonly value: string;
  readonly valueType: System.Type;
  readonly xmlLang: string;
  readonly xmlSpace: System.Xml.XmlSpace;
  resolveEntity(): VoidResult;
  skip(): VoidResult;
  skipAsync(): Promise<void>;
}

declare global {
  namespace System.Xml {
    type XmlReader = import("./XmlReader").XmlReader;
  }
}

export interface XmlReaderHostType extends HostType<XmlReader, ReferenceTypeTrait> {
  isName(str: string): boolean;
  isNameToken(str: string): boolean;
  create(inputUri: string): System.Xml.XmlReader;
  create(inputUri: string, settings: System.Xml.XmlReaderSettings | null): System.Xml.XmlReader;
  create(
    inputUri: string,
    settings: System.Xml.XmlReaderSettings | null,
    inputContext: System.Xml.XmlParserContext | null
  ): System.Xml.XmlReader;
  create(input: System.IO.Stream): System.Xml.XmlReader;
  create(
    input: System.IO.Stream,
    settings: System.Xml.XmlReaderSettings | null
  ): System.Xml.XmlReader;
  create(
    input: System.IO.Stream,
    settings: System.Xml.XmlReaderSettings | null,
    baseUri: string | null
  ): System.Xml.XmlReader;
  create(
    input: System.IO.Stream,
    settings: System.Xml.XmlReaderSettings | null,
    inputContext: System.Xml.XmlParserContext | null
  ): System.Xml.XmlReader;
  create(input: System.IO.TextReader): System.Xml.XmlReader;
  create(
    input: System.IO.TextReader,
    settings: System.Xml.XmlReaderSettings | null
  ): System.Xml.XmlReader;
  create(
    input: System.IO.TextReader,
    settings: System.Xml.XmlReaderSettings | null,
    baseUri: string | null
  ): System.Xml.XmlReader;
  create(
    input: System.IO.TextReader,
    settings: System.Xml.XmlReaderSettings | null,
    inputContext: System.Xml.XmlParserContext | null
  ): System.Xml.XmlReader;
  create(
    reader: System.Xml.XmlReader,
    settings: System.Xml.XmlReaderSettings | null
  ): System.Xml.XmlReader;
}

export {};
