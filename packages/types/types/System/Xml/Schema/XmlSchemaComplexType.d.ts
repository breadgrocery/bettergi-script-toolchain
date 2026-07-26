import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnyAttribute";
import "./XmlSchemaContentModel";
import "./XmlSchemaContentType";
import "./XmlSchemaDerivationMethod";
import "./XmlSchemaObjectCollection";
import "./XmlSchemaObjectTable";
import "./XmlSchemaParticle";
import "./XmlSchemaType";

declare const xmlSchemaComplexTypeBrand: unique symbol;
export interface XmlSchemaComplexType extends Omit<
  System.Xml.Schema.XmlSchemaType,
  | "anyAttribute"
  | "attributeUses"
  | "attributeWildcard"
  | "attributes"
  | "block"
  | "blockResolved"
  | "contentModel"
  | "contentType"
  | "contentTypeParticle"
  | "isAbstract"
  | "isMixed"
  | "particle"
> {
  readonly [xmlSchemaComplexTypeBrand]: true;
  anyAttribute: System.Xml.Schema.XmlSchemaAnyAttribute;
  block: System.Xml.Schema.XmlSchemaDerivationMethod;
  contentModel: System.Xml.Schema.XmlSchemaContentModel;
  isAbstract: boolean;
  isMixed: boolean;
  particle: System.Xml.Schema.XmlSchemaParticle;
  readonly attributeUses: System.Xml.Schema.XmlSchemaObjectTable;
  readonly attributeWildcard: System.Xml.Schema.XmlSchemaAnyAttribute;
  readonly attributes: System.Xml.Schema.XmlSchemaObjectCollection;
  readonly blockResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
  readonly contentType: System.Xml.Schema.XmlSchemaContentType;
  readonly contentTypeParticle: System.Xml.Schema.XmlSchemaParticle;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaComplexType = import("./XmlSchemaComplexType").XmlSchemaComplexType;
  }
}

export interface XmlSchemaComplexTypeHostType extends HostType<
  XmlSchemaComplexType,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaComplexType;
}

export {};
