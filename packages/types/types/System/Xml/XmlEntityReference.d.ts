import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlLinkedNode";
import "./XmlNode";
import "./XmlNodeType";
import "./XmlWriter";

declare const xmlEntityReferenceBrand: unique symbol;
export interface XmlEntityReference
  extends
    Omit<
      System.Xml.XmlLinkedNode,
      | "baseURI"
      | "cloneNode"
      | "isReadOnly"
      | "localName"
      | "name"
      | "nodeType"
      | "value"
      | "writeContentTo"
      | "writeTo"
    >,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlEntityReferenceBrand]: true;
  cloneNode(deep: boolean): System.Xml.XmlNode;
  readonly baseURI: string;
  readonly isReadOnly: boolean;
  readonly localName: string;
  readonly name: string;
  readonly nodeType: System.Xml.XmlNodeType;
  value: string;
  writeContentTo(w: System.Xml.XmlWriter): VoidResult;
  writeTo(w: System.Xml.XmlWriter): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlEntityReference = import("./XmlEntityReference").XmlEntityReference;
  }
}

export interface XmlEntityReferenceHostType extends HostType<
  XmlEntityReference,
  ReferenceTypeTrait
> {}

export {};
