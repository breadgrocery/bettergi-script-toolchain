import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../Microsoft/ClearScript/VoidResult";
import "../System/Buffers/IMemoryOwner";
import "../System/Buffers/IPinnable";
import "../System/Buffers/MemoryHandle";
import "../System/Buffers/MemoryManager";
import "../System/IDisposable";
import "./Mat";

declare const matMemoryManagerArity1Brand: unique symbol;
export interface _MatMemoryManagerArity1<T>
  extends
    Omit<System.Buffers.MemoryManager<T>, "getSpan" | "pin" | "unpin">,
    System.Buffers.IMemoryOwnerInput<T>,
    System.IDisposableInput,
    System.Buffers.IPinnableInput {
  readonly [matMemoryManagerArity1Brand]: true;
  pin(): System.Buffers.MemoryHandle;
  pin(elementIndex: number | StrongNumeric<Int32Host>): System.Buffers.MemoryHandle;
  unpin(): VoidResult;
}

export interface _MatMemoryManagerArity1HostType<T> extends HostType<
  _MatMemoryManagerArity1<T>,
  ReferenceTypeTrait
> {
  new (mat: OpenCvSharp.Mat): _MatMemoryManagerArity1<T>;
  new (mat: OpenCvSharp.Mat, isDataOwner: boolean): _MatMemoryManagerArity1<T>;
}

export type MatMemoryManagerFamily<T1 = FamilyArgumentOmitted> = _MatMemoryManagerArity1<T1>;

declare global {
  namespace OpenCvSharp {
    type MatMemoryManager<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./MatMemoryManager").MatMemoryManagerFamily<T1>;
  }
}

export type MatMemoryManagerHostType<T1> = _MatMemoryManagerArity1HostType<T1>;

export {};
