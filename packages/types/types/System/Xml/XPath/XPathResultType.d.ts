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

declare const xPathResultTypeBrand: unique symbol;
export interface XPathResultType extends ClrHostValue {
  readonly [xPathResultTypeBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XPathResultType = import("./XPathResultType").XPathResultType;
  }
}

export interface XPathResultTypeHostType extends HostType<XPathResultType, EnumTypeTrait> {
  readonly number: XPathResultType;
  readonly string: XPathResultType;
  readonly boolean: XPathResultType;
  readonly nodeSet: XPathResultType;
  readonly navigator: XPathResultType;
  readonly any: XPathResultType;
  readonly error: XPathResultType;
}

export {};
