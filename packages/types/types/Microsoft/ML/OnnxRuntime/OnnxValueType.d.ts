import "../../../System/Enum";
import "../../../System/IComparable";
import "../../../System/IConvertible";
import "../../../System/IFormattable";
import "../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../ClearScript/HostType";

declare const onnxValueTypeBrand: unique symbol;
export interface OnnxValueType extends ClrHostValue {
  readonly [onnxValueTypeBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime {
    type OnnxValueType = import("./OnnxValueType").OnnxValueType;
  }
}

export interface OnnxValueTypeHostType extends HostType<OnnxValueType, EnumTypeTrait> {
  readonly onnX_TYPE_UNKNOWN: OnnxValueType;
  readonly onnX_TYPE_TENSOR: OnnxValueType;
  readonly onnX_TYPE_SEQUENCE: OnnxValueType;
  readonly onnX_TYPE_MAP: OnnxValueType;
  readonly onnX_TYPE_OPAQUE: OnnxValueType;
  readonly onnX_TYPE_SPARSETENSOR: OnnxValueType;
  readonly onnX_TYPE_OPTIONAL: OnnxValueType;
}

export {};
