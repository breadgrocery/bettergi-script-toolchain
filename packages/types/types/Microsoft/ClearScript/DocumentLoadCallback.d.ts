import "../../System/AsyncCallback";
import "../../System/IAsyncResult";
import "../../System/ICloneable";
import "../../System/IntPtr";
import "../../System/MulticastDelegate";
import "../../System/Runtime/Serialization/ISerializable";
import "./DocumentInfo";
import type { HostDelegate, HostType, ReferenceTypeTrait } from "./HostType";
import type { HostVariableRef } from "./HostVariable";
import type { VoidResult } from "./VoidResult";

declare const delegateDocumentLoadCallbackBrand: unique symbol;
export interface DocumentLoadCallback extends HostDelegate {
  readonly [delegateDocumentLoadCallbackBrand]: true;
  (info: HostVariableRef<Microsoft.ClearScript.DocumentInfo>): VoidResult;
  invoke(info: HostVariableRef<Microsoft.ClearScript.DocumentInfo>): VoidResult;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentLoadCallback = import("./DocumentLoadCallback").DocumentLoadCallback;
  }
}

export interface DocumentLoadCallbackHostType extends HostType<
  DocumentLoadCallback,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): DocumentLoadCallback;
}

export {};
