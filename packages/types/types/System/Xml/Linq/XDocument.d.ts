import type {
  EnumInput,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IO/Stream";
import "../../IO/TextReader";
import "../../IO/TextWriter";
import "../../Threading/CancellationToken";
import "../IXmlLineInfo";
import "../XmlNodeType";
import "../XmlReader";
import "../XmlWriter";
import "./LoadOptions";
import "./SaveOptions";
import "./XContainer";
import "./XDeclaration";
import "./XDocumentType";
import "./XElement";

declare const xDocumentBrand: unique symbol;
export interface XDocument
  extends
    Omit<
      System.Xml.Linq.XContainer,
      | "declaration"
      | "documentType"
      | "nodeType"
      | "root"
      | "save"
      | "saveAsync"
      | "writeTo"
      | "writeToAsync"
    >,
    System.Xml.IXmlLineInfoInput {
  readonly [xDocumentBrand]: true;
  declaration: System.Xml.Linq.XDeclaration;
  readonly documentType: System.Xml.Linq.XDocumentType;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly root: System.Xml.Linq.XElement;
  save(fileName: string): VoidResult;
  save(fileName: string, options: EnumInput<System.Xml.Linq.SaveOptions>): VoidResult;
  save(stream: System.IO.Stream): VoidResult;
  save(stream: System.IO.Stream, options: EnumInput<System.Xml.Linq.SaveOptions>): VoidResult;
  save(textWriter: System.IO.TextWriter): VoidResult;
  save(
    textWriter: System.IO.TextWriter,
    options: EnumInput<System.Xml.Linq.SaveOptions>
  ): VoidResult;
  save(writer: System.Xml.XmlWriter): VoidResult;
  saveAsync(
    stream: System.IO.Stream,
    options: EnumInput<System.Xml.Linq.SaveOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  saveAsync(
    textWriter: System.IO.TextWriter,
    options: EnumInput<System.Xml.Linq.SaveOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  saveAsync(
    writer: System.Xml.XmlWriter,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
  writeTo(writer: System.Xml.XmlWriter): VoidResult;
  writeToAsync(
    writer: System.Xml.XmlWriter,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

declare global {
  namespace System.Xml.Linq {
    type XDocument = import("./XDocument").XDocument;
  }
}

export interface XDocumentHostType extends HostType<
  XDocument,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XDocument;
  new (content: HostArray<unknown>): XDocument;
  new (...content: unknown[]): XDocument;
  new (declaration: System.Xml.Linq.XDeclaration | null, content: HostArray<unknown>): XDocument;
  new (declaration: System.Xml.Linq.XDeclaration | null, ...content: unknown[]): XDocument;
  new (other: System.Xml.Linq.XDocument): XDocument;
  load(uri: string): System.Xml.Linq.XDocument;
  load(uri: string, options: EnumInput<System.Xml.Linq.LoadOptions>): System.Xml.Linq.XDocument;
  load(stream: System.IO.Stream): System.Xml.Linq.XDocument;
  load(
    stream: System.IO.Stream,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XDocument;
  loadAsync(
    stream: System.IO.Stream,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XDocument>;
  load(textReader: System.IO.TextReader): System.Xml.Linq.XDocument;
  load(
    textReader: System.IO.TextReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XDocument;
  loadAsync(
    textReader: System.IO.TextReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XDocument>;
  load(reader: System.Xml.XmlReader): System.Xml.Linq.XDocument;
  load(
    reader: System.Xml.XmlReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XDocument;
  loadAsync(
    reader: System.Xml.XmlReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XDocument>;
  parse(text: string): System.Xml.Linq.XDocument;
  parse(text: string, options: EnumInput<System.Xml.Linq.LoadOptions>): System.Xml.Linq.XDocument;
}

export {};
