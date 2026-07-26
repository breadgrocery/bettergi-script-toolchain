import "../../../../System/Enum";
import "../../../../System/IComparable";
import "../../../../System/IConvertible";
import "../../../../System/IFormattable";
import "../../../../System/ISpanFormattable";
import type { ClrHostValue, EnumTypeTrait, HostType } from "../../../ClearScript/HostType";

declare const tensorElementTypeBrand: unique symbol;
export interface TensorElementType extends ClrHostValue {
  readonly [tensorElementTypeBrand]: true;
}

declare global {
  namespace Microsoft.ML.OnnxRuntime.Tensors {
    type TensorElementType = import("./TensorElementType").TensorElementType;
  }
}

export interface TensorElementTypeHostType extends HostType<TensorElementType, EnumTypeTrait> {
  readonly float: TensorElementType;
  readonly uInt8: TensorElementType;
  readonly int8: TensorElementType;
  readonly uInt16: TensorElementType;
  readonly int16: TensorElementType;
  readonly int32: TensorElementType;
  readonly int64: TensorElementType;
  readonly string: TensorElementType;
  readonly bool: TensorElementType;
  readonly float16: TensorElementType;
  readonly double: TensorElementType;
  readonly uInt32: TensorElementType;
  readonly uInt64: TensorElementType;
  readonly complex64: TensorElementType;
  readonly complex128: TensorElementType;
  readonly bFloat16: TensorElementType;
  readonly dataTypeMax: TensorElementType;
}

export {};
