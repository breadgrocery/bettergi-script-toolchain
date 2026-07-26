import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../XmlQualifiedName";
import "./XmlSchemaDerivationMethod";
import "./XmlSchemaForm";
import "./XmlSchemaObjectCollection";
import "./XmlSchemaParticle";
import "./XmlSchemaType";

declare const xmlSchemaElementBrand: unique symbol;
export interface XmlSchemaElement extends Omit<
  System.Xml.Schema.XmlSchemaParticle,
  | "block"
  | "blockResolved"
  | "constraints"
  | "defaultValue"
  | "elementSchemaType"
  | "elementType"
  | "final"
  | "finalResolved"
  | "fixedValue"
  | "form"
  | "isAbstract"
  | "isNillable"
  | "name"
  | "qualifiedName"
  | "refName"
  | "schemaType"
  | "schemaTypeName"
  | "substitutionGroup"
> {
  readonly [xmlSchemaElementBrand]: true;
  block: System.Xml.Schema.XmlSchemaDerivationMethod;
  defaultValue: string;
  final: System.Xml.Schema.XmlSchemaDerivationMethod;
  fixedValue: string;
  form: System.Xml.Schema.XmlSchemaForm;
  isAbstract: boolean;
  isNillable: boolean;
  name: string;
  readonly blockResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
  readonly constraints: System.Xml.Schema.XmlSchemaObjectCollection;
  readonly elementSchemaType: System.Xml.Schema.XmlSchemaType;
  readonly elementType: unknown;
  readonly finalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
  readonly qualifiedName: System.Xml.XmlQualifiedName;
  refName: System.Xml.XmlQualifiedName;
  schemaType: System.Xml.Schema.XmlSchemaType;
  schemaTypeName: System.Xml.XmlQualifiedName;
  substitutionGroup: System.Xml.XmlQualifiedName;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaElement = import("./XmlSchemaElement").XmlSchemaElement;
  }
}

export interface XmlSchemaElementHostType extends HostType<
  XmlSchemaElement,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaElement;
}

export {};
