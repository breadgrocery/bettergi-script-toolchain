import "../../../System/IDisposable";
import "../../../System/Runtime/InteropServices/SafeHandle";
import type {
  EnumInput,
  HostArray,
  HostType,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./FixedBufferOnnxValue";
import "./IDisposableReadOnlyCollection";
import "./OrtExternalAllocation";
import "./OrtMemoryAllocation";
import "./OrtMemoryInfo";
import "./OrtValue";
import "./Tensors/TensorElementType";

declare const ortIoBindingBrand: unique symbol;
export interface OrtIoBinding
  extends
    Omit<
      System.Runtime.InteropServices.SafeHandle,
      | "bindInput"
      | "bindOutput"
      | "bindOutputToDevice"
      | "clearBoundInputs"
      | "clearBoundOutputs"
      | "getOutputNames"
      | "getOutputValues"
      | "isInvalid"
      | "synchronizeBoundInputs"
      | "synchronizeBoundOutputs"
    >,
    System.IDisposableInput {
  readonly [ortIoBindingBrand]: true;
  bindInput(name: string, allocation: Microsoft.ML.OnnxRuntime.OrtExternalAllocation): VoidResult;
  bindInput(
    name: string,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    shape: HostArray<number | StrongNumeric<Int64Host>>,
    allocation: Microsoft.ML.OnnxRuntime.OrtMemoryAllocation
  ): VoidResult;
  bindInput(name: string, fixedValue: Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue): VoidResult;
  bindInput(name: string, ortValue: Microsoft.ML.OnnxRuntime.OrtValue): VoidResult;
  bindOutput(name: string, allocation: Microsoft.ML.OnnxRuntime.OrtExternalAllocation): VoidResult;
  bindOutput(
    name: string,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    shape: HostArray<number | StrongNumeric<Int64Host>>,
    allocation: Microsoft.ML.OnnxRuntime.OrtMemoryAllocation
  ): VoidResult;
  bindOutput(name: string, fixedValue: Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue): VoidResult;
  bindOutput(name: string, ortValue: Microsoft.ML.OnnxRuntime.OrtValue): VoidResult;
  bindOutputToDevice(name: string, memInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo): VoidResult;
  clearBoundInputs(): VoidResult;
  clearBoundOutputs(): VoidResult;
  getOutputNames(): HostArray<string>;
  getOutputValues(): Microsoft.ML.OnnxRuntime.IDisposableReadOnlyCollection<Microsoft.ML.OnnxRuntime.OrtValue>;
  readonly isInvalid: boolean;
  synchronizeBoundInputs(): VoidResult;
  synchronizeBoundOutputs(): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtIoBinding = import("./OrtIoBinding").OrtIoBinding;
  }
}

export interface OrtIoBindingHostType extends HostType<OrtIoBinding, ReferenceTypeTrait> {}

export {};
