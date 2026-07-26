import type {
  ClrHostValue,
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../IDisposable";
import "../Memory";
import "./IMemoryOwner";
import "./IPinnable";
import "./MemoryHandle";

declare const memoryManagerArity1Brand: unique symbol;
export interface _MemoryManagerArity1<T>
  extends
    ClrHostValue,
    System.Buffers.IMemoryOwnerInput<T>,
    System.IDisposableInput,
    System.Buffers.IPinnableInput {
  readonly [memoryManagerArity1Brand]: true;
  pin(): System.Buffers.MemoryHandle;
  pin(elementIndex: number | StrongNumeric<Int32Host>): System.Buffers.MemoryHandle;
  readonly memory: System.Memory<T>;
  unpin(): VoidResult;
}

export interface _MemoryManagerArity1HostType<T> extends HostType<
  _MemoryManagerArity1<T>,
  ReferenceTypeTrait
> {}

export type MemoryManagerFamily<T1 = FamilyArgumentOmitted> = _MemoryManagerArity1<T1>;

declare global {
  namespace System.Buffers {
    type MemoryManager<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./MemoryManager").MemoryManagerFamily<T1>;
  }
}

export type MemoryManagerHostType<T1> = _MemoryManagerArity1HostType<T1>;

export {};
