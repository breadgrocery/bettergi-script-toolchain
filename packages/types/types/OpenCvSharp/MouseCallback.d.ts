import type {
  EnumInput,
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
import "./MouseEventFlags";
import "./MouseEventTypes";

declare const delegateMouseCallbackBrand: unique symbol;
export interface MouseCallback extends HostDelegate {
  readonly [delegateMouseCallbackBrand]: true;
  (
    event: EnumInput<OpenCvSharp.MouseEventTypes>,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.MouseEventFlags>,
    userData: System.IntPtr
  ): VoidResult;
  invoke(
    event: EnumInput<OpenCvSharp.MouseEventTypes>,
    x: number | StrongNumeric<Int32Host>,
    y: number | StrongNumeric<Int32Host>,
    flags: EnumInput<OpenCvSharp.MouseEventFlags>,
    userData: System.IntPtr
  ): VoidResult;
}

declare global {
  namespace OpenCvSharp {
    type MouseCallback = import("./MouseCallback").MouseCallback;
  }
}

export interface MouseCallbackHostType extends HostType<MouseCallback, ReferenceTypeTrait> {
  new (object: unknown, method: System.IntPtr): MouseCallback;
}

export {};
