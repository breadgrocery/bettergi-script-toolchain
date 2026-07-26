import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../../System/IDisposable";
import "../../../System/IntPtr";
import "../../../System/Runtime/InteropServices/GCHandle";
import "../../../System/Runtime/InteropServices/GCHandleType";

declare const scopedGCHandleBrand: unique symbol;
export interface ScopedGCHandle extends ClrHostValue, System.IDisposableInput {
  readonly [scopedGCHandleBrand]: true;
  dispose(): VoidResult;
  readonly handle: System.Runtime.InteropServices.GCHandle;
  readonly isAllocated: boolean;
  readonly target: unknown;
  free(): VoidResult;
  toString(): string;
}

declare global {
  namespace OpenCvSharp.Internal.Util {
    type ScopedGCHandle = import("./ScopedGCHandle").ScopedGCHandle;
  }
}

export interface ScopedGCHandleHostType extends HostType<ScopedGCHandle, ReferenceTypeTrait> {
  new (value: unknown): ScopedGCHandle;
  new (
    value: unknown,
    type: EnumInput<System.Runtime.InteropServices.GCHandleType>
  ): ScopedGCHandle;
  fromIntPtr(value: System.IntPtr): OpenCvSharp.Internal.Util.ScopedGCHandle;
  toIntPtr(value: OpenCvSharp.Internal.Util.ScopedGCHandle): System.IntPtr;
}

export {};
