import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Collections/IComparer";
import "../IXmlNamespaceResolver";
import "../XmlNamespaceManager";
import "./XPathResultType";
import "./XmlCaseOrder";
import "./XmlDataType";
import "./XmlSortOrder";

declare const xPathExpressionBrand: unique symbol;
export interface XPathExpression extends ClrHostValue {
  readonly [xPathExpressionBrand]: true;
  addSort(expr: unknown, comparer: System.Collections.IComparer): VoidResult;
  addSort(
    expr: unknown,
    order: EnumInput<System.Xml.XPath.XmlSortOrder>,
    caseOrder: EnumInput<System.Xml.XPath.XmlCaseOrder>,
    lang: string,
    dataType: EnumInput<System.Xml.XPath.XmlDataType>
  ): VoidResult;
  clone(): System.Xml.XPath.XPathExpression;
  readonly expression: string;
  readonly returnType: System.Xml.XPath.XPathResultType;
  setContext(nsManager: System.Xml.XmlNamespaceManager): VoidResult;
  setContext(nsResolver: System.Xml.IXmlNamespaceResolver | null): VoidResult;
}

declare global {
  namespace System.Xml.XPath {
    type XPathExpression = import("./XPathExpression").XPathExpression;
  }
}

export interface XPathExpressionHostType extends HostType<XPathExpression, ReferenceTypeTrait> {
  compile(xpath: string): System.Xml.XPath.XPathExpression;
  compile(
    xpath: string,
    nsResolver: System.Xml.IXmlNamespaceResolver | null
  ): System.Xml.XPath.XPathExpression;
}

export {};
