import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../Serialization/XmlSerializerNamespaces";

declare const xmlSchemaObjectBrand: unique symbol;
export interface XmlSchemaObject extends ClrHostValue {
  readonly [xmlSchemaObjectBrand]: true;
  lineNumber: number;
  linePosition: number;
  namespaces: System.Xml.Serialization.XmlSerializerNamespaces;
  parent: System.Xml.Schema.XmlSchemaObject;
  sourceUri: string;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaObject = import("./XmlSchemaObject").XmlSchemaObject;
  }
}

export interface XmlSchemaObjectHostType extends HostType<XmlSchemaObject, ReferenceTypeTrait> {}

export {};
