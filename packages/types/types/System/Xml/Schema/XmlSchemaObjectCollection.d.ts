import type {
  HostArray,
  HostType,
  Int32Host,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/CollectionBase";
import "../../Collections/ICollection";
import "../../Collections/IEnumerable";
import "../../Collections/IList";
import "./XmlSchemaObject";
import "./XmlSchemaObjectEnumerator";

declare const xmlSchemaObjectCollectionBrand: unique symbol;
export interface XmlSchemaObjectCollection
  extends
    Omit<
      System.Collections.CollectionBase,
      "add" | "contains" | "copyTo" | "getEnumerator" | "indexOf" | "insert" | "item" | "remove"
    >,
    System.Collections.IListInput,
    System.Collections.ICollectionInput,
    System.Collections.IEnumerableInput {
  readonly [xmlSchemaObjectCollectionBrand]: true;
  add(item: System.Xml.Schema.XmlSchemaObject): number;
  contains(item: System.Xml.Schema.XmlSchemaObject): boolean;
  copyTo(
    array: HostArray<System.Xml.Schema.XmlSchemaObject>,
    index: number | StrongNumeric<Int32Host>
  ): VoidResult;
  getEnumerator(): System.Xml.Schema.XmlSchemaObjectEnumerator;
  indexOf(item: System.Xml.Schema.XmlSchemaObject): number;
  insert(
    index: number | StrongNumeric<Int32Host>,
    item: System.Xml.Schema.XmlSchemaObject
  ): VoidResult;
  item: {
    (index: number | StrongNumeric<Int32Host>): System.Xml.Schema.XmlSchemaObject;
    get(index: number | StrongNumeric<Int32Host>): System.Xml.Schema.XmlSchemaObject;
    set(
      index: number | StrongNumeric<Int32Host>,
      value: System.Xml.Schema.XmlSchemaObject
    ): System.Xml.Schema.XmlSchemaObject;
  };
  remove(item: System.Xml.Schema.XmlSchemaObject): VoidResult;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaObjectCollection =
      import("./XmlSchemaObjectCollection").XmlSchemaObjectCollection;
  }
}

export interface XmlSchemaObjectCollectionHostType extends HostType<
  XmlSchemaObjectCollection,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSchemaObjectCollection;
  new (parent: System.Xml.Schema.XmlSchemaObject | null): XmlSchemaObjectCollection;
}

export {};
