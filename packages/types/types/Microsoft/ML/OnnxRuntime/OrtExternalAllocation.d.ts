import "../../../System/IntPtr";
import type {
  ClrHostValue,
  EnumInput,
  HostArray,
  HostType,
  Int64Host,
  ReferenceTypeTrait,
  StrongNumeric
} from "../../ClearScript/HostType";
import "./OrtMemoryInfo";
import "./Tensors/TensorElementType";

declare const ortExternalAllocationBrand: unique symbol;
export interface OrtExternalAllocation extends ClrHostValue {
  readonly [ortExternalAllocationBrand]: true;
  readonly elementType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly info: Microsoft.ML.OnnxRuntime.OrtMemoryInfo;
  readonly pointer: System.IntPtr;
  readonly shape: HostArray<number>;
  readonly size: number;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtExternalAllocation = import("./OrtExternalAllocation").OrtExternalAllocation;
  }
}

export interface OrtExternalAllocationHostType extends HostType<
  OrtExternalAllocation,
  ReferenceTypeTrait
> {
  new (
    memInfo: Microsoft.ML.OnnxRuntime.OrtMemoryInfo,
    shape: HostArray<number | StrongNumeric<Int64Host>>,
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>,
    pointer: System.IntPtr,
    sizeInBytes: number | StrongNumeric<Int64Host>
  ): OrtExternalAllocation;
}

export {};
