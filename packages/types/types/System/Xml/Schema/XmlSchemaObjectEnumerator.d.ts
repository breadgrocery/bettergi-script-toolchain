import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/IEnumerator";
import "./XmlSchemaObject";

declare const xmlSchemaObjectEnumeratorBrand: unique symbol;
export interface XmlSchemaObjectEnumerator
  extends ClrHostValue, System.Collections.IEnumeratorInput {
  readonly [xmlSchemaObjectEnumeratorBrand]: true;
  moveNext(): boolean;
  readonly current: System.Xml.Schema.XmlSchemaObject;
  reset(): VoidResult;
}

declare global {
  namespace System.Xml.Schema {
    type XmlSchemaObjectEnumerator =
      import("./XmlSchemaObjectEnumerator").XmlSchemaObjectEnumerator;
  }
}

export interface XmlSchemaObjectEnumeratorHostType extends HostType<
  XmlSchemaObjectEnumerator,
  ReferenceTypeTrait
> {}

export {};
