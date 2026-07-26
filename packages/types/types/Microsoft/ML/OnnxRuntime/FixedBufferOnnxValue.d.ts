import "../../../System/IDisposable";
import "../../../System/Memory";
import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import type { VoidResult } from "../../ClearScript/VoidResult";
import "./OrtMemoryInfo";
import "./Tensors/Tensor";
import "./Tensors/TensorElementType";

declare const fixedBufferOnnxValueBrand: unique symbol;
export interface FixedBufferOnnxValue extends ClrHostValue, System.IDisposableInput {
  readonly [fixedBufferOnnxValueBrand]: true;
  dispose(): VoidResult;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type FixedBufferOnnxValue = import("./FixedBufferOnnxValue").FixedBufferOnnxValue;
  }
}

export interface FixedBufferOnnxValueHostType extends HostType<
  FixedBufferOnnxValue,
  ReferenceTypeTrait
> {
  createFromTensor<T>(
    type1: HostType<T>,
    value: Microsoft.ML.OnnxRuntime.Tensors.Tensor<T>
  ): Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue;
  createFromMemory<T>(
    type1: HostType<T>,
    memoryInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo,
    memory: System.Memory<T>,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    shape: HostArray<number | StrongNumeric<Int64Host>>,
    bytesSize: number | StrongNumeric<Int64Host>
  ): Microsoft.ML.OnnxRuntime.FixedBufferOnnxValue;
}

export {};
