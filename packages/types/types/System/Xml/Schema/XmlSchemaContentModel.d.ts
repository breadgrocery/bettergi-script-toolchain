import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnnotated";
import "./XmlSchemaContent";

declare const xmlSchemaContentModelBrand: unique symbol;
export interface XmlSchemaContentModel extends Omit<
  System.Xml.Schema.XmlSchemaAnnotated,
  "content"
> {
  readonly [xmlSchemaContentModelBrand]: true;
  content: System.Xml.Schema.XmlSchemaContent;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaContentModel = import("./XmlSchemaContentModel").XmlSchemaContentModel;
  }
}

export interface XmlSchemaContentModelHostType extends HostType<
  XmlSchemaContentModel,
  ReferenceTypeTrait
> {}

export {};
