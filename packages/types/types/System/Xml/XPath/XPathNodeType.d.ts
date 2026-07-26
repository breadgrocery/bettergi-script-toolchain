import type {
  ClrHostValue,
  EnumTypeTrait,
  HostType
} from "../../../Microsoft/ClearScript/HostType";
import "../../Enum";
import "../../IComparable";
import "../../IConvertible";
import "../../IFormattable";
import "../../ISpanFormattable";

declare const xPathNodeTypeBrand: unique symbol;
export interface XPathNodeType extends ClrHostValue {
  readonly [xPathNodeTypeBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XPathNodeType = import("./XPathNodeType").XPathNodeType;
  }
}

export interface XPathNodeTypeHostType extends HostType<XPathNodeType, EnumTypeTrait> {
  readonly root: XPathNodeType;
  readonly element: XPathNodeType;
  readonly attribute: XPathNodeType;
  readonly namespace: XPathNodeType;
  readonly text: XPathNodeType;
  readonly significantWhitespace: XPathNodeType;
  readonly whitespace: XPathNodeType;
  readonly processingInstruction: XPathNodeType;
  readonly comment: XPathNodeType;
  readonly all: XPathNodeType;
}

export {};
