import type {
  ClrHostValue,
  HostArray,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../XmlQualifiedName";

declare const xmlSerializerNamespacesBrand: unique symbol;
export interface XmlSerializerNamespaces extends ClrHostValue {
  readonly [xmlSerializerNamespacesBrand]: true;
  add(prefix: string, ns: string | null): VoidResult;
  readonly count: number;
  toArray(): HostArray<System.Xml.XmlQualifiedName>;
}

declare global {
  namespace System.Xml.Serialization {
    type XmlSerializerNamespaces = import("./XmlSerializerNamespaces").XmlSerializerNamespaces;
  }
}

export interface XmlSerializerNamespacesHostType extends HostType<
  XmlSerializerNamespaces,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlSerializerNamespaces;
  new (namespaces: System.Xml.Serialization.XmlSerializerNamespaces): XmlSerializerNamespaces;
  new (namespaces: HostArray<System.Xml.XmlQualifiedName>): XmlSerializerNamespaces;
}

export {};
