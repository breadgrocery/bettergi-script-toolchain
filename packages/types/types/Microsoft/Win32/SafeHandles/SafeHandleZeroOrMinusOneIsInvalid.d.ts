import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type { HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";

declare const safeHandleZeroOrMinusOneIsInvalidBrand: unique symbol;
export interface SafeHandleZeroOrMinusOneIsInvalid
  extends Omit<System.Runtime.InteropServices.SafeHandle, "isInvalid">, System.IDisposableInput {
  readonly [safeHandleZeroOrMinusOneIsInvalidBrand]: true;
  readonly isInvalid: boolean;
}

declare global {
  namespace Microsoft.Win32.SafeHandles {
    type SafeHandleZeroOrMinusOneIsInvalid =
      import("./SafeHandleZeroOrMinusOneIsInvalid").SafeHandleZeroOrMinusOneIsInvalid;
  }
}

export interface SafeHandleZeroOrMinusOneIsInvalidHostType extends HostType<
  SafeHandleZeroOrMinusOneIsInvalid,
  ReferenceTypeTrait
> {}

export {};
