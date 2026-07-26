import type {
  HostArray,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/ICollection";
import "../Collections/IEnumerable";
import "./XmlAttribute";
import "./XmlNamedNodeMap";
import "./XmlNode";

declare const xmlAttributeCollectionBrand: unique symbol;
export interface XmlAttributeCollection
  extends
    Omit<
      System.Xml.XmlNamedNodeMap,
      | "append"
      | "copyTo"
      | "insertAfter"
      | "insertBefore"
      | "item"
      | "prepend"
      | "remove"
      | "removeAll"
      | "removeAt"
      | "setNamedItem"
    >,
    System.Collections.IEnumerableInput,
    System.Collections.ICollectionInput {
  readonly [xmlAttributeCollectionBrand]: true;
  append(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute;
  copyTo(
    array: HostArray<System.Xml.XmlAttribute>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  insertAfter(
    newNode: System.Xml.XmlAttribute,
    refNode: System.Xml.XmlAttribute | null
  ): System.Xml.XmlAttribute;
  insertBefore(
    newNode: System.Xml.XmlAttribute,
    refNode: System.Xml.XmlAttribute | null
  ): System.Xml.XmlAttribute;
  item: {
    (i: number | StrongNumeric<Int32Host>): System.Xml.XmlAttribute;
    get(i: number | StrongNumeric<Int32Host>): System.Xml.XmlAttribute;
    (name: string): System.Xml.XmlAttribute;
    get(name: string): System.Xml.XmlAttribute;
    (localName: string, namespaceURI: string): System.Xml.XmlAttribute;
    get(localName: string, namespaceURI: string): System.Xml.XmlAttribute;
  };
  prepend(node: System.Xml.XmlAttribute): System.Xml.XmlAttribute;
  remove(node: System.Xml.XmlAttribute | null): System.Xml.XmlAttribute;
  removeAll(): VoidResult;
  removeAt(i: number | StrongNumeric<Int32Host>): System.Xml.XmlAttribute;
  setNamedItem(node: System.Xml.XmlNode | null): System.Xml.XmlNode;
}

declare global {
  namespace System.Xml {
    type XmlAttributeCollection = import("./XmlAttributeCollection").XmlAttributeCollection;
  }
}

export interface XmlAttributeCollectionHostType extends HostType<
  XmlAttributeCollection,
  ReferenceTypeTrait
> {}

export {};
