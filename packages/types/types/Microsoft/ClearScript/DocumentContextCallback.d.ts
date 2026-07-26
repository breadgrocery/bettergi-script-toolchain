import "../../System/AsyncCallback";
import "../../System/Collections/Generic/IDictionary";
import "../../System/IAsyncResult";
import "../../System/ICloneable";
import "../../System/IntPtr";
import "../../System/MulticastDelegate";
import "../../System/Runtime/Serialization/ISerializable";
import "./DocumentInfo";
import type { HostDelegate, HostType, ReferenceTypeTrait } from "./HostType";

declare const delegateDocumentContextCallbackBrand: unique symbol;
export interface DocumentContextCallback extends HostDelegate {
  readonly [delegateDocumentContextCallbackBrand]: true;
  (
    info: Microsoft.ClearScript.DocumentInfo
  ): System.Collections.Generic.IDictionary<string, unknown>;
  invoke(
    info: Microsoft.ClearScript.DocumentInfo
  ): System.Collections.Generic.IDictionary<string, unknown>;
}

declare global {
  namespace Microsoft.ClearScript {
    type DocumentContextCallback = import("./DocumentContextCallback").DocumentContextCallback;
  }
}

export interface DocumentContextCallbackHostType extends HostType<
  DocumentContextCallback,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): DocumentContextCallback;
}

export {};
