import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlLinkedNode";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlDeclarationBrand: unique symbol;
export interface XmlDeclaration
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "cloneNode"
      | "encoding"
      | "innerText"
      | "localName"
      | "name"
      | "nodeType"
      | "standalone"
      | "value"
      | "version"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlDeclarationBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  encoding: string;
  innerText: string;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly version: string;
  standalone: string;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlDeclaration = import("./XmlDeclaration").XmlDeclaration;
  }
}

export interface XmlDeclarationHostType extends HostType<XmlDeclaration, ReferenceTypeTrait> {}

export {};
