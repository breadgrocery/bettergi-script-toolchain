import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../XmlAttribute";
import "./XmlSchemaObject";
import "./XmlSchemaObjectCollection";

declare const xmlSchemaAnnotationBrand: unique symbol;
export interface XmlSchemaAnnotation extends Omit<
  System.Xml.Schema.XmlSchemaObject,
  "id" | "items" | "unhandledAttributes"
> {
  readonly [xmlSchemaAnnotationBrand]: true;
  id: string;
  readonly items: System.Xml.Schema.XmlSchemaObjectCollection;
  unhandledAttributes: HostArray<System.Xml.XmlAttribute>;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaAnnotation = import("./XmlSchemaAnnotation").XmlSchemaAnnotation;
  }
}

export interface XmlSchemaAnnotationHostType extends HostType<
  XmlSchemaAnnotation,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaAnnotation;
}

export {};
