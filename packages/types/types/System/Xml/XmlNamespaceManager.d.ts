import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Collections/Generic/IDictionary";
import "../Collections/IEnumerable";
import "../Collections/IEnumerator";
import "./IXmlNamespaceResolver";
import "./XmlNameTable";
import "./XmlNamespaceScope";

declare const xmlNamespaceManagerBrand: unique symbol;
export interface XmlNamespaceManager
  extends ClrHostValue, System.Xml.IXmlNamespaceResolverInput, System.Collections.IEnumerableInput {
  readonly [xmlNamespaceManagerBrand]: true;
  addNamespace(prefix: string, uri: string): VoidResult;
  getEnumerator(): System.Collections.IEnumerator;
  getNamespacesInScope(
    scope: EnumInput<System.Xml.XmlNamespaceScope>
  ): System.Collections.Generic.IDictionary<string, string>;
  hasNamespace(prefix: string): boolean;
  lookupNamespace(prefix: string): string;
  lookupPrefix(uri: string): string;
  popScope(): boolean;
  pushScope(): VoidResult;
  readonly defaultNamespace: string;
  readonly nameTable: System.Xml.XmlNameTable;
  removeNamespace(prefix: string, uri: string): VoidResult;
}

declare global {
  namespace System.Xml {
    type XmlNamespaceManager = import("./XmlNamespaceManager").XmlNamespaceManager;
  }
}

export interface XmlNamespaceManagerHostType extends HostType<
  XmlNamespaceManager,
  ReferenceTypeTrait
> {
  new (nameTable: System.Xml.XmlNameTable): XmlNamespaceManager;
}

export {};
