import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaSimpleTypeContent";
import "./XmlSchemaType";

declare const xmlSchemaSimpleTypeBrand: unique symbol;
export interface XmlSchemaSimpleType extends Omit<System.Xml.Schema.XmlSchemaType, "content"> {
  readonly [xmlSchemaSimpleTypeBrand]: true;
  content: System.Xml.Schema.XmlSchemaSimpleTypeContent;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaSimpleType = import("./XmlSchemaSimpleType").XmlSchemaSimpleType;
  }
}

export interface XmlSchemaSimpleTypeHostType extends HostType<
  XmlSchemaSimpleType,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaSimpleType;
}

export {};
