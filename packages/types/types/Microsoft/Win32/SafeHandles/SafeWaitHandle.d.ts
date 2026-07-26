import "../../../System/IDisposable";
import "../../../System/IntPtr";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import "./SafeHandleZeroOrMinusOneIsInvalid";

declare const safeWaitHandleBrand: unique symbol;
export interface SafeWaitHandle
  extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid, System.IDisposableInput {
  readonly [safeWaitHandleBrand]: true;
}

declare global {
  namespace Microsoft.Win32.SafeHandles {
    type SafeWaitHandle = import("./SafeWaitHandle").SafeWaitHandle;
  }
}

export interface SafeWaitHandleHostType extends HostType<
  SafeWaitHandle,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SafeWaitHandle;
  new (existingHandle: System.IntPtr, ownsHandle: boolean): SafeWaitHandle;
}

export {};
