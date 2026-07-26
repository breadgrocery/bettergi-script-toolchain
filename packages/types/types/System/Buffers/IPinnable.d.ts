import type {
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "./MemoryHandle";

declare const iPinnableInputBrand: unique symbol;
export interface IPinnableInput {
  readonly [iPinnableInputBrand]: true;
}

export interface IPinnable
  extends Microsoft.ClearScript.ClrInterfaceView<IPinnableInput>, IPinnableInput {
  pin(elementIndex: number | StrongNumeric<Int32Host>): System.Buffers.MemoryHandle;
  unpin(): VoidResult;
}

declare global {
  namespace System.Buffers {
    type IPinnableInput = import("./IPinnable").IPinnableInput;
  }
}

declare global {
  namespace System.Buffers {
    type IPinnable = import("./IPinnable").IPinnable;
  }
}

export interface IPinnableHostType extends HostType<IPinnable, InterfaceTypeTrait> {}

export {};
