import type {
  ClrHostValue,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import "../../Guid";

declare const symbolDocumentInfoBrand: unique symbol;
export interface SymbolDocumentInfo extends ClrHostValue {
  readonly [symbolDocumentInfoBrand]: true;
  readonly documentType: System.Guid;
  readonly fileName: string;
  readonly language: System.Guid;
  readonly languageVendor: System.Guid;
}

declare global {
  namespace System.Linq.Expressions {
    type SymbolDocumentInfo = import("./SymbolDocumentInfo").SymbolDocumentInfo;
  }
}

export interface SymbolDocumentInfoHostType extends HostType<
  SymbolDocumentInfo,
  ReferenceTypeTrait
> {}

export {};
