import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlCharacterData";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlSignificantWhitespaceBrand: unique symbol;
export interface XmlSignificantWhitespace
  extends
    Omit<
      System.Xml.XmlCharacterData,
      | "cloneNode"
      | "localName"
      | "name"
      | "nodeType"
      | "parentNode"
      | "previousText"
      | "value"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlSignificantWhitespaceBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly parentNode: System.Xml.XmlNode;
  readonly previousText: System.Xml.XmlNode;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlSignificantWhitespace = import("./XmlSignificantWhitespace").XmlSignificantWhitespace;
  }
}

export interface XmlSignificantWhitespaceHostType extends HostType<
  XmlSignificantWhitespace,
  ReferenceTypeTrait
> {}

export {};
