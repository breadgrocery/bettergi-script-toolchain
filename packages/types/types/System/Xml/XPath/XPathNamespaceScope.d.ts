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

declare const xPathNamespaceScopeBrand: unique symbol;
export interface XPathNamespaceScope extends ClrHostValue {
  readonly [xPathNamespaceScopeBrand]: true;
}

declare global {
  namespace System.Xml.XPath {
    type XPathNamespaceScope = import("./XPathNamespaceScope").XPathNamespaceScope;
  }
}

export interface XPathNamespaceScopeHostType extends HostType<XPathNamespaceScope, EnumTypeTrait> {
  readonly all: XPathNamespaceScope;
  readonly excludeXml: XPathNamespaceScope;
  readonly local: XPathNamespaceScope;
}

export {};
