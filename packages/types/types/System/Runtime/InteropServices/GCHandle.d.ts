import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ValueTypeTrait
} from "../../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../../Microsoft/ClearScript/VoidResult";
import "../../IEquatable";
import "../../IntPtr";
import "../../ValueType";
import "./GCHandleType";

declare const gCHandleBrand: unique symbol;
export interface GCHandle extends ClrHostValue {
  readonly [gCHandleBrand]: true;
  addrOfPinnedObject(): System.IntPtr;
  equals(o: unknown | null): boolean;
  equals(other: System.Runtime.InteropServices.GCHandle): boolean;
  free(): VoidResult;
  getHashCode(): number;
  readonly isAllocated: boolean;
  target: unknown;
}

declare global {
  namespace System.Runtime.InteropServices {
    type GCHandle = import("./GCHandle").GCHandle;
  }
}

export interface GCHandleHostType extends HostType<GCHandle, ValueTypeTrait> {
  alloc(value: unknown | null): System.Runtime.InteropServices.GCHandle;
  alloc(
    value: unknown | null,
    type: EnumInput<System.Runtime.InteropServices.GCHandleType>
  ): System.Runtime.InteropServices.GCHandle;
  fromIntPtr(value: System.IntPtr): System.Runtime.InteropServices.GCHandle;
  toIntPtr(value: System.Runtime.InteropServices.GCHandle): System.IntPtr;
}

export {};
