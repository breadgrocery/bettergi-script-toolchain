import type {
  FamilyArgumentOmitted,
  HostType,
  Int32Host,
  InterfaceTypeTrait,
  StrongNumeric
} from "../../Microsoft/ClearScript/HostType";
import type { VoidResult } from "../../Microsoft/ClearScript/VoidResult";
import "../Memory";

declare const iBufferWriterArity1InputBrand: unique symbol;
export interface _IBufferWriterArity1Input<T> {
  readonly [iBufferWriterArity1InputBrand]: true;
}

export interface _IBufferWriterArity1<T>
  extends
    Microsoft.ClearScript.ClrInterfaceView<_IBufferWriterArity1Input<T>>,
    _IBufferWriterArity1Input<T> {
  advance(count: number | StrongNumeric<Int32Host>): VoidResult;
  getMemory(): System.Memory<T>;
  getMemory(sizeHint: number | StrongNumeric<Int32Host>): System.Memory<T>;
}

export interface _IBufferWriterArity1HostType<T> extends HostType<
  _IBufferWriterArity1<T>,
  InterfaceTypeTrait
> {}

export type IBufferWriterFamily<T1 = FamilyArgumentOmitted> = _IBufferWriterArity1<T1>;

declare global {
  namespace System.Buffers {
    type IBufferWriter<T1 = Microsoft.ClearScript.FamilyArgumentOmitted> =
      import("./IBufferWriter").IBufferWriterFamily<T1>;
  }
}

export type IBufferWriterInputFamily<T1 = FamilyArgumentOmitted> = _IBufferWriterArity1Input<T1>;
export type IBufferWriterInput<T1> = _IBufferWriterArity1Input<T1>;

declare global {
  namespace System.Buffers {
    type IBufferWriterInput<T1> = import("./IBufferWriter").IBufferWriterInput<T1>;
  }
}

export type IBufferWriterHostType<T1> = _IBufferWriterArity1HostType<T1>;

export {};
