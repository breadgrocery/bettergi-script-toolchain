import type { ClrHostValue, HostType, ReferenceTypeTrait } from "../../ClearScript/HostType";
import "./OnnxValueType";
import "./OrtMapTypeInfo";
import "./OrtSequenceOrOptionalTypeInfo";
import "./OrtTensorTypeAndShapeInfo";

declare const ortTypeInfoBrand: unique symbol;
export interface OrtTypeInfo extends ClrHostValue {
  readonly [ortTypeInfoBrand]: true;
  readonly mapTypeInfo: Microsoft.ML.OnnxRuntime.OrtMapTypeInfo;
  readonly onnxType: Microsoft.ML.OnnxRuntime.OnnxValueType;
  readonly optionalTypeInfo: Microsoft.ML.OnnxRuntime.OrtSequenceOrOptionalTypeInfo;
  readonly sequenceTypeInfo: Microsoft.ML.OnnxRuntime.OrtSequenceOrOptionalTypeInfo;
  readonly tensorTypeAndShapeInfo: Microsoft.ML.OnnxRuntime.OrtTensorTypeAndShapeInfo;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtTypeInfo = import("./OrtTypeInfo").OrtTypeInfo;
  }
}

export interface OrtTypeInfoHostType extends HostType<OrtTypeInfo, ReferenceTypeTrait> {}

export {};
