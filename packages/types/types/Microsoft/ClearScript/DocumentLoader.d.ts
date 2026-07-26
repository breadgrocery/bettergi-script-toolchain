import "../../System/Nullable";
import "../../System/Uri";
import "./Document";
import "./DocumentCategory";
import "./DocumentContextCallback";
import "./DocumentInfo";
import "./DocumentSettings";
import type { ClrHostValue, HostType, ReferenceTypeTrait } from "./HostType";
import type { VoidResult } from "./VoidResult";

declare const documentLoaderBrand: unique symbol;
export interface DocumentLoader extends ClrHostValue {
  readonly [documentLoaderBrand]: true;
  maxCacheSize: number;
  loadDocument(
    settings: Microsoft.ClearScript.DocumentSettings,
    sourceInfo: Microsoft.ClearScript.DocumentInfo | null | null,
    specifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contextCallback: Microsoft.ClearScript.DocumentContextCallback
  ): Microsoft.ClearScript.Document;
  loadDocumentAsync(
    settings: Microsoft.ClearScript.DocumentSettings,
    sourceInfo: Microsoft.ClearScript.DocumentInfo | null | null,
    specifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contextCallback: Microsoft.ClearScript.DocumentContextCallback
  ): Promise<Microsoft.ClearScript.Document>;
  getCachedDocument(uri: System.Uri): Microsoft.ClearScript.Document;
  cacheDocument(
    document: Microsoft.ClearScript.Document,
    replace: boolean
  ): Microsoft.ClearScript.Document;
  discardCachedDocuments(): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentLoader = import("./DocumentLoader").DocumentLoader;
  }
}

export interface DocumentLoaderHostType extends HostType<DocumentLoader, ReferenceTypeTrait> {
  readonly default: Microsoft.ClearScript.DocumentLoader;
}

export {};
