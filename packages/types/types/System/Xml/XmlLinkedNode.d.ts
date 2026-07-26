import type { HostType, ReferenceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Collections/IEnumerable";
import "../ICloneable";
import "./XPath/IXPathNavigable";
import "./XmlNode";

declare const xmlLinkedNodeBrand: unique symbol;
export interface XmlLinkedNode
  extends
    Omit<System.Xml.XmlNode, "nextSibling" | "previousSibling">,
    System.ICloneableInput,
    System.Collections.IEnumerableInput,
    System.Xml.XPath.IXPathNavigableInput {
  readonly [xmlLinkedNodeBrand]: true;
  readonly nextSibling: System.Xml.XmlNode;
  readonly previousSibling: System.Xml.XmlNode;
}

declare global {
  namespace System.Xml {
    type XmlLinkedNode = import("./XmlLinkedNode").XmlLinkedNode;
  }
}

export interface XmlLinkedNodeHostType extends HostType<XmlLinkedNode, ReferenceTypeTrait> {}

export {};
