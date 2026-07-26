import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "./XmlSchemaAnnotated";
import "./XmlSchemaContentProcessing";

declare const xmlSchemaAnyAttributeBrand: unique symbol;
export interface XmlSchemaAnyAttribute extends Omit<
  System.Xml.Schema.XmlSchemaAnnotated,
  "namespace" | "processContents"
> {
  readonly [xmlSchemaAnyAttributeBrand]: true;
  namespace: string;
  processContents: System.Xml.Schema.XmlSchemaContentProcessing;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaAnyAttribute = import("./XmlSchemaAnyAttribute").XmlSchemaAnyAttribute;
  }
}

export interface XmlSchemaAnyAttributeHostType extends HostType<
  XmlSchemaAnyAttribute,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaAnyAttribute;
}

export {};
