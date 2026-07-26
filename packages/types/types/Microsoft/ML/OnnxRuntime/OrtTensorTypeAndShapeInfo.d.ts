import "../../../System/ValueType";
import type { ClrHostValue, HostArray, HostType, ValueTypeTrait } from "../../ClearScript/HostType";
import "./Tensors/TensorElementType";

declare const ortTensorTypeAndShapeInfoBrand: unique symbol;
export interface OrtTensorTypeAndShapeInfo extends ClrHostValue {
  readonly [ortTensorTypeAndShapeInfoBrand]: true;
  readonly dimensionsCount: number;
  readonly elementCount: number;
  readonly elementDataType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly isString: boolean;
  readonly shape: HostArray<number>;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtTensorTypeAndShapeInfo =
      import("./OrtTensorTypeAndShapeInfo").OrtTensorTypeAndShapeInfo;
  }
}

export interface OrtTensorTypeAndShapeInfoHostType extends HostType<
  OrtTensorTypeAndShapeInfo,
  ValueTypeTrait
> {}

export {};
