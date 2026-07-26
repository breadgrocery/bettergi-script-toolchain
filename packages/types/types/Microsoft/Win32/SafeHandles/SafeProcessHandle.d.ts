import "../../../System/IDisposable";
import "../../../System/IntPtr";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import "./SafeHandleZeroOrMinusOneIsInvalid";

declare const safeProcessHandleBrand: unique symbol;
export interface SafeProcessHandle
  extends Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid, System.IDisposableInput {
  readonly [safeProcessHandleBrand]: true;
}

declare global {
  namespace Microsoft.Win32.SafeHandles {
    type SafeProcessHandle = import("./SafeProcessHandle").SafeProcessHandle;
  }
}

export interface SafeProcessHandleHostType extends HostType<
  SafeProcessHandle,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (): SafeProcessHandle;
  new (existingHandle: System.IntPtr, ownsHandle: boolean): SafeProcessHandle;
}

export {};
