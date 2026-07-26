import type {
  EnumInput,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../XmlQualifiedName";
import "./XmlSchemaAnnotated";
import "./XmlSchemaComplexType";
import "./XmlSchemaDatatype";
import "./XmlSchemaDerivationMethod";
import "./XmlSchemaSimpleType";
import "./XmlTypeCode";

declare const xmlSchemaTypeBrand: unique symbol;
export interface XmlSchemaType extends Omit<
  System.Xml.Schema.XmlSchemaAnnotated,
  | "baseSchemaType"
  | "baseXmlSchemaType"
  | "datatype"
  | "derivedBy"
  | "final"
  | "finalResolved"
  | "isMixed"
  | "name"
  | "qualifiedName"
  | "typeCode"
> {
  readonly [xmlSchemaTypeBrand]: true;
  final: System.Xml.Schema.XmlSchemaDerivationMethod;
  isMixed: boolean;
  name: string;
  readonly baseSchemaType: unknown;
  readonly baseXmlSchemaType: System.Xml.Schema.XmlSchemaType;
  readonly datatype: System.Xml.Schema.XmlSchemaDatatype;
  readonly derivedBy: System.Xml.Schema.XmlSchemaDerivationMethod;
  readonly finalResolved: System.Xml.Schema.XmlSchemaDerivationMethod;
  readonly qualifiedName: System.Xml.XmlQualifiedName;
  readonly typeCode: System.Xml.Schema.XmlTypeCode;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaType = import("./XmlSchemaType").XmlSchemaType;
  }
}

export interface XmlSchemaTypeHostType extends HostType<
  XmlSchemaType,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaType;
  getBuiltInSimpleType(
    qualifiedName: System.Xml.XmlQualifiedName
  ): System.Xml.Schema.XmlSchemaSimpleType;
  getBuiltInSimpleType(
    typeCode: EnumInput<System.Xml.Schema.XmlTypeCode>
  ): System.Xml.Schema.XmlSchemaSimpleType;
  getBuiltInComplexType(
    typeCode: EnumInput<System.Xml.Schema.XmlTypeCode>
  ): System.Xml.Schema.XmlSchemaComplexType;
  getBuiltInComplexType(
    qualifiedName: System.Xml.XmlQualifiedName
  ): System.Xml.Schema.XmlSchemaComplexType;
  isDerivedFrom(
    derivedType: System.Xml.Schema.XmlSchemaType | null,
    baseType: System.Xml.Schema.XmlSchemaType | null,
    except: EnumInput<System.Xml.Schema.XmlSchemaDerivationMethod>
  ): boolean;
}

export {};
