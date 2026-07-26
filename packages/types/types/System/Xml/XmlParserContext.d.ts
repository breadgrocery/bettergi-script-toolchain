import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import "../Text/Encoding";
import "./XmlNameTable";
import "./XmlNamespaceManager";
import "./XmlSpace";

declare const xmlParserContextBrand: unique symbol;
export interface XmlParserContext extends ClrHostValue {
  readonly [xmlParserContextBrand]: true;
  baseURI: string;
  docTypeName: string;
  encoding: System.Text.Encoding;
  internalSubset: string;
  nameTable: System.Xml.XmlNameTable;
  namespaceManager: System.Xml.XmlNamespaceManager;
  publicId: string;
  systemId: string;
  xmlLang: string;
  xmlSpace: System.Xml.XmlSpace;
}

declare global {
  namespace System.Xml {
    type XmlParserContext = import("./XmlParserContext").XmlParserContext;
  }
}

export interface XmlParserContextHostType extends HostType<XmlParserContext, ReferenceTypeTrait> {
  new (
    nt: System.Xml.XmlNameTable | null,
    nsMgr: System.Xml.XmlNamespaceManager | null,
    xmlLang: string | null,
    xmlSpace: EnumInput<System.Xml.XmlSpace>
  ): XmlParserContext;
  new (
    nt: System.Xml.XmlNameTable | null,
    nsMgr: System.Xml.XmlNamespaceManager | null,
    xmlLang: string | null,
    xmlSpace: EnumInput<System.Xml.XmlSpace>,
    enc: System.Text.Encoding | null
  ): XmlParserContext;
  new (
    nt: System.Xml.XmlNameTable | null,
    nsMgr: System.Xml.XmlNamespaceManager | null,
    docTypeName: string | null,
    pubId: string | null,
    sysId: string | null,
    internalSubset: string | null,
    baseURI: string | null,
    xmlLang: string | null,
    xmlSpace: EnumInput<System.Xml.XmlSpace>
  ): XmlParserContext;
  new (
    nt: System.Xml.XmlNameTable | null,
    nsMgr: System.Xml.XmlNamespaceManager | null,
    docTypeName: string | null,
    pubId: string | null,
    sysId: string | null,
    internalSubset: string | null,
    baseURI: string | null,
    xmlLang: string | null,
    xmlSpace: EnumInput<System.Xml.XmlSpace>,
    enc: System.Text.Encoding | null
  ): XmlParserContext;
}

export {};
