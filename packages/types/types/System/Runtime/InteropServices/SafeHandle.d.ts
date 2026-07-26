import type { HostType, ReferenceTypeTrait } from "../../../Microsoft/ClearScript/HostType";
import type { HostVariableRef } from "../../../Microsoft/ClearScript/HostVariable";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IDisposable";
import "../../IntPtr";
import "../ConstrainedExecution/CriticalFinalizerObject";

declare const safeHandleBrand: unique symbol;
export interface SafeHandle
  extends
    Omit<
      System.Runtime.ConstrainedExecution.CriticalFinalizerObject,
      | "close"
      | "dangerousAddRef"
      | "dangerousGetHandle"
      | "dangerousRelease"
      | "dispose"
      | "isClosed"
      | "isInvalid"
      | "setHandleAsInvalid"
    >,
    System.IDisposableInput {
  readonly [safeHandleBrand]: true;
  close(): VoidResult;
  dangerousAddRef(success: HostVariableRef<boolean>): VoidResult;
  dangerousGetHandle(): System.IntPtr;
  dangerousRelease(): VoidResult;
  dispose(): VoidResult;
  readonly isClosed: boolean;
  readonly isInvalid: boolean;
  setHandleAsInvalid(): VoidResult;
}

declare global {
  namespace System.Runtime.InteropServices {
    type SafeHandle = import("./SafeHandle").SafeHandle;
  }
}

export interface SafeHandleHostType extends HostType<SafeHandle, ReferenceTypeTrait> {}

export {};
