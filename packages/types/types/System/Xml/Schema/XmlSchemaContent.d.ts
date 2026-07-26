import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnnotated";

declare const xmlSchemaContentBrand: unique symbol;
export interface XmlSchemaContent extends System.Xml.Schema.XmlSchemaAnnotated {
  readonly [xmlSchemaContentBrand]: true;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaContent = import("./XmlSchemaContent").XmlSchemaContent;
  }
}

export interface XmlSchemaContentHostType extends HostType<XmlSchemaContent, ReferenceTypeTrait> {}

export {};
