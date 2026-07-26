import type { HostDelegate, HostType, ReferenceTypeTrait } from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "./IAsyncResult";
import "./ICloneable";
import "./IntPtr";
import "./MulticastDelegate";
import "./Runtime/Serialization/ISerializable";

declare const delegateAsyncCallbackBrand: unique symbol;
export interface AsyncCallback extends HostDelegate {
  readonly [delegateAsyncCallbackBrand]: true;
  (ar: System.IAsyncResult): VoidResult;
  invoke(ar: System.IAsyncResult): VoidResult;
}

declare global {
  namespace System {
    type AsyncCallback = import("./AsyncCallback").AsyncCallback;
  }
}

export interface AsyncCallbackHostType extends HostType<AsyncCallback, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): AsyncCallback;
}

export {};
