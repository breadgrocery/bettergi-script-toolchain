import type { ClrHostValue, HostType, ReferenceTypeTrait } from "./HostType";

declare const documentCategoryBrand: unique symbol;
export interface DocumentCategory extends ClrHostValue {
  readonly [documentCategoryBrand]: true;
  maxCacheSize: number;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentCategory = import("./DocumentCategory").DocumentCategory;
  }
}

export interface DocumentCategoryHostType extends HostType<DocumentCategory, ReferenceTypeTrait> {
  readonly script: Microsoft.ClearScript.DocumentCategory;
  readonly json: Microsoft.ClearScript.DocumentCategory;
}

export {};
