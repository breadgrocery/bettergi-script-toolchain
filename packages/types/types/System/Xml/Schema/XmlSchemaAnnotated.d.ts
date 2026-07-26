import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../XmlAttribute";
import "./XmlSchemaAnnotation";
import "./XmlSchemaObject";

declare const xmlSchemaAnnotatedBrand: unique symbol;
export interface XmlSchemaAnnotated extends Omit<
  System.Xml.Schema.XmlSchemaObject,
  "annotation" | "id" | "unhandledAttributes"
> {
  readonly [xmlSchemaAnnotatedBrand]: true;
  annotation: System.Xml.Schema.XmlSchemaAnnotation;
  id: string;
  unhandledAttributes: HostArray<System.Xml.XmlAttribute>;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaAnnotated = import("./XmlSchemaAnnotated").XmlSchemaAnnotated;
  }
}

export interface XmlSchemaAnnotatedHostType extends HostType<
  XmlSchemaAnnotated,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaAnnotated;
}

export {};
