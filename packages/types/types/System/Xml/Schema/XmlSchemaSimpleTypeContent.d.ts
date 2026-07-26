import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnnotated";

declare const xmlSchemaSimpleTypeContentBrand: unique symbol;
export interface XmlSchemaSimpleTypeContent extends System.Xml.Schema.XmlSchemaAnnotated {
  readonly [xmlSchemaSimpleTypeContentBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaSimpleTypeContent =
      import("./XmlSchemaSimpleTypeContent").XmlSchemaSimpleTypeContent;
  }
}

export interface XmlSchemaSimpleTypeContentHostType extends HostType<
  XmlSchemaSimpleTypeContent,
  ReferenceTypeTrait
> {}

export {};
