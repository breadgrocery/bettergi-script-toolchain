import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlCharacterData";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlCDataSectionBrand: unique symbol;
export interface XmlCDataSection
  extends
    Omit<
      System.Xml.XmlCharacterData,
      | "cloneNode"
      | "localName"
      | "name"
      | "nodeType"
      | "parentNode"
      | "previousText"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlCDataSectionBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly parentNode: System.Xml.XmlNode;
  readonly previousText: System.Xml.XmlNode;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlCDataSection = import("./XmlCDataSection").XmlCDataSection;
  }
}

export interface XmlCDataSectionHostType extends HostType<XmlCDataSection, ReferenceTypeTrait> {}

export {};
