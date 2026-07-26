import type { ClrHostValue, HostType, ValueTypeTrait } from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../Runtime/InteropServices/GCHandle";
import "../ValueType";
import "./IPinnable";

declare const memoryHandleBrand: unique symbol;
export interface MemoryHandle extends ClrHostValue, System.IDisposableInput {
  readonly [memoryHandleBrand]: true;
  dispose(): VoidResult;
}

declare global {
  namespace System.Buffers {
    type MemoryHandle = import("./MemoryHandle").MemoryHandle;
  }
}

export interface MemoryHandleHostType extends HostType<MemoryHandle, ValueTypeTrait> {}

export {};
