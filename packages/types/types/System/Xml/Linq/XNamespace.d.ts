import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "./XName";

declare const xNamespaceBrand: unique symbol;
export interface XNamespace extends ClrHostValue {
  readonly [xNamespaceBrand]: true;
  equals(obj: unknown | null): boolean;
  getHashCode(): number;
  getName(localName: string): System.Xml.Linq.XName;
  readonly namespaceName: string;
  toString(): string;
}

declare global {
  namespace System.Xml.Linq {
    type XNamespace = import("./XNamespace").XNamespace;
  }
}

export interface XNamespaceHostType extends HostType<XNamespace, ReferenceTypeTrait> {
  readonly none: System.Xml.Linq.XNamespace;
  readonly xml: System.Xml.Linq.XNamespace;
  readonly xmlns: System.Xml.Linq.XNamespace;
  get(namespaceName: string): System.Xml.Linq.XNamespace;
}

export {};
