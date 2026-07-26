import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../V8SplitProxyHelpers";
import "../IXmlNamespaceResolver";
import "../XmlNameTable";
import "../XmlTokenizedType";
import "./XmlSchemaDatatypeVariety";
import "./XmlTypeCode";

declare const xmlSchemaDatatypeBrand: unique symbol;
export interface XmlSchemaDatatype extends ClrHostValue {
  readonly [xmlSchemaDatatypeBrand]: true;
  changeType(value: unknown, targetType: System.Type): unknown;
  changeType(
    value: unknown,
    targetType: System.Type,
    namespaceResolver: System.Xml.IXmlNamespaceResolver
  ): unknown;
  isDerivedFrom(datatype: System.Xml.Schema.XmlSchemaDatatype): boolean;
  parseValue(
    s: string,
    nameTable: System.Xml.XmlNameTable | null,
    nsmgr: System.Xml.IXmlNamespaceResolver | null
  ): unknown;
  readonly tokenizedType: System.Xml.XmlTokenizedType;
  readonly typeCode: System.Xml.Schema.XmlTypeCode;
  readonly valueType: System.Type;
  readonly variety: System.Xml.Schema.XmlSchemaDatatypeVariety;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaDatatype = import("./XmlSchemaDatatype").XmlSchemaDatatype;
  }
}

export interface XmlSchemaDatatypeHostType extends HostType<
  XmlSchemaDatatype,
  ReferenceTypeTrait
> {}

export {};
