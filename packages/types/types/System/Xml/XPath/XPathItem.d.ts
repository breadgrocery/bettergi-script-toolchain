import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../DateTime";
import "../../V8SplitProxyHelpers";
import "../IXmlNamespaceResolver";
import "../Schema/XmlSchemaType";

declare const xPathItemBrand: unique symbol;
export interface XPathItem extends ClrHostValue {
  readonly [xPathItemBrand]: true;
  readonly isNode: boolean;
  readonly typedValue: unknown;
  readonly value: string;
  readonly valueAsBoolean: boolean;
  readonly valueAsDateTime: System.DateTime;
  readonly valueAsDouble: number;
  readonly valueAsInt: number;
  readonly valueAsLong: number;
  readonly valueType: System.Type;
  readonly xmlType: System.Xml.Schema.XmlSchemaType;
  valueAs(returnType: System.Type): unknown;
  valueAs(returnType: System.Type, nsResolver: System.Xml.IXmlNamespaceResolver | null): unknown;
}

declare global {
  namespace System.Xml.XPath {
    type XPathItem = import("./XPathItem").XPathItem;
  }
}

export interface XPathItemHostType extends HostType<XPathItem, ReferenceTypeTrait> {}

export {};
