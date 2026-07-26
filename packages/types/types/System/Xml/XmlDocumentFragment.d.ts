import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlDocument";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlDocumentFragmentBrand: unique symbol;
export interface XmlDocumentFragment
  extends
    Omit<
      System.Xml.XmlNode,
      | "cloneNode"
      | "innerXml"
      | "localName"
      | "name"
      | "nodeType"
      | "ownerDocument"
      | "parentNode"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlDocumentFragmentBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  innerXml: string;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly ownerDocument: System.Xml.XmlDocument;
  readonly parentNode: System.Xml.XmlNode;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlDocumentFragment = import("./XmlDocumentFragment").XmlDocumentFragment;
  }
}

export interface XmlDocumentFragmentHostType extends HostType<
  XmlDocumentFragment,
  ReferenceTypeTrait
> {}

export {};
