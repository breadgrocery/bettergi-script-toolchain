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
import "./PropertyChangedEventArgs";

declare const delegatePropertyChangedEventHandlerBrand: unique symbol;
export interface PropertyChangedEventHandler extends HostDelegate {
  readonly [delegatePropertyChangedEventHandlerBrand]: true;
  (sender: unknown | null, e: System.ComponentModel.PropertyChangedEventArgs): VoidResult;
  invoke(sender: unknown | null, e: System.ComponentModel.PropertyChangedEventArgs): VoidResult;
}

declare global {
  namespace System.ComponentModel {
    type PropertyChangedEventHandler =
      import("./PropertyChangedEventHandler").PropertyChangedEventHandler;
  }
}

export interface PropertyChangedEventHandlerHostType extends HostType<
  PropertyChangedEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): PropertyChangedEventHandler;
}

export {};
