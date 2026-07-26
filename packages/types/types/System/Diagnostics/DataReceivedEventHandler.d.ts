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
import "./DataReceivedEventArgs";

declare const delegateDataReceivedEventHandlerBrand: unique symbol;
export interface DataReceivedEventHandler extends HostDelegate {
  readonly [delegateDataReceivedEventHandlerBrand]: true;
  (sender: unknown, e: System.Diagnostics.DataReceivedEventArgs): VoidResult;
  invoke(sender: unknown, e: System.Diagnostics.DataReceivedEventArgs): VoidResult;
}

declare global {
  namespace System.Diagnostics {
    type DataReceivedEventHandler = import("./DataReceivedEventHandler").DataReceivedEventHandler;
  }
}

export interface DataReceivedEventHandlerHostType extends HostType<
  DataReceivedEventHandler,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): DataReceivedEventHandler;
}

export {};
