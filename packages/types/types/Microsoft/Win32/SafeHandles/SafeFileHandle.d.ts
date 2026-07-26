import "../../../System/IDisposable";
import "../../../System/IntPtr";
import type {
  HostType,
  PublicDefaultConstructorTrait,
  ReferenceTypeTrait
} from "../../ClearScript/HostType";
import "./SafeHandleZeroOrMinusOneIsInvalid";

declare const safeFileHandleBrand: unique symbol;
export interface SafeFileHandle
  extends
    Omit<Microsoft.Win32.SafeHandles.SafeHandleZeroOrMinusOneIsInvalid, "isAsync">,
    System.IDisposableInput {
  readonly [safeFileHandleBrand]: true;
  readonly isAsync: boolean;
}

declare global {
  namespace Microsoft.Win32.SafeHandles {
    type SafeFileHandle = import("./SafeFileHandle").SafeFileHandle;
  }
}

export interface SafeFileHandleHostType extends HostType<
  SafeFileHandle,
  ReferenceTypeTrait & PublicDefaultConstructorTrait
> {
  new (preexistingHandle: System.IntPtr, ownsHandle: boolean): SafeFileHandle;
  new (): SafeFileHandle;
}

export {};
