import "../../../System/ValueType";
import type { ClrHostValue, HostType, ValueTypeTrait } from "../../ClearScript/HostType";
import "./OrtTypeInfo";
import "./Tensors/TensorElementType";

declare const ortMapTypeInfoBrand: unique symbol;
export interface OrtMapTypeInfo extends ClrHostValue {
  readonly [ortMapTypeInfoBrand]: true;
  readonly keyType: Microsoft.ML.OnnxRuntime.Tensors.TensorElementType;
  readonly valueType: Microsoft.ML.OnnxRuntime.OrtTypeInfo;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtMapTypeInfo = import("./OrtMapTypeInfo").OrtMapTypeInfo;
  }
}

export interface OrtMapTypeInfoHostType extends HostType<OrtMapTypeInfo, ValueTypeTrait> {}

export {};
