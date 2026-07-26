import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/Generic/IEnumerable";
import "../IXmlLineInfo";
import "../XmlNodeType";
import "./XName";
import "./XObject";

declare const xAttributeBrand: unique symbol;
export interface XAttribute
  extends
    Omit<
      System.Xml.Linq.XObject,
      | "isNamespaceDeclaration"
      | "name"
      | "nextAttribute"
      | "nodeType"
      | "previousAttribute"
      | "remove"
      | "setValue"
      | "toString"
      | "value"
    >,
    System.Xml.IXmlLineInfoInput {
  readonly [xAttributeBrand]: true;
  readonly isNamespaceDeclaration: boolean;
  readonly name: System.Xml.Linq.XName;
  readonly nextAttribute: System.Xml.Linq.XAttribute;
  readonly nodeType: System.Xml.XmlNodeType;
  readonly previousAttribute: System.Xml.Linq.XAttribute;
  remove(): VoidResult;
  setValue(value: unknown): VoidResult;
  toString(): string;
  value: string;
}

declare global {
  namespace System.Xml.Linq {
    type XAttribute = import("./XAttribute").XAttribute;
  }
}

export interface XAttributeHostType extends HostType<XAttribute, ReferenceTypeTrait> {
  new (name: System.Xml.Linq.XName, value: unknown): XAttribute;
  new (other: System.Xml.Linq.XAttribute): XAttribute;
  readonly emptySequence: System.Collections.Generic.IEnumerable<System.Xml.Linq.XAttribute>;
}

export {};
