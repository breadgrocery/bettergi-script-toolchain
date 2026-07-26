import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";

declare const xmlQualifiedNameBrand: unique symbol;
export interface XmlQualifiedName extends ClrHostValue {
  readonly [xmlQualifiedNameBrand]: true;
  equals(other: unknown | null): boolean;
  getHashCode(): number;
  readonly isEmpty: boolean;
  readonly name: string;
  readonly namespace: string;
  toString(): string;
}

declare global {
  namespace System.Xml {
    type XmlQualifiedName = import("./XmlQualifiedName").XmlQualifiedName;
  }
}

export interface XmlQualifiedNameHostType extends HostType<
  XmlQualifiedName,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlQualifiedName;
  new (name: string | null): XmlQualifiedName;
  new (name: string | null, ns: string | null): XmlQualifiedName;
  readonly empty: System.Xml.XmlQualifiedName;
  toString(name: string, ns: string | null): string;
}

export {};
