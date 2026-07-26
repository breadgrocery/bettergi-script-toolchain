import "../../System/AsyncCallback";
import "../../System/IAsyncResult";
import "../../System/ICloneable";
import "../../System/IntPtr";
import "../../System/MulticastDelegate";
import "../../System/Runtime/Serialization/ISerializable";
import type { HostDelegate, HostType, ReferenceTypeTrait } from "./HostType";

declare const delegateContinuationCallbackBrand: unique symbol;
export interface ContinuationCallback extends HostDelegate {
  readonly [delegateContinuationCallbackBrand]: true;
  (): boolean;
  invoke(): boolean;
}

declare global {
  namespace Microsoft.ClearScript {
    type ContinuationCallback = import("./ContinuationCallback").ContinuationCallback;
  }
}

export interface ContinuationCallbackHostType extends HostType<
  ContinuationCallback,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): ContinuationCallback;
}

export {};
