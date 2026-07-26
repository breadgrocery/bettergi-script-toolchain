import "../../System/IO/Stream";
import "../../System/Text/Encoding";
import "./DocumentInfo";
import type { ClrHostValue, HostType, ReferenceTypeTrait } from "./HostType";

declare const documentBrand: unique symbol;
export interface Document extends ClrHostValue {
  readonly [documentBrand]: true;
  readonly info: Microsoft.ClearScript.DocumentInfo;
  readonly contents: System.IO.Stream;
  readonly encoding: System.Text.Encoding;
}

declare global {
  namespace Microsoft.ClearScript {
    type Document = import("./Document").Document;
  }
}

export interface DocumentHostType extends HostType<Document, ReferenceTypeTrait> {}

export {};
