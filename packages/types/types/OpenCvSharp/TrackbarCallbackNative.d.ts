import type {
  HostDelegate,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/AsyncCallback";
import "../System/IAsyncResult";
import "../System/ICloneable";
import "../System/IntPtr";
import "../System/MulticastDelegate";
import "../System/Runtime/Serialization/ISerializable";

declare const delegateTrackbarCallbackNativeBrand: unique symbol;
export interface TrackbarCallbackNative extends HostDelegate {
  readonly [delegateTrackbarCallbackNativeBrand]: true;
  (pos: number | StrongNumeric<Int32Host>, userData: System.IntPtr): VoidResult;
  invoke(pos: number | StrongNumeric<Int32Host>, userData: System.IntPtr): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type TrackbarCallbackNative = import("./TrackbarCallbackNative").TrackbarCallbackNative;
  }
}

export interface TrackbarCallbackNativeHostType extends HostType<
  TrackbarCallbackNative,
  ReferenceTypeTrait
> {
  new (object: unknown, method: System.IntPtr): TrackbarCallbackNative;
}

export {};
