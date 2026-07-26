import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../Threading/CancellationToken";
import "../IXmlLineInfo";
import "../XmlNodeType";
import "../XmlWriter";
import "./XNode";

declare const xDocumentTypeBrand: unique symbol;
export interface XDocumentType
  extends
    Omit<
      System.Xml.Linq.XNode,
      "internalSubset" | "name" | "nodeType" | "publicId" | "systemId" | "writeTo" | "writeToAsync"
    >,
    System.Xml.IXmlLineInfoInput {
  readonly [xDocumentTypeBrand]: true;
  internalSubset: string;
  name: string;
  publicId: string;
  readonly nodeType: System.Xml.XmlNodeType;
  systemId: string;
  writeTo(writer: System.Xml.XmlWriter): VoidResult;
  writeToAsync(
    writer: System.Xml.XmlWriter,
    cancellationToken: System.Threading.CancellationToken
  ): Promise<void>;
}

declare global {
  namespace System.Xml.Linq {
    type XDocumentType = import("./XDocumentType").XDocumentType;
  }
}

export interface XDocumentTypeHostType extends HostType<XDocumentType, ReferenceTypeTrait> {
  new (
    name: string,
    publicId: string | null,
    systemId: string | null,
    internalSubset: string | null
  ): XDocumentType;
  new (other: System.Xml.Linq.XDocumentType): XDocumentType;
}

export {};
