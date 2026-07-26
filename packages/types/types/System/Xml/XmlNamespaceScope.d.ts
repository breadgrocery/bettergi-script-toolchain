import type { ClrHostValue, EnumTypeTrait, HostType } from "../../Microsoft/ClearScript/HostType";
import "../Enum";
import "../IComparable";
import "../IConvertible";
import "../IFormattable";
import "../ISpanFormattable";

declare const xmlNamespaceScopeBrand: unique symbol;
export interface XmlNamespaceScope extends ClrHostValue {
  readonly [xmlNamespaceScopeBrand]: true;
}

declare global {
  namespace System.Xml {
    type XmlNamespaceScope = import("./XmlNamespaceScope").XmlNamespaceScope;
  }
}

export interface XmlNamespaceScopeHostType extends HostType<XmlNamespaceScope, EnumTypeTrait> {
  readonly all: XmlNamespaceScope;
  readonly excludeXml: XmlNamespaceScope;
  readonly local: XmlNamespaceScope;
}

export {};
