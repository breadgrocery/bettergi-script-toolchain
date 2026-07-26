import "../../../System/ValueType";
import type { ClrHostValue, HostType, ValueTypeTrait } from "../../ClearScript/HostType";
import "./OrtTypeInfo";

declare const ortSequenceOrOptionalTypeInfoBrand: unique symbol;
export interface OrtSequenceOrOptionalTypeInfo extends ClrHostValue {
  readonly [ortSequenceOrOptionalTypeInfoBrand]: true;
  readonly elementType: Microsoft.ML.OnnxRuntime.OrtTypeInfo;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OrtSequenceOrOptionalTypeInfo =
      import("./OrtSequenceOrOptionalTypeInfo").OrtSequenceOrOptionalTypeInfo;
  }
}

export interface OrtSequenceOrOptionalTypeInfoHostType extends HostType<
  OrtSequenceOrOptionalTypeInfo,
  ValueTypeTrait
> {}

export {};
