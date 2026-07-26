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

declare const delegateTrackbarCallbackBrand: unique symbol;
export interface TrackbarCallback extends HostDelegate {
  readonly [delegateTrackbarCallbackBrand]: true;
  (pos: number | StrongNumeric<Int32Host>): VoidResult;
  invoke(pos: number | StrongNumeric<Int32Host>): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type TrackbarCallback = import("./TrackbarCallback").TrackbarCallback;
  }
}

export interface TrackbarCallbackHostType extends HostType<TrackbarCallback, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): TrackbarCallback;
}

export {};
