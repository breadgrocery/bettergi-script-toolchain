import type {
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlCharacterData";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlTextBrand: unique symbol;
export interface XmlText
  extends
    Omit<
      System.Xml.XmlCharacterData,
      | "cloneNode"
      | "localName"
      | "name"
      | "nodeType"
      | "parentNode"
      | "previousText"
      | "splitText"
      | "value"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlTextBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly parentNode: System.Xml.XmlNode;
  readonly previousText: System.Xml.XmlNode;
  splitText(offset: number | StrongNumeric<Int32Host>): System.Xml.XmlText;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlText = import("./XmlText").XmlText;
  }
}

export interface XmlTextHostType extends HostType<XmlText, ReferenceTypeTrait> {}

export {};
