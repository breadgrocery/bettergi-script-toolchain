import type { EnumInput, HostType, InterfaceTypeTrait } from "../../Microsoft/ClearScript/HostType";
import "../Collections/Generic/IDictionary";
import "./XmlNamespaceScope";

declare const iXmlNamespaceResolverInputBrand: unique symbol;
export interface IXmlNamespaceResolverInput {
  readonly [iXmlNamespaceResolverInputBrand]: true;
}

export interface IXmlNamespaceResolver
  extends
    Microsoft.ClearScript.ClrInterfaceView<IXmlNamespaceResolverInput>,
    IXmlNamespaceResolverInput {
  getNamespacesInScope(
    scope: EnumInput<System.Xml.XmlNamespaceScope>
  ): System.Collections.Generic.IDictionary<string, string>;
  lookupNamespace(prefix: string): string;
  lookupPrefix(namespaceName: string): string;
}

declare global {
  namespace System.Xml {
    type IXmlNamespaceResolverInput = import("./IXmlNamespaceResolver").IXmlNamespaceResolverInput;
  }
}

declare global {
  namespace System.Xml {
    type IXmlNamespaceResolver = import("./IXmlNamespaceResolver").IXmlNamespaceResolver;
  }
}

export interface IXmlNamespaceResolverHostType extends HostType<
  IXmlNamespaceResolver,
  InterfaceTypeTrait
> {}

export {};
