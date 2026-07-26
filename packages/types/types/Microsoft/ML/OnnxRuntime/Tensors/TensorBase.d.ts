import "../../../../System/V8SplitProxyHelpers";
import type {
  ClrHostValue,
  EnumInput,
  HostType,
  ReferenceTypeTrait
} from "../../../ClearScript/HostType";
import "./TensorElementType";
import "./TensorElementTypeInfo";
import "./TensorTypeInfo";

declare const tensorBaseBrand: unique symbol;
export interface TensorBase extends ClrHostValue {
  readonly [tensorBaseBrand]: true;
  getTypeInfo(): Microsoft.ML.OnnxRuntime.Tensors.TensorTypeInfo;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type TensorBase = import("./TensorBase").TensorBase;
  }
}

export interface TensorBaseHostType extends HostType<TensorBase, ReferenceTypeTrait> {
  getTypeInfo(type: System.Type): Microsoft.ML.OnnxRuntime.Tensors.TensorTypeInfo;
  getElementTypeInfo(
    elementType: EnumInput<Microsoft.ML.OnnxRuntime.Tensors.TensorElementType>
  ): Microsoft.ML.OnnxRuntime.Tensors.TensorElementTypeInfo;
}

export {};
