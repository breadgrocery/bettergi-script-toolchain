import "../../System/AsyncCallback";
import "../../System/IAsyncResult";
import "../../System/ICloneable";
import "../../System/IO/Stream";
import "../../System/IntPtr";
import "../../System/MulticastDelegate";
import "../../System/Runtime/Serialization/ISerializable";
import "./DocumentInfo";
import type { HostDelegate, HostType, ReferenceTypeTrait } from "./HostType";
import "./ValueRef";

declare const delegateAsyncDocumentLoadCallbackBrand: unique symbol;
export interface AsyncDocumentLoadCallback extends HostDelegate {
  readonly [delegateAsyncDocumentLoadCallbackBrand]: true;
  (
    info: Microsoft.ClearScript.ValueRef<Microsoft.ClearScript.DocumentInfo>,
    contents: System.IO.Stream
  ): Promise<void>;
  invoke(
    info: Microsoft.ClearScript.ValueRef<Microsoft.ClearScript.DocumentInfo>,
    contents: System.IO.Stream
  ): Promise<void>;
}

declare global {
  namespace Microsoft.ClearScript {
    type AsyncDocumentLoadCallback =
      import("./AsyncDocumentLoadCallback").AsyncDocumentLoadCallback;
  }
}

export interface AsyncDocumentLoadCallbackHostType extends HostType<
  AsyncDocumentLoadCallback,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): AsyncDocumentLoadCallback;
}

export {};
