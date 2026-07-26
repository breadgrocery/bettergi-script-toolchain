import type {
  ClrHostValue,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import "../Collections/IEnumerable";
import "../Collections/IEnumerator";
import "./XmlNode";

declare const xmlNamedNodeMapBrand: unique symbol;
export interface XmlNamedNodeMap extends ClrHostValue, System.Collections.IEnumerableInput {
  readonly [xmlNamedNodeMapBrand]: true;
  getEnumerator(): System.Collections.IEnumerator;
  getNamedItem(localName: string, namespaceURI: string | null): System.Xml.XmlNode;
  getNamedItem(name: string): System.Xml.XmlNode;
  item(index: number | StrongNumeric<Int32Host>): System.Xml.XmlNode;
  readonly count: number;
  removeNamedItem(localName: string, namespaceURI: string | null): System.Xml.XmlNode;
  removeNamedItem(name: string): System.Xml.XmlNode;
  setNamedItem(node: System.Xml.XmlNode | null): System.Xml.XmlNode;
}

declare global {
  namespace System.Xml {
    type XmlNamedNodeMap = import("./XmlNamedNodeMap").XmlNamedNodeMap;
  }
}

export interface XmlNamedNodeMapHostType extends HostType<XmlNamedNodeMap, ReferenceTypeTrait> {}

export {};
