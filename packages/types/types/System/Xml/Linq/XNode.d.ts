import type {
  EnumInput,
  HostArray,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../../Threading/CancellationToken";
import "../IXmlLineInfo";
import "../XmlReader";
import "../XmlWriter";
import "./ReaderOptions";
import "./SaveOptions";
import "./XElement";
import "./XName";
import "./XNodeDocumentOrderComparer";
import "./XNodeEqualityComparer";
import "./XObject";

declare const xNodeBrand: unique symbol;
export interface XNode
  extends
    Omit<
      System.Xml.Linq.XObject,
      | "addAfterSelf"
      | "addBeforeSelf"
      | "ancestors"
      | "createReader"
      | "elementsAfterSelf"
      | "elementsBeforeSelf"
      | "isAfter"
      | "isBefore"
      | "nextNode"
      | "nodesAfterSelf"
      | "nodesBeforeSelf"
      | "previousNode"
      | "remove"
      | "replaceWith"
      | "toString"
      | "writeTo"
      | "writeToAsync"
    >,
    System.Xml.IXmlLineInfoInput {
  readonly [xNodeBrand]: true;
  addAfterSelf(...content: unknown[]): VoidResult;
  addAfterSelf(content: HostArray<unknown>): VoidResult;
  addAfterSelf(content: unknown | null): VoidResult;
  addBeforeSelf(...content: unknown[]): VoidResult;
  addBeforeSelf(content: HostArray<unknown>): VoidResult;
  addBeforeSelf(content: unknown | null): VoidResult;
  ancestors(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  ancestors(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  createReader(): System.Xml.XmlReader;
  createReader(readerOptions: EnumInput<System.Xml.Linq.ReaderOptions>): System.Xml.XmlReader;
  elementsAfterSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  elementsAfterSelf(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  elementsBeforeSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  elementsBeforeSelf(
    name: System.Xml.Linq.XName | null
  ): System.Collections.Generic.IEnumerable<System.Xml.Linq.XElement>;
  isAfter(node: System.Xml.Linq.XNode | null): boolean;
  isBefore(node: System.Xml.Linq.XNode | null): boolean;
  nodesAfterSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XNode>;
  nodesBeforeSelf(): System.Collections.Generic.IEnumerable<System.Xml.Linq.XNode>;
  readonly nextNode: System.Xml.Linq.XNode;
  readonly previousNode: System.Xml.Linq.XNode;
  remove(): VoidResult;
  replaceWith(...content: unknown[]): VoidResult;
  replaceWith(content: HostArray<unknown>): VoidResult;
  replaceWith(content: unknown | null): VoidResult;
  toString(): string;
  toString(options: EnumInput<System.Xml.Linq.SaveOptions>): string;
  writeTo(writer: System.Xml.XmlWriter): VoidResult;
  writeToAsync(
    writer: System.Xml.XmlWriter,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

declare global {
  namespace System.Xml.Linq {
    type XNode = import("./XNode").XNode;
  }
}

export interface XNodeHostType extends HostType<XNode, ReferenceTypeTrait> {
  readonly documentOrderComparer: System.Xml.Linq.XNodeDocumentOrderComparer;
  readonly equalityComparer: System.Xml.Linq.XNodeEqualityComparer;
  compareDocumentOrder(n1: System.Xml.Linq.XNode | null, n2: System.Xml.Linq.XNode | null): number;
  readFrom(reader: System.Xml.XmlReader): System.Xml.Linq.XNode;
  readFromAsync(
    reader: System.Xml.XmlReader,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<System.Xml.Linq.XNode>;
  deepEquals(n1: System.Xml.Linq.XNode | null, n2: System.Xml.Linq.XNode | null): boolean;
}

export {};
