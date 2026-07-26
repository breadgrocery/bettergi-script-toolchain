import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../IO/Stream";
import "../../IO/TextReader";
import "../../IO/TextWriter";
import "../../Threading/CancellationToken";
import "../IXmlLineInfo";
import "../Serialization/IXmlSerializable";
import "../XmlNodeType";
import "../XmlReader";
import "../XmlWriter";
import "./LoadOptions";
import "./SaveOptions";
import "./XAttribute";
import "./XContainer";
import "./XName";
import "./XNamespace";
import "./XNode";
import "./XStreamingElement";

declare const xElementBrand: unique symbol;
export interface XElement
  extends
    Omit<
      System.Xml.Linq.XContainer,
      | "ancestorsAndSelf"
      | "attribute"
      | "attributes"
      | "descendantNodesAndSelf"
      | "descendantsAndSelf"
      | "firstAttribute"
      | "getDefaultNamespace"
      | "getNamespaceOfPrefix"
      | "getPrefixOfNamespace"
      | "hasAttributes"
      | "hasElements"
      | "isEmpty"
      | "lastAttribute"
      | "name"
      | "nodeType"
      | "removeAll"
      | "removeAttributes"
      | "replaceAll"
      | "replaceAttributes"
      | "save"
      | "saveAsync"
      | "setAttributeValue"
      | "setElementValue"
      | "setValue"
      | "value"
      | "writeTo"
      | "writeToAsync"
    >,
    System.Xml.IXmlLineInfoInput,
    System.Xml.Serialization.IXmlSerializableInput {
  readonly [xElementBrand]: true;
  ancestorsAndSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  ancestorsAndSelf(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  attribute(name: System.Xml.Linq.XName): System.Xml.Linq.XAttribute;
  attributes(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XAttribute>;
  attributes(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XAttribute>;
  descendantNodesAndSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XNode>;
  descendantsAndSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  descendantsAndSelf(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  getDefaultNamespace(): System.Xml.Linq.XNamespace;
  getNamespaceOfPrefix(prefix: string): System.Xml.Linq.XNamespace;
  getPrefixOfNamespace(ns: System.Xml.Linq.XNamespace): string;
  name: System.Xml.Linq.XName;
  readonly firstAttribute: System.Xml.Linq.XAttribute;
  readonly hasAttributes: boolean;
  readonly hasElements: boolean;
  readonly isEmpty: boolean;
  readonly lastAttribute: System.Xml.Linq.XAttribute;
  readonly nodeType: System.Xml.XmlNodeType;
  removeAll(): VoidResult;
  removeAttributes(): VoidResult;
  replaceAll(...content: unknown[]): VoidResult;
  replaceAll(content: HostArray<unknown>): VoidResult;
  replaceAll(content: unknown | null): VoidResult;
  replaceAttributes(...content: unknown[]): VoidResult;
  replaceAttributes(content: HostArray<unknown>): VoidResult;
  replaceAttributes(content: unknown | null): VoidResult;
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
  setAttributeValue(name: System.Xml.Linq.XName, value: unknown | null): VoidResult;
  setElementValue(name: System.Xml.Linq.XName, value: unknown | null): VoidResult;
  setValue(value: unknown): VoidResult;
  value: string;
  writeTo(writer: System.Xml.XmlWriter): VoidResult;
  writeToAsync(
    writer: System.Xml.XmlWriter,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

declare global {
  namespace System.Xml.Linq {
    type XElement = import("./XElement").XElement;
  }
}

export interface XElementHostType extends HostType<XElement, ReferenceTypeTrait> {
  new (name: System.Xml.Linq.XName): XElement;
  new (name: System.Xml.Linq.XName, content: unknown | null): XElement;
  new (name: System.Xml.Linq.XName, content: HostArray<unknown>): XElement;
  new (name: System.Xml.Linq.XName, ...content: unknown[]): XElement;
  new (other: System.Xml.Linq.XElement): XElement;
  new (other: System.Xml.Linq.XStreamingElement): XElement;
  readonly emptySequence: System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  load(uri: string): System.Xml.Linq.XElement;
  load(uri: string, options: EnumInput<System.Xml.Linq.LoadOptions>): System.Xml.Linq.XElement;
  load(stream: System.IO.Stream): System.Xml.Linq.XElement;
  load(
    stream: System.IO.Stream,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XElement;
  loadAsync(
    stream: System.IO.Stream,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XElement>;
  load(textReader: System.IO.TextReader): System.Xml.Linq.XElement;
  load(
    textReader: System.IO.TextReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XElement;
  loadAsync(
    textReader: System.IO.TextReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XElement>;
  load(reader: System.Xml.XmlReader): System.Xml.Linq.XElement;
  load(
    reader: System.Xml.XmlReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>
  ): System.Xml.Linq.XElement;
  loadAsync(
    reader: System.Xml.XmlReader,
    options: EnumInput<System.Xml.Linq.LoadOptions>,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XElement>;
  parse(text: string): System.Xml.Linq.XElement;
  parse(text: string, options: EnumInput<System.Xml.Linq.LoadOptions>): System.Xml.Linq.XElement;
}

export {};
