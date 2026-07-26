import type { EventSource } from "../../../Microsoft/ClearScript/HostEvent";
import type {
  ClrHostValue,
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/ICollection";
import "../XmlNameTable";
import "../XmlReader";
import "../XmlResolver";
import "./ValidationEventHandler";
import "./XmlSchema";
import "./XmlSchemaCompilationSettings";
import "./XmlSchemaObjectTable";

declare const xmlSchemaSetBrand: unique symbol;
export interface XmlSchemaSet extends ClrHostValue {
  readonly [xmlSchemaSetBrand]: true;
  add(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema;
  add(schemas: System.Xml.Schema.XmlSchemaSet): VoidResult;
  add(
    targetNamespace: string | null,
    schemaDocument: System.Xml.XmlReader
  ): System.Xml.Schema.XmlSchema;
  add(targetNamespace: string | null, schemaUri: string): System.Xml.Schema.XmlSchema;
  compilationSettings: System.Xml.Schema.XmlSchemaCompilationSettings;
  compile(): VoidResult;
  contains(schema: System.Xml.Schema.XmlSchema): boolean;
  contains(targetNamespace: string | null): boolean;
  copyTo(
    schemas: HostArray<System.Xml.Schema.XmlSchema>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  get xmlResolver(): never;
  set xmlResolver(value: System.Xml.XmlResolver);
  readonly count: number;
  readonly globalAttributes: System.Xml.Schema.XmlSchemaObjectTable;
  readonly globalElements: System.Xml.Schema.XmlSchemaObjectTable;
  readonly globalTypes: System.Xml.Schema.XmlSchemaObjectTable;
  readonly isCompiled: boolean;
  readonly nameTable: System.Xml.XmlNameTable;
  readonly validationEventHandler: EventSource<
    (sender: unknown, e: System.Xml.Schema.ValidationEventArgs) => void
  >;
  remove(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema;
  removeRecursive(schemaToRemove: System.Xml.Schema.XmlSchema): boolean;
  reprocess(schema: System.Xml.Schema.XmlSchema): System.Xml.Schema.XmlSchema;
  schemas(): System.Collections.ICollection;
  schemas(targetNamespace: string | null): System.Collections.ICollection;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaSet = import("./XmlSchemaSet").XmlSchemaSet;
  }
}

export interface XmlSchemaSetHostType extends HostType<
  XmlSchemaSet,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaSet;
  new (nameTable: System.Xml.XmlNameTable): XmlSchemaSet;
}

export {};
