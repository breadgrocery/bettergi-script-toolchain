import type {
  ByteHost,
  CharHost,
  ClrHostValue,
  DecimalHost,
  DoubleHost,
  HostArray,
  HostType,
  Int32Host,
  Int64Host,
  ReferenceTypeTrait,
  SingleHost,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../DateTime";
import "../DateTimeOffset";
import "../IAsyncDisposable";
import "../IDisposable";
import "../IO/Stream";
import "../IO/TextWriter";
import "../Text/StringBuilder";
import "../Threading/Tasks/ValueTask";
import "./WriteState";
import "./XPath/XPathNavigator";
import "./XmlReader";
import "./XmlSpace";
import "./XmlWriterSettings";

declare const xmlWriterBrand: unique symbol;
export interface XmlWriter
  extends ClrHostValue, System.IDisposableInput, System.IAsyncDisposableInput {
  readonly [xmlWriterBrand]: true;
  close(): VoidResult;
  dispose(): VoidResult;
  disposeAsync(): System.Threading.Tasks.ValueTask;
  flush(): VoidResult;
  flushAsync(): Promise<void>;
  lookupPrefix(ns: string): string;
  readonly settings: System.Xml.XmlWriterSettings;
  readonly writeState: System.Xml.WriteState;
  readonly xmlLang: string;
  readonly xmlSpace: System.Xml.XmlSpace;
  writeAttributeString(localName: string, ns: string | null, value: string | null): VoidResult;
  writeAttributeString(localName: string, value: string | null): VoidResult;
  writeAttributeString(
    prefix: string | null,
    localName: string,
    ns: string | null,
    value: string | null
  ): VoidResult;
  writeAttributeStringAsync(
    prefix: string | null,
    localName: string,
    ns: string | null,
    value: string | null
  ): Promise<void>;
  writeAttributes(reader: System.Xml.XmlReader, defattr: boolean): VoidResult;
  writeAttributesAsync(reader: System.Xml.XmlReader, defattr: boolean): Promise<void>;
  writeBase64(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeBase64Async(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeBinHex(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeBinHexAsync(
    buffer: HostArray<number | StrongNumeric<ByteHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeCData(text: string | null): VoidResult;
  writeCDataAsync(text: string | null): Promise<void>;
  writeCharEntity(ch: number | StrongNumeric<CharHost>): VoidResult;
  writeCharEntityAsync(ch: number | StrongNumeric<CharHost>): Promise<void>;
  writeChars(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeCharsAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeComment(text: string | null): VoidResult;
  writeCommentAsync(text: string | null): Promise<void>;
  writeDocType(
    name: string,
    pubid: string | null,
    sysid: string | null,
    subset: string | null
  ): VoidResult;
  writeDocTypeAsync(
    name: string,
    pubid: string | null,
    sysid: string | null,
    subset: string | null
  ): Promise<void>;
  writeElementString(localName: string, ns: string | null, value: string | null): VoidResult;
  writeElementString(localName: string, value: string | null): VoidResult;
  writeElementString(
    prefix: string | null,
    localName: string,
    ns: string | null,
    value: string | null
  ): VoidResult;
  writeElementStringAsync(
    prefix: string | null,
    localName: string,
    ns: string | null,
    value: string
  ): Promise<void>;
  writeEndAttribute(): VoidResult;
  writeEndDocument(): VoidResult;
  writeEndDocumentAsync(): Promise<void>;
  writeEndElement(): VoidResult;
  writeEndElementAsync(): Promise<void>;
  writeEntityRef(name: string): VoidResult;
  writeEntityRefAsync(name: string): Promise<void>;
  writeFullEndElement(): VoidResult;
  writeFullEndElementAsync(): Promise<void>;
  writeName(name: string): VoidResult;
  writeNameAsync(name: string): Promise<void>;
  writeNmToken(name: string): VoidResult;
  writeNmTokenAsync(name: string): Promise<void>;
  writeNode(navigator: System.Xml.XPath.XPathNavigator, defattr: boolean): VoidResult;
  writeNode(reader: System.Xml.XmlReader, defattr: boolean): VoidResult;
  writeNodeAsync(navigator: System.Xml.XPath.XPathNavigator, defattr: boolean): Promise<void>;
  writeNodeAsync(reader: System.Xml.XmlReader, defattr: boolean): Promise<void>;
  writeProcessingInstruction(name: string, text: string | null): VoidResult;
  writeProcessingInstructionAsync(name: string, text: string | null): Promise<void>;
  writeQualifiedName(localName: string, ns: string | null): VoidResult;
  writeQualifiedNameAsync(localName: string, ns: string | null): Promise<void>;
  writeRaw(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): VoidResult;
  writeRaw(data: string): VoidResult;
  writeRawAsync(
    buffer: HostArray<number | StrongNumeric<CharHost>>,
    index: number | StrongNumeric<Int32Host>,
    count: number | StrongNumeric<Int32Host>
  ): Promise<void>;
  writeRawAsync(data: string): Promise<void>;
  writeStartAttribute(localName: string): VoidResult;
  writeStartAttribute(localName: string, ns: string | null): VoidResult;
  writeStartAttribute(prefix: string | null, localName: string, ns: string | null): VoidResult;
  writeStartDocument(): VoidResult;
  writeStartDocument(standalone: boolean): VoidResult;
  writeStartDocumentAsync(): Promise<void>;
  writeStartDocumentAsync(standalone: boolean): Promise<void>;
  writeStartElement(localName: string): VoidResult;
  writeStartElement(localName: string, ns: string | null): VoidResult;
  writeStartElement(prefix: string | null, localName: string, ns: string | null): VoidResult;
  writeStartElementAsync(
    prefix: string | null,
    localName: string,
    ns: string | null
  ): Promise<void>;
  writeString(text: string | null): VoidResult;
  writeStringAsync(text: string | null): Promise<void>;
  writeSurrogateCharEntity(
    lowChar: number | StrongNumeric<CharHost>,
    highChar: number | StrongNumeric<CharHost>
  ): VoidResult;
  writeSurrogateCharEntityAsync(
    lowChar: number | StrongNumeric<CharHost>,
    highChar: number | StrongNumeric<CharHost>
  ): Promise<void>;
  writeValue(value: System.DateTime): VoidResult;
  writeValue(value: System.DateTimeOffset): VoidResult;
  writeValue(value: boolean): VoidResult;
  writeValue(value: number | StrongNumeric<DecimalHost>): VoidResult;
  writeValue(value: number | StrongNumeric<DoubleHost>): VoidResult;
  writeValue(value: number | StrongNumeric<Int32Host>): VoidResult;
  writeValue(value: number | StrongNumeric<Int64Host>): VoidResult;
  writeValue(value: number | StrongNumeric<SingleHost>): VoidResult;
  writeValue(value: string | null): VoidResult;
  writeValue(value: unknown): VoidResult;
  writeWhitespace(ws: string | null): VoidResult;
  writeWhitespaceAsync(ws: string | null): Promise<void>;
}

declare global {
  namespace System.Xml {
    type XmlWriter = import("./XmlWriter").XmlWriter;
  }
}

export interface XmlWriterHostType extends HostType<XmlWriter, ReferenceTypeTrait> {
  create(outputFileName: string): System.Xml.XmlWriter;
  create(
    outputFileName: string,
    settings: System.Xml.XmlWriterSettings | null
  ): System.Xml.XmlWriter;
  create(output: System.IO.Stream): System.Xml.XmlWriter;
  create(
    output: System.IO.Stream,
    settings: System.Xml.XmlWriterSettings | null
  ): System.Xml.XmlWriter;
  create(output: System.IO.TextWriter): System.Xml.XmlWriter;
  create(
    output: System.IO.TextWriter,
    settings: System.Xml.XmlWriterSettings | null
  ): System.Xml.XmlWriter;
  create(output: System.Text.StringBuilder): System.Xml.XmlWriter;
  create(
    output: System.Text.StringBuilder,
    settings: System.Xml.XmlWriterSettings | null
  ): System.Xml.XmlWriter;
  create(output: System.Xml.XmlWriter): System.Xml.XmlWriter;
  create(
    output: System.Xml.XmlWriter,
    settings: System.Xml.XmlWriterSettings | null
  ): System.Xml.XmlWriter;
}

export {};
