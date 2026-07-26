import "../../System/Enum";
import "../../System/IComparable";
import "../../System/IConvertible";
import "../../System/IFormattable";
import "../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "./HostType";

declare const documentAccessFlagsBrand: unique symbol;
export interface DocumentAccessFlags extends ClrHostValue {
  readonly [documentAccessFlagsBrand]: true;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentAccessFlags = import("./DocumentAccessFlags").DocumentAccessFlags;
  }
}

export interface DocumentAccessFlagsHostType extends HostType<DocumentAccessFlags, EnumTypeTrait> {
  readonly none: DocumentAccessFlags;
  readonly enableFileLoading: DocumentAccessFlags;
  readonly enableWebLoading: DocumentAccessFlags;
  readonly enableAllLoading: DocumentAccessFlags;
  readonly enforceRelativePrefix: DocumentAccessFlags;
  readonly allowCategoryMismatch: DocumentAccessFlags;
  readonly useAsyncLoadCallback: DocumentAccessFlags;
}

export {};
