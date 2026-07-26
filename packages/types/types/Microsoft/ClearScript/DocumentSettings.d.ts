import "./AsyncDocumentLoadCallback";
import "./Document";
import "./DocumentAccessFlags";
import "./DocumentCategory";
import "./DocumentContextCallback";
import "./DocumentLoadCallback";
import "./DocumentLoader";
import type {
  ClrHostValue,
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "./HostType";
import type { VoidResult } from "./VoidResult";

declare const documentSettingsBrand: unique symbol;
export interface DocumentSettings extends ClrHostValue {
  readonly [documentSettingsBrand]: true;
  loader: Microsoft.ClearScript.DocumentLoader;
  accessFlags: Microsoft.ClearScript.DocumentAccessFlags;
  searchPath: string;
  fileNameExtensions: string;
  loadCallback: Microsoft.ClearScript.DocumentLoadCallback;
  asyncLoadCallback: Microsoft.ClearScript.AsyncDocumentLoadCallback;
  contextCallback: Microsoft.ClearScript.DocumentContextCallback;
  addSystemDocument(
    identifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contents: string
  ): VoidResult;
  addSystemDocument(
    identifier: string,
    category: Microsoft.ClearScript.DocumentCategory,
    contents: string,
    contextCallback: Microsoft.ClearScript.DocumentContextCallback
  ): VoidResult;
  addSystemDocument(identifier: string, contents: string): VoidResult;
  addSystemDocument(identifier: string, document: Microsoft.ClearScript.Document): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentSettings = import("./DocumentSettings").DocumentSettings;
  }
}

export interface DocumentSettingsHostType extends HostType<
  DocumentSettings,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): DocumentSettings;
}

export {};
