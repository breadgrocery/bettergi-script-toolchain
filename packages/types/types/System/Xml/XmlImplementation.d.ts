import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "./XmlDocument";
import "./XmlNameTable";

declare const xmlImplementationBrand: unique symbol;
export interface XmlImplementation extends ClrHostValue {
  readonly [xmlImplementationBrand]: true;
  createDocument(): System.Xml.XmlDocument;
  hasFeature(strFeature: string, strVersion: string): boolean;
}

declare global {
  namespace System.Xml {
    type XmlImplementation = import("./XmlImplementation").XmlImplementation;
  }
}

export interface XmlImplementationHostType extends HostType<
  XmlImplementation,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): XmlImplementation;
  new (nt: System.Xml.XmlNameTable): XmlImplementation;
}

export {};
