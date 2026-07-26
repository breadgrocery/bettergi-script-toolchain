import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Collections/ICollection";
import "../../Collections/IDictionaryEnumerator";
import "../XmlQualifiedName";
import "./XmlSchemaObject";

declare const xmlSchemaObjectTableBrand: unique symbol;
export interface XmlSchemaObjectTable extends ClrHostValue {
  readonly [xmlSchemaObjectTableBrand]: true;
  contains(name: System.Xml.XmlQualifiedName): boolean;
  getEnumerator(): System.Collections.IDictionaryEnumerator;
  item: {
    (name: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaObject;
    get(name: System.Xml.XmlQualifiedName): System.Xml.Schema.XmlSchemaObject;
  };
  readonly count: number;
  readonly names: System.Collections.ICollection;
  readonly values: System.Collections.ICollection;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaObjectTable = import("./XmlSchemaObjectTable").XmlSchemaObjectTable;
  }
}

export interface XmlSchemaObjectTableHostType extends HostType<
  XmlSchemaObjectTable,
  ReferenceTypeTrait
> {}

export {};
