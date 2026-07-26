import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";

declare const xDeclarationBrand: unique symbol;
export interface XDeclaration extends ClrHostValue {
  readonly [xDeclarationBrand]: true;
  encoding: string;
  standalone: string;
  toString(): string;
  version: string;
}

declare global {
  namespace System.Xml.Linq {
    type XDeclaration = import("./XDeclaration").XDeclaration;
  }
}

export interface XDeclarationHostType extends HostType<XDeclaration, ReferenceTypeTrait> {
  new (version: string | null, encoding: string | null, standalone: string | null): XDeclaration;
  new (other: System.Xml.Linq.XDeclaration): XDeclaration;
}

export {};
