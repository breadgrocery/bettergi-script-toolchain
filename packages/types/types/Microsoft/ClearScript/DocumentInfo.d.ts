import "../../System/Nullable";
import "../../System/Uri";
import "../../System/ValueType";
import "./DocumentCategory";
import "./DocumentContextCallback";
import "./DocumentFlags";
import type { ClrHostValue, HostType, ValueTypeTrait } from "./HostType";

declare const documentInfoBrand: unique symbol;
export interface DocumentInfo extends ClrHostValue {
  readonly [documentInfoBrand]: true;
  readonly name: string;
  readonly uri: System.Uri;
  sourceMapUri: System.Uri;
  category: Microsoft.ClearScript.DocumentCategory;
  flags: Microsoft.ClearScript.DocumentFlags | null;
  contextCallback: Microsoft.ClearScript.DocumentContextCallback;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentInfo = import("./DocumentInfo").DocumentInfo;
  }
}

export interface DocumentInfoHostType extends HostType<DocumentInfo, ValueTypeTrait> {
  new (name: string): DocumentInfo;
  new (uri: System.Uri): DocumentInfo;
}

export {};
