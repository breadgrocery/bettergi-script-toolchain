import type {
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IO/Stream";
import "../../IO/TextReader";
import "../../IO/TextWriter";
import "../XmlAttribute";
import "../XmlNamespaceManager";
import "../XmlReader";
import "../XmlResolver";
import "../XmlWriter";
import "./ValidationEventHandler";
import "./XmlSchemaDerivationMethod";
import "./XmlSchemaForm";
import "./XmlSchemaObject";
import "./XmlSchemaObjectCollection";
import "./XmlSchemaObjectTable";

declare const xmlSchemaBrand: unique symbol;
export interface XmlSchema extends Omit<
  System.Xml.Schema.XmlSchemaObject,
  | "attributeFormDefault"
  | "attributeGroups"
  | "attributes"
  | "blockDefault"
  | "compile"
  | "elementFormDefault"
  | "elements"
  | "finalDefault"
  | "groups"
  | "id"
  | "includes"
  | "isCompiled"
  | "items"
  | "notations"
  | "schemaTypes"
  | "targetNamespace"
  | "unhandledAttributes"
  | "version"
  | "write"
> {
  readonly [xmlSchemaBrand]: true;
  attributeFormDefault: System.Xml.Schema.XmlSchemaForm;
  blockDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
  compile(validationEventHandler: System.Xml.Schema.ValidationEventHandler | null): VoidResult;
  compile(
    validationEventHandler: System.Xml.Schema.ValidationEventHandler | null,
    resolver: System.Xml.XmlResolver | null
  ): VoidResult;
  elementFormDefault: System.Xml.Schema.XmlSchemaForm;
  finalDefault: System.Xml.Schema.XmlSchemaDerivationMethod;
  id: string;
  readonly attributeGroups: System.Xml.Schema.XmlSchemaObjectTable;
  readonly attributes: System.Xml.Schema.XmlSchemaObjectTable;
  readonly elements: System.Xml.Schema.XmlSchemaObjectTable;
  readonly groups: System.Xml.Schema.XmlSchemaObjectTable;
  readonly includes: System.Xml.Schema.XmlSchemaObjectCollection;
  readonly isCompiled: boolean;
  readonly items: System.Xml.Schema.XmlSchemaObjectCollection;
  readonly notations: System.Xml.Schema.XmlSchemaObjectTable;
  readonly schemaTypes: System.Xml.Schema.XmlSchemaObjectTable;
  targetNamespace: string;
  unhandledAttributes: HostArray<System.Xml.XmlAttribute>;
  version: string;
  write(stream: System.IO.Stream): VoidResult;
  write(
    stream: System.IO.Stream,
    namespaceManager: System.Xml.XmlNamespaceManager | null
  ): VoidResult;
  write(writer: System.IO.TextWriter): VoidResult;
  write(
    writer: System.IO.TextWriter,
    namespaceManager: System.Xml.XmlNamespaceManager | null
  ): VoidResult;
  write(writer: System.Xml.XmlWriter): VoidResult;
  write(
    writer: System.Xml.XmlWriter,
    namespaceManager: System.Xml.XmlNamespaceManager | null
  ): VoidResult;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchema = import("./XmlSchema").XmlSchema;
  }
}

export interface XmlSchemaHostType extends HostType<
  XmlSchema,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchema;
  readonly namespace: string;
  readonly instanceNamespace: string;
  read(
    reader: System.IO.TextReader,
    validationEventHandler: System.Xml.Schema.ValidationEventHandler | null
  ): System.Xml.Schema.XmlSchema;
  read(
    stream: System.IO.Stream,
    validationEventHandler: System.Xml.Schema.ValidationEventHandler | null
  ): System.Xml.Schema.XmlSchema;
  read(
    reader: System.Xml.XmlReader,
    validationEventHandler: System.Xml.Schema.ValidationEventHandler | null
  ): System.Xml.Schema.XmlSchema;
}

export {};
