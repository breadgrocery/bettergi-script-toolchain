import type {
  HostDelegate,
  HostType,
  ReferenceTypeTrait
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../AsyncCallback";
import "../IAsyncResult";
import "../ICloneable";
import "../IntPtr";
import "../MulticastDelegate";
import "../Runtime/Serialization/ISerializable";
import "./PropertyChangingEventArgs";

declare const delegatePropertyChangingEventHandlerBrand: unique symbol;
export interface PropertyChangingEventHandler extends HostDelegate {
  readonly [delegatePropertyChangingEventHandlerBrand]: true;
  (sender: unknown | null, e: System.ComponentModel.PropertyChangingEventArgs): VoidResult;
  invoke(sender: unknown | null, e: System.ComponentModel.PropertyChangingEventArgs): VoidResult;
}

declare global {
  namespace System.ComponentModel {
    type PropertyChangingEventHandler =
      import("./PropertyChangingEventHandler").PropertyChangingEventHandler;
  }
}

export interface PropertyChangingEventHandlerHostType extends HostType<
  PropertyChangingEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): PropertyChangingEventHandler;
}

export {};
