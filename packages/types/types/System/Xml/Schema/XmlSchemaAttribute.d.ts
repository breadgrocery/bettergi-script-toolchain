import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../XmlQualifiedName";
import "./XmlSchemaAnnotated";
import "./XmlSchemaForm";
import "./XmlSchemaSimpleType";
import "./XmlSchemaUse";

declare const xmlSchemaAttributeBrand: unique symbol;
export interface XmlSchemaAttribute extends Omit<
  System.Xml.Schema.XmlSchemaAnnotated,
  | "attributeSchemaType"
  | "attributeType"
  | "defaultValue"
  | "fixedValue"
  | "form"
  | "name"
  | "qualifiedName"
  | "refName"
  | "schemaType"
  | "schemaTypeName"
  | "use"
> {
  readonly [xmlSchemaAttributeBrand]: true;
  defaultValue: string;
  fixedValue: string;
  form: System.Xml.Schema.XmlSchemaForm;
  name: string;
  readonly attributeSchemaType: System.Xml.Schema.XmlSchemaSimpleType;
  readonly attributeType: unknown;
  readonly qualifiedName: System.Xml.XmlQualifiedName;
  refName: System.Xml.XmlQualifiedName;
  schemaType: System.Xml.Schema.XmlSchemaSimpleType;
  schemaTypeName: System.Xml.XmlQualifiedName;
  use: System.Xml.Schema.XmlSchemaUse;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaAttribute = import("./XmlSchemaAttribute").XmlSchemaAttribute;
  }
}

export interface XmlSchemaAttributeHostType extends HostType<
  XmlSchemaAttribute,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaAttribute;
}

export {};
